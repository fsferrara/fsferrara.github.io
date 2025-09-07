---
title: "System Administrator"
org: "Agorà Med"
start-date: 2007-06-01
end-date: 2008-02-01
employment-type: "Contract"
location: "Naples Area, Italy"
location-type: "On-site"
highlights:
  - Installed and maintained mixed environments (Windows Server 2003, Debian Linux).
  - Managed company email systems (qmail, postfix, Sophos for Linux, courier).
  - Deployed and maintained VoIP PBX (TrixBox/Asterisk).
  - Supported streaming services on Windows platforms.
  - Developed web pages using PHP, JSP, and ASPX.
skills:
  - Linux System Administration
  - Windows Server Administration
  - Email System Management (qmail, postfix, courier, Sophos)
  - VoIP PBX Deployment (TrixBox/Asterisk)
  - Web Development (PHP, JSP, ASPX)
categories:
  - experience
---
{% assign date_format = "%B %Y" %}
# {{page.title}}
## {{page.org}}
💼 **{{ page.employment-type }}** • _{{ page.start-date | date: date_format}} → {{ page.end-date | date: date_format}}_  
🏢 [{{ page.org }}](#https://www.agoratelematica.it/)  
📍 _{{ page.location }}_ • <span class="post-meta">{{ page.location-type }}</span>  


{% for highlight in page.highlights %}- {{ highlight }}  
{% endfor %}


### Skills

{% for skill in page.skills %}- {{ skill }}  
{% endfor %}


### Projects

- 💻 n/a

