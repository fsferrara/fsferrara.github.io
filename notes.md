---
title: Notes
---
{% assign sorted = site.notes | sort: "date" | reverse %}
<ul>
  {% for note in sorted %}
    {% if note.tags contains "course" %}
    <li>
      <a href="{{ note.url }}">{{ note.title }}</a>
      <span> – {{ note.date | date: "%B %d, %Y" }}</span>
    </li>
    {% endif %}
  {% endfor %}
</ul>
