---
title: "GrafPortal"
date: 2011-03-01
skills:
  - Java
  - MySQL
  - Front-End Development
  - Back-End Development
  - Web Applications
  - Full-Stack Development
  - Software Development
categories:
  - projects
---
{%- assign showcase = page.relative_path |  split: '/' | last | split: '.md' | first | append: '.png' | prepend: '../' -%}
💻 **Work Project** • _September 2000 → July 2001_  
🏢 [Web Developer at Advanced Systems]({{ site.data.links.experience.advanced-systems-web-developer.page }})  
📍 _Naples Area, Italy_  
[🔗 http://www.grafportal.it/](#)  

---

![Showcase]({{ showcase }})

---

GrafPortal was an online printing service. With the best printing technology, you can print high-quality books, both small and large production runs. A team of experts will follow you and advise you in all phases of your product. Create and print a book, a catalog, a brochure or a thesis will be easy.

During this project I worked on the web application form to ask for an estimate of the price, on the realization of the user area, and on the entire back-office systems used to assist users during the printing process.


### Skills

{% for skill in page.skills %}- {{ skill }}  
{% endfor %}

- Java EE
- JPA
- Google Web Toolkit (GWT)
- SmartGWT
