---
title: "Projects"
---

## Featured

{% assign sorted = site.projects | sort: "date" | reverse %}
{% assign date_format = "%Y" %}
<ul>
  {% for entry in sorted %}
    <li>
      <a href="{{ entry.url | relative_url }}">{{ entry.title | escape }}</a>
      <span class="post-meta"> – {{ entry.date | date: date_format }}</span>
    </li>
  {% endfor %}
</ul>

## Playgrounds

<ul>
{% assign repos_sorted = site.github.public_repositories | sort: "updated_at" | reverse %}
{% assign date_format = site.minima.date_format | default: "%b %-d, %Y" %}
{% for repo in repos_sorted limit:20 %}
  <li>
    <a href="{{ repo.html_url }}">{{ repo.name }}</a>
    <span class="post-meta"> – Last updated: {{ repo.updated_at | date: date_format }}</span>
  </li>
{% endfor %}
  <li>
    <a href="https://github.com/fsferrara?tab=repositories">...more</a>
    <span class="post-meta"> - Github</span>
  </li>
</ul>
