---
title: "System Administrator"
org: "Meetweb"
start-date: 2008-01-01
end-date: 2008-03-01
employment-type: "Freelance"
location: "Naples Area, Italy"
location-type: "On-site"
highlights:
  - Installed and maintained Windows Server 2003 systems.
  - Managed automated tape backup processes.
skills:
  - Windows Server Administration
  - Tape Backup
categories:
  - experience
---
{% assign date_format = "%B %Y" %}
# {{page.title}}
## {{page.org}}
💼 **{{ page.employment-type }}** • _{{ page.start-date | date: date_format}} → {{ page.end-date | date: date_format}}_  
🏢 [{{ page.org }}](http://www.meetweb.it/)  
📍 _{{ page.location }}_ • <span class="post-meta">{{ page.location-type }}</span>  


{% for highlight in page.highlights %}- {{ highlight }}  
{% endfor %}


### Skills

{% for skill in page.skills %}- {{ skill }}  
{% endfor %}


### Projects

- 💻 n/a

