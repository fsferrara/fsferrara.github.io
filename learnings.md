---
title: "Learnings"
---


## Featured

{% assign sorted = site.learnings | sort: "date" | reverse %}
{% assign date_format = "%Y" %}
{% assign categories = "projects" | split: "," %}
{% for category in categories %}
<ul>
  {% for entry in sorted %}
    <li>
      <a href="{{ entry.url | relative_url }}">{{ entry.title | escape }}</a>
      <span class="post-meta"> – {{ entry.date | date: date_format }}</span>
    </li>
  {% endfor %}
</ul>
{% endfor %}

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


## Recent Posts

<ul>
    {% assign date_format = site.minima.date_format | default: "%b %-d, %Y" %}
    {% for post in site.posts limit:10 %}
    <li>
        <a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
        <span class="post-meta"> - {{ post.date | date: date_format }}</span>
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

## Learnings

{% assign sorted = site.learnings | sort: "date" | reverse %}
{% assign date_format = site.minima.date_format | default: "%b %-d, %Y" %}
{% assign categories = "talks,books,courses" | split: "," %}
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
