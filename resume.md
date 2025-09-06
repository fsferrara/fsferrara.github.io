---
title: "Resume"
image: /assets/img/social-card.jpg
layout: default
---
<link rel="stylesheet" href="/assets/css/headshot.css">
![Saverio Ferrara](/assets/img/headshot/profile-pic-round.png){: .headshot}

# Saverio Ferrara
## Software Engineer & Technology Lead

Email: **fsferrara@gmail.com** • Phone: **(+39) 3405114184**  
Location: **Rome, Italy** • LinkedIn: **{{ site.data.links.profile.linkedin }}**

---
<br/>

## Professional Summary
_Full Stack • Generalist • Mentor_

An experienced Full Stack Software Engineer and Technology Lead who excels in guiding technical architecture and delivering scalable, maintainable, and high-quality software solutions. Deeply passionate about mentoring and empowering engineering teams, fostering a culture of curiosity and growth to develop future technical leaders. Combines strong stakeholder communication with a pragmatic problem-solving mindset to take full ownership of projects, driving them from strategic conception through to successful completion.

---
<br/>

## Work Experience

{% assign sorted = site.resume | sort: "date" | reverse %}
{% assign date_format = site.minima.dayless_date_format | default: "%B, %Y" %}
{% for entry in sorted %}
{% if entry.categories contains "experience" %}
<br/>
- [**{{ entry.title }}** • {{ entry.org }}]({{ entry.url | relative_url }})
    - {{ entry.employment-type }}, <span class="post-meta">{{ entry.start-date | date: date_format}} - {{ entry.end-date | date: date_format}}</span>
    - {{ entry.location}} • <span class="post-meta">{{ entry.location-type}}</span>
    - {{ entry.description}}{% for highlight in entry.highlights %}
        - {{ highlight }}{% endfor %}
    - 💎 {% for skill in entry.skills %}`{{ skill }}` {% endfor %}
{% endif %}
{% endfor %}

---
<br/>

## Skills

- **Full-Stack Development**: Builds scalable, high-quality, and maintainable software solutions across the entire technology stack.
- **Technical Leadership & Architecture**: Guides architectural decisions and shapes product strategy to meet business objectives.
- **Mentorship & Team Development**: Mentors fellow developers, fostering their growth into pragmatic and skilled technical leaders.
- **Complex Problem-Solving**: Leverages critical thinking and a data-driven approach to solve complex technical challenges effectively.
- **Stakeholder Collaboration**: Excels at communicating with stakeholders to set clear expectations and align on project plans.
- **Project Ownership**: Demonstrates a strong sense of accountability, driving projects from initial concept to final delivery.

---
<br/>

## Languages

- **Italian:** Native
- **English:** Professional working proficiency

---
<br/>

## Education
{% assign sorted = site.resume | sort: "date" | reverse %}
{% assign date_format = site.minima.dayless_date_format | default: "%B, %Y" %}
{% for entry in sorted %}
{% if entry.categories contains "education" %}
<br/>
- **{{ entry.school }}** - {{ entry.degree }}, {{entry.field-of-study}}  
    - {{ entry.start-date | date: date_format}} - {{ entry.end-date | date: date_format}}  
    - Grade: {{ entry.grade}}  
    - 💎 {% for skill in entry.skills %}`{{ skill }}` {% endfor %}
{% endif %}
{% endfor %}
