---
title: "Venere.com Website"
date: 2011-06-01
skills:
  - Java
  - Spring
  - PHP
  - MySQL
  - REST
  - Linux
  - Web Applications
categories:
  - projects
---
{%- assign showcase = page.relative_path |  split: '/' | last | split: '.md' | first | append: '.jpg' | prepend: '../' -%}
💻 **Work Project** • _June 2011 → February 2014_  
🏢 [Associate Software Dev Engineer at Venere.com]({{ site.data.links.experience.expedia-group-associate-software-dev-engineer.page }})  
📍 _Rome Area, Italy_  
[🔗 www.venere.com](#)  

---

![Showcase]({{ showcase }})

---

**Venere.com** (an Expedia Inc. company), was the Italian leader in the online hotel reservations market. Venere.com featured real-time rates, availability, special offers and the best deals on the web.

I spent several years contributing to the success of this amazing company.


### Skills

{% for skill in page.skills %}- {{ skill }}  
{% endfor %}

- J2EE
- SOA architectures
- Couchbase
- jQuery
- Tomcat
