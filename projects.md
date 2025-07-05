---
title: "Projects"
---

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
