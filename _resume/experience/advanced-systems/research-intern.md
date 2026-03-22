---
title: "Research Intern"
org: "Advanced Systems"
start-date: 2010-04-01
end-date: 2011-02-01
employment-type: "Internship"
location: "Naples Area, Italy"
location-type: "On-site"
highlights:
  - Research Intern - Databases and Information Systems
  - Design and implementation of the SADAS view rewriting module. SADAS is a specialized database management system for Data Warehousing environments.
skills:
  - C++
  - Database Management System (DBMS)
  - Algorithms
  - SQL
  - Data Structures
  - Performance Engineering
categories:
  - experience
---
{% assign date_format = "%B %Y" %}
# {{page.title}}
## {{page.org}}
💼 **{{ page.employment-type }}** • _{{ page.start-date | date: date_format}} → {{ page.end-date | date: date_format}}_  
🏢 [{{ page.org }}](https://www.advancedsystems.it/)  
📍 _{{ page.location }}_ • <span class="post-meta">{{ page.location-type }}</span>  


{% for highlight in page.highlights %}- {{ highlight }}  
{% endfor %}


### Skills

{% for skill in page.skills %}- {{ skill }}  
{% endfor %}


### Projects

- 💻 [Query rewriting module for SADAS Engine]({{ site.data.links.projects.query-rewriting-module-for-sadas-engine.page }})

