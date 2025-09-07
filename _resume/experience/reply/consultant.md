---
title: "IT Consultant"
org: "Reply"
start-date: 2008-03-01
end-date: 2008-09-01
employment-type: "Full-time"
location: "Milan Area, Italy"
location-type: "On-site"
highlights:
  - Developed web applications using Java and JBoss Seam Framework on RedHat Linux servers.
  - Maintained a high-availability PostgreSQL cluster (RedHat Linux).
  - Provided maintenance for web applications written in Python/Zope.
skills:
  - Java
  - JBoss
  - JBoss Seam
  - PostgreSQL Cluster
  - Python
  - Red Hat
  - Zope
categories:
  - experience
---
{% assign date_format = "%B %Y" %}
# {{page.title}}
## {{page.org}}
💼 **{{ page.employment-type }}** • _{{ page.start-date | date: date_format}} → {{ page.end-date | date: date_format}}_  
🏢 [{{ page.org }}](http://www.reply.com/)  
👥 Open Reply s.r.l.  
📍 _{{ page.location }}_ • <span class="post-meta">{{ page.location-type }}</span>  


{% for highlight in page.highlights %}- {{ highlight }}  
{% endfor %}


### Skills

{% for skill in page.skills %}- {{ skill }}  
{% endfor %}


### Projects

- 💻 [eMatching.it]({{ site.data.links.projects.e-matching.page }})

