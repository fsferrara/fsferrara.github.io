---
title: "Web Developer"
org: "Advanced Systems"
start-date: 2011-03-01
end-date: 2011-05-01
employment-type: "Contract"
location: "Naples Area, Italy"
location-type: "On-site"
highlights:
  - Developed a web application for print price estimates, built the user area, and implemented the entire back-office system to support users throughout the online printing process
skills:
  - Java
  - Java EE
  - Google Web Toolkit (GWT)
  - Smart GWT
  - JPA
  - MySQL
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

- 💻 [GrafPortal]({{ site.data.links.projects.grafportal.page }})

