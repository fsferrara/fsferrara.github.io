#!/usr/bin/env bash
# Stamps canonical_url + syndicate: block into a single post's front matter.
# Derives the canonical URL from _site/ (ground truth — requires a prior build).
# Idempotent: no-op if canonical_url is already present and non-placeholder.
#
# Usage: stamp-canonical-url.sh <path/to/_posts/YYYY/YYYY-MM-DD-slug.md>
set -euo pipefail

if [[ $# -ne 1 ]]; then
  echo "Usage: $(basename "$0") <post-file>" >&2
  exit 1
fi

post_file="$1"

if [[ ! -f "$post_file" ]]; then
  echo "ERROR: File not found: $post_file" >&2
  exit 1
fi

# Locate repo root (parent of _posts/)
REPO="$(cd "$(dirname "$post_file")/../.." && pwd)"
SITE="$REPO/_site"

if [[ ! -d "$SITE" ]]; then
  echo "ERROR: _site/ not found at $SITE — run 'make' first to build the site." >&2
  exit 1
fi

# Extract slug: strip leading date (YYYY-MM-DD-) and .md extension
basename_val=$(basename "$post_file")
slug="${basename_val#????-??-??-}"
slug="${slug%.md}"

# Skip if already has a real (non-placeholder) canonical_url
if grep -q '^canonical_url:' "$post_file"; then
  existing=$(grep '^canonical_url:' "$post_file" | head -1)
  if echo "$existing" | grep -qE 'YYYY|MM|DD'; then
    echo "Replacing placeholder canonical_url in: $post_file"
    # Remove the placeholder line so we can insert the real one
    python3 - "$post_file" <<'PYEOF'
import sys, re

file_path = sys.argv[1]
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Remove the placeholder canonical_url line from front matter
content = re.sub(r'^canonical_url:.*YYYY.*\n', '', content, flags=re.MULTILINE)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
PYEOF
  else
    echo "SKIP: $post_file already has canonical_url (no placeholder tokens)."
    exit 0
  fi
fi

# Find the built directory in _site matching this slug
site_dir=$(find "$SITE" -type d -name "$slug" 2>/dev/null | head -1)

if [[ -z "$site_dir" ]]; then
  echo "ERROR: No _site/ directory found for slug '$slug'." >&2
  echo "  Make sure 'make' has been run and the post is published (not a draft)." >&2
  exit 1
fi

rel_path="${site_dir#$SITE}"
canonical="https://fsferrara.github.io${rel_path}/"

echo "  $slug -> $canonical"

python3 - "$post_file" "$canonical" <<'PYEOF'
import sys, re

file_path = sys.argv[1]
canonical = sys.argv[2]

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

pattern = r'^(---\n.*?\n)(---\n)'
match = re.match(pattern, content, re.DOTALL)
if not match:
    print(f"ERROR: Could not parse front matter in {file_path}", file=sys.stderr)
    sys.exit(1)

fm_body = match.group(1)
closing = match.group(2)
rest = content[match.end():]

# Check if syndicate: block already exists; only add if absent
has_syndicate = 'syndicate:' in fm_body
if has_syndicate:
    block = f"canonical_url: {canonical}\n"
else:
    block = f"canonical_url: {canonical}\nsyndicate:\n  devto: false\n  medium: false\n  linkedin: false\n"

new_content = fm_body + block + closing + rest

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)
PYEOF

echo "Done: canonical_url stamped in $post_file"
