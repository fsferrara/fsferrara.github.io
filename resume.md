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
{% capture newline %}<br/>
{% endcapture %}
{{ newline }}

## Professional Summary
_Full Stack • Generalist • Mentor_

An experienced Full Stack Software Engineer and Technology Lead who excels in guiding technical architecture and delivering scalable, maintainable, and high-quality software solutions. Deeply passionate about mentoring and empowering engineering teams, fostering a culture of curiosity and growth to develop future technical leaders. Combines strong stakeholder communication with a pragmatic problem-solving mindset to take full ownership of projects, driving them from strategic conception through to successful completion.

---
{{ newline }}

## Work Experience

{% assign sorted = site.resume | sort: "start-date" | reverse %}
{% assign date_format = "%b %Y" %}
{% for entry in sorted %}
{% if entry.categories contains "experience" %}
{{ newline }}
- [**{{ entry.title }}** • {{ entry.org }}]({{ entry.url | relative_url }})  
<span class="post-meta">{{ entry.start-date | date: date_format}} → {{ entry.end-date | date: date_format}} • {{ entry.employment-type }}</span>  
<span class="post-meta">{{ entry.location}} • {{ entry.location-type}}</span>  

{% for highlight in entry.highlights %}    - {{ highlight }}{{ newline }}{% endfor %}
  
  - Skills: {% for skill in entry.skills %}`{{ skill }}` {% endfor %}
{% endif %}
{% endfor %}

---
{{ newline }}

## Skills

- **Full-Stack Development**: Builds scalable, high-quality, and maintainable software solutions across the entire technology stack.
- **Technical Leadership & Architecture**: Guides architectural decisions and shapes product strategy to meet business objectives.
- **Mentorship & Team Development**: Mentors fellow developers, fostering their growth into pragmatic and skilled technical leaders.
- **Complex Problem-Solving**: Leverages critical thinking and a data-driven approach to solve complex technical challenges effectively.
- **Stakeholder Collaboration**: Excels at communicating with stakeholders to set clear expectations and align on project plans.
- **Project Ownership**: Demonstrates a strong sense of accountability, driving projects from initial concept to final delivery.


---
{{ newline }}

## Education

{% assign sorted = site.resume | sort: "start-date" | reverse %}
{% assign date_format = "%b %Y" %}
{% for entry in sorted %}
{% if entry.categories contains "education" %}
{{ newline }}
- [**{{ entry.school }}** - {{ entry.degree }}, {{entry.field-of-study}}]({{ entry.url | relative_url }})  
<span class="post-meta">{{ entry.start-date | date: date_format}} → {{ entry.end-date | date: date_format}}</span>  
<span class="post-meta">Grade: {{ entry.grade}}</span>  
  - Skills: {% for skill in entry.skills %}`{{ skill }}` {% endfor %}
{% endif %}
{% endfor %}


---
{{ newline }}

## Projects, Certifications, Achievements, Volunteering

→ [https://fsferrara.github.io/work/](/work.md)


---
{{ newline }}

## Languages

- **Italian:** Native
- **English:** Professional working proficiency

