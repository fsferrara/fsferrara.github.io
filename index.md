---
---

👋 Hello everyone!  
I'm a software engineer 👨🏻 and a passionate software developer 💻 living in Rome 🇮🇹. Addicted to the Linux 🐧 operating system, I love working with all the open source technologies.  
In my spare time, I like do mountain biking 🚴 and playing casual video games 🕹️.


- Brief intro (name, role, short pitch)
- Featured project(s)
- Links to key sections: Resume, Projects, Notes

<h1>Recent Posts</h1>

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
</ul>
