---
title: "Résumé"
image: /assets/img/social-card.jpg
layout: page
---
# Saverio Ferrara
**Software Engineer** / **Engineering Manager**  
[GitHub](https://github.com/fsferrara) | [LinkedIn](https://www.linkedin.com/in/fsferrara) | 📍 Rome, Italy

I work as a **Software Engineer**: adaptable, proactive, and creative. I enjoy solving problems, **collaborating** within teams, and **leading** the way on technical challenges.


{% assign sorted = site.resume | sort: "date" | reverse %}
{% assign date_format = site.minima.dayless_date_format | default: "%B, %Y" %}
{% assign categories = "experience,education,certifications" | split: "," %}
{% for category in categories %}
<div id="#{{ category | slugize }}">
<hr />
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
