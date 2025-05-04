---
title: "Projects"
---
{% assign sorted = site.projects | sort: "date" | reverse %}
<ul>
  {% for note in sorted %}
    <li>
      <a href="{{ note.url }}">{{ note.title }}</a>
      <span> – {{ note.date | date: "%B %d, %Y" }}</span>
    </li>
  {% endfor %}
</ul>
