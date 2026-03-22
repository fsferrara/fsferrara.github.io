---
title: "Hotels.com Mobile Native Apps Backend"
date: 2015-07-01
skills:
  - Java
  - Spring
  - REST
  - API Development
  - Mobile Application Development
  - Open Source
  - Software Development
categories:
  - projects
---
{%- assign showcase = page.relative_path |  split: '/' | last | split: '.md' | first | append: '.png' | prepend: '../' -%}
💻 **Work Project** • _July 2015 → August 2020_  
🏢 [Software Dev Engineer II @ Hotels.com]({{ site.data.links.experience.expedia-group-software-dev-engineer-2.page }})  
📍 _Rome Area, Italy_  
[🔗 www.hotels.com](https://www.hotels.com/)  

---

![Showcase]({{ showcase }})

### Skills

{% for skill in page.skills %}- {{ skill }}  
{% endfor %}
