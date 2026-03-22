---
title: "Website 4 All Kids - Volunteering"
date: 2020-09-01
skills:
  - HTML
  - CSS
  - Front-End Development
  - Web Applications
  - Remote Teamwork
  - Communication
  - Team Leadership
categories:
  - projects
---
{%- assign showcase = page.relative_path |  split: '/' | last | split: '.md' | first | append: '.png' | prepend: '../' -%}
💻 **Volunteer Project** • _September 2020 and September 2021_  
🏢 [Senior Software Development Engineer @ Expedia Group]({{ site.data.links.experience.expedia-group-senior-software-development-engineer.page }})  
📍 _Rome Area, Italy_  
[🔗 https://www.criroma15.it/kids/](https://www.criroma15.it/)  

---

![Showcase]({{ showcase }})

---

As part of EG’s employee volunteering program, I dedicated my time and expertise to support the Red Cross Chapter in Rome, focusing on children with physical, mental, and economic disabilities. During the COVID-19 lockdowns, these children faced increased isolation, making it essential to provide new ways to connect and learn.

Collaborating with a distributed team of volunteers across Europe, I led the technical effort to configure a multisite WordPress installation for the Red Cross. This allowed the creation of a new subsite for volunteers to share educational games, stories, and community updates, fostering engagement and inclusion for children unable to attend in-person activities.
In addition, I configured the Wordpress Polylang plugin to support both Italian and English, for multilingual content, including language-specific games and resources.

This project exemplifies the power of volunteering and technology to create meaningful social impact, providing children with disabilities new opportunities for learning and connection.


### Skills

{% for skill in page.skills %}- {{ skill }}  
{% endfor %}

- WordPress multisite configuration
- Polylang
- Community engagement
