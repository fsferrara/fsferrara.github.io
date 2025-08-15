---
title: "Resume"
image: /assets/img/social-card.jpg
layout: page
---
<link rel="stylesheet" href="/assets/css/headshot.css">
![Saverio Ferrara](/assets/img/headshot/profile-pic-round.png){: .headshot}

## Saverio Ferrara
**Software Engineer & Technology Lead**  
_Full Stack • Generalist • Mentor_  
--  
📍 Rome, Italy | 📞 +39 340 511 4184 | ✉️ fsferrara@gmail.com  
🔗 {{ site.data.links.profile.linkedin }} | 🔗 {{ site.data.links.profile.github }}

## Summary

An experienced Full Stack Software Engineer and Technology Lead who excels in guiding technical architecture and delivering scalable, maintainable, and high-quality software solutions. Deeply passionate about mentoring and empowering engineering teams, fostering a culture of curiosity and growth to develop future technical leaders. Combines strong stakeholder communication with a pragmatic problem-solving mindset to take full ownership of projects, driving them from strategic conception through to successful completion.


### General Skills

- **Full-Stack Development**: Builds scalable, high-quality, and maintainable software solutions across the entire technology stack.
- **Technical Leadership & Architecture**: Guides architectural decisions and shapes product strategy to meet business objectives.
- **Mentorship & Team Development**: Mentors fellow developers, fostering their growth into pragmatic and skilled technical leaders.
- **Complex Problem-Solving**: Leverages critical thinking and a data-driven approach to solve complex technical challenges effectively.
- **Stakeholder Collaboration**: Excels at communicating with stakeholders to set clear expectations and align on project plans.
- **Project Ownership**: Demonstrates a strong sense of accountability, driving projects from initial concept to final delivery.


## Experience
{% assign sorted = site.resume | sort: "date" | reverse %}
{% assign date_format = site.minima.dayless_date_format | default: "%B, %Y" %}
<ul>
  {% for entry in sorted %}
    {% if entry.categories contains "experience" %}
    <li>
      <a href="{{ entry.url | relative_url }}"><strong>{{ entry.title | escape }}</strong> • {{ entry.org | escape }}</a>
      <span class="post-meta"> – {{ entry.date | date: date_format }}</span>
    </li>
    {% endif %}
  {% endfor %}
</ul>


## Projects
{% assign sorted = site.work | sort: "date" | reverse %}
{% assign date_format = "%Y" %}
<ul>
  {% for entry in sorted %}
    {% if entry.categories contains "projects" %}
    <li>
      <a href="{{ entry.url | relative_url }}">{{ entry.title | escape }}</a>
      <span class="post-meta"> – {{ entry.date | date: date_format }}</span>
    </li>
    {% endif %}
  {% endfor %}
</ul>


## Languages
* **Italian:** Native
* **English:** Full professional proficiency


## Education
{% assign sorted = site.resume | sort: "date" | reverse %}
{% assign date_format = site.minima.dayless_date_format | default: "%B, %Y" %}
<ul>
  {% for entry in sorted %}
    {% if entry.categories contains "education" %}
    <li>
      <a href="{{ entry.url | relative_url }}"><strong>{{ entry.title | escape }}</strong> • {{ entry.org | escape }}</a>
      <span class="post-meta"> – {{ entry.date | date: date_format }}</span>
    </li>
    {% endif %}
  {% endfor %}
</ul>
