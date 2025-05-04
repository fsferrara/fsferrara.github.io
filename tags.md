---
title: "Tags"
permalink: /tags.html
---

{% for entry in site.tags %}
{% assign name = entry | first %}
<div id="#{{ name | slugize }}">
<h2>
  <a name="{{ name | slugize }}"></a>#{{ name }}
</h2>
<ul class="post-list">
{% for post in site.tags[name] %}
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
