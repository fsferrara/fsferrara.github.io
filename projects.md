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

## Github Feed

<ul>
{% for repo in site.github.public_repositories %}
  <li>
    <a href="{{ repo.html_url }}">{{ repo.name }}</a>
    <span class="post-meta"> – Last updated: {{ repo.updated_at | date: "%b %d, %Y" }}</span>
  </li>
{% endfor %}
</ul>
