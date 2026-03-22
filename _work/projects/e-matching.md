---
title: "e-Matching.it"
date: 2008-03-01
skills:
  - Java
  - Python (Programming Language)
  - Linux
  - Databases
  - SQL
  - Web Applications
  - Back-End Development
categories:
  - projects
---
{%- assign showcase = page.relative_path |  split: '/' | last | split: '.md' | first | append: '.jpg' | prepend: '../' -%}
💻 **Work Project** • _March 2008 → September 2008_  
🏢 [Consultant at Open Reply]({{ site.data.links.experience.reply-consultant.page }})  
📍 _Milan Area, Italy_  
[🔗 www.e-matching.it](http://www.e-matching.it)  

---

![Showcase]({{ showcase }})

---

**e-Matching.it** is an excellent opportunity to develop new business relations.

Companies intending to participate in the event describe their business operations and needs, and the benefits of their products and services on the e-matching.it site. These details are cross-referenced to produce a schedule of personalised meetings for each participant. Each company places its own offering and capacity at the disposal of the network and examines its own needs to determine which meetings are of greatest interest.

Matching is based on the arrangement of meetings between participants, and I really enjoyed working on this instance of the [3-dimensions matching](http://en.wikipedia.org/wiki/3-dimensional_matching), that is a well-known NP-hard problem in computational complexity theory.

I also worked to the porting of the entire front-end layer from Python/Zope technology to Java/JBoss-Seam.


### Skills

{% for skill in page.skills %}- {{ skill }}  
{% endfor %}

- JBoss Seam Framework
- Zope
