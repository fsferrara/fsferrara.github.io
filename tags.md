---
title: "Tags"
permalink: /tags.html
---

{% for tag in site.tags %}
{% assign tag_name = tag | first %}
{% assign tag_name_pretty = tag_name | replace: "_", " " | capitalize %}
<div id="#{{ tag_name | slugize }}"></div>
<h3> In #{{ tag_name }}: </h3>
<a name="{{ tag_name | slugize }}"></a>
<ul class="post-list post-list-narrow">
{% for post in site.tags[tag_name] %}
<li>
{%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
<b>
    <a href="{{ post.url | relative_url }}">
    {{ post.title | escape }}
    </a>
</b> - <i>{{ post.date | date: date_format }}</i>
</li>
{% endfor %}
</ul>
{% endfor %}


<ul class="post-list">
    {% assign date_format = site.minima.date_format | default: "%b %-d, %Y" %}
    {% for post in site.posts limit:2 %}
    <li>
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

    <li>
    <span class="post-meta">Past Posts</span>
    <h3>
        <a class="post-link" href="/archive">
        Archive
        </a>
    </h3>
    </li>
</ul>
