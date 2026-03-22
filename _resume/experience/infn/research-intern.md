---
title: "Undergraduate Researcher"
org: "INFN"
start-date: 2004-09-01
end-date: 2005-05-01
employment-type: "Thesis Research"
location: "Naples Area, Italy"
location-type: "On-site"
highlights:
  - Developed the MPV955 device driver for LynxOS to support the Virgo gravitational-wave experiment at INFN
  - Built low-level software in a POSIX-compliant real-time Unix environment, gaining hands-on experience with device drivers, operating systems, and embedded systems
skills:
  - C
  - Java
  - Unix
  - Operating Systems
  - Shell Scripting
  - Software Development
  - Algorithms
categories:
  - experience
---
{% assign date_format = "%B %Y" %}
# {{page.title}}
## {{page.org}}
💼 **{{ page.employment-type }}** • _{{ page.start-date | date: date_format}} → {{ page.end-date | date: date_format}}_  
🏢 [{{ page.org }}](https://www.na.infn.it/)  
📍 _{{ page.location }}_ • <span class="post-meta">{{ page.location-type }}</span>  


{% for highlight in page.highlights %}- {{ highlight }}  
{% endfor %}


### Skills

{% for skill in page.skills %}- {{ skill }}  
{% endfor %}


### Projects

- 💻 [MPV955 Device Driver for LynxOS]({{ site.data.links.projects.mpv955-device-driver-for-lynxos.page }})
