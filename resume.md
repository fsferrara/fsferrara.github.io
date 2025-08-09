---
title: "Resume"
image: /assets/img/social-card.jpg
layout: page
---
## Saverio Ferrara
**Software Engineer & Technology Lead**  
_Full Stack • Generalist • Mentor_


📞 +39 340 511 4184  
✉️ fsferrara@gmail.com  
🔗 https://www.linkedin.com/in/fsferrara  
📍 Rome, Italy

Collaborative and innovative full stack software engineer passionate about solving complex challenges and mentoring developers into pragmatic technical leaders. Skilled at shaping product strategy, guiding architecture, and delivering scalable, maintainable solutions. Adapts quickly to change, leveraging data and best practices to drive lasting impact. Brings energy and leadership to every project, inspiring teams to build reliable, high-quality software.

---

## Main Skills

- Full stack development with Java, Swift, C++, PHP
- REST and GraphQL API design and integration
- Containerization and orchestration using Docker, Kubernetes, Helm
- AWS cloud deployment and management
- Mentoring developers to become effective technical leaders
- Clear communication with stakeholders and cross-functional teams

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
