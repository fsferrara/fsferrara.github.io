---
title: "Hello World 👋"
image: /assets/img/social-card.jpg
layout: page
---
I'm a passionate Developer who loves all things Linux 🐧 and just about anything a computer [...more](/about.md)

## Recent Posts

<ul class="post-list">
    {% assign date_format = site.minima.date_format | default: "%b %-d, %Y" %}
    {% for post in site.posts limit:2 %}
    <li>
        <a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
        <span class="post-meta"> - {{ post.date | date: date_format }}</span>
        {{ post.excerpt }}
    </li>
    {% endfor %}

    <li>
        <a href="/archive">...see older posts</a>
        <span class="post-meta"> - archive</span>
    </li>
</ul>

## Recent Learnings

{% assign sorted = site.learnings | sort: "date" | reverse %}
{% assign date_format = site.minima.date_format | default: "%b %-d, %Y" %}
<ul>
  {% for entry in sorted %}
    <li>
      <a href="{{ entry.url | relative_url }}">{{ entry.title | escape }}</a>
      <span class="post-meta"> in {{ entry.categories[0] | escape }} – {{ entry.date | date: date_format }}</span>
    </li>
  {% endfor %}
      <li>
        <a href="/learnings">...more</a>
        <span class="post-meta"> - learnings</span>
    </li>
</ul>
