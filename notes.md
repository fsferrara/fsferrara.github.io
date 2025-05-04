---
title: "Notes"
---

{% assign sorted = site.notes | sort: "date" | reverse %}
{% assign date_format = site.minima.date_format | default: "%b %-d, %Y" %}
{% assign categories = "talks,certifications,courses" | split: "," %}
{% for category in categories %}
<div id="#{{ category | slugize }}">
<h2>
  <a name="{{ category | slugize }}"></a>{{ category | capitalize }}
</h2>
<ul>
  {% for entry in sorted %}
    {% if entry.categories contains category %}
    <li>
      <a href="{{ entry.url | relative_url }}">{{ entry.title | escape }}</a>
      <span class="post-meta"> – {{ entry.date | date: date_format }}</span>
    </li>
    {% endif %}
  {% endfor %}
</ul>
</div>
{% endfor %}
