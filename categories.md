---
title: "Categories"
permalink: /categories.html
---

- programming
    - languages: Posts about specific programming languages (e.g., Swift, Python, C++).
    - algorithms: Topics on algorithms and data structures.
- development
    - tools: Posts about tools and frameworks (e.g., GNU GDB, Jekyll).
    - techniques: Software design, debugging, and development techniques.
- system
    - low-level: Topics like device drivers, operating systems, and system programming.
- learning
    - certifications: Posts about certifications and courses.
    - books: Notes and learnings from books.
    - courses: Courses I took
- projects
    - case-studies: Posts discussing specific projects or case studies.
- management
    - leadership: Topics on team management, mentoring, and leadership skills.
    - processes: Posts about agile methodologies, scrum practices, and process improvements.
- misc
    - general: Posts that don't fit into the above categories.
    - thoughts: Personal reflections and ideas.

{% for entry in site.categories %}
{% assign name = entry | first %}
<div id="#{{ name | slugize }}">
<h2>
  <a name="{{ name | slugize }}"></a>{{ name }}
</h2>
<ul class="post-list">
{% for post in site.categories[name] %}
<li>
{% assign date_format = site.minima.date_format | default: "%b %-d, %Y" %}
<span class="post-meta">{{ post.date | date: date_format }}</span>
<h3>
    <a class="post-link" href="{{ post.url | relative_url }}">
    {{ post.title | escape }}
    </a>
</h3>
{% if site.minima.show_excerpts %}
    {{ post.excerpt }}
{% endif %}
</li>
{% endfor %}
</ul>
</div>
{% endfor %}
