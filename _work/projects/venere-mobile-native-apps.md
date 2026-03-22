---
title: "Venere.com Mobile Native Apps"
date: 2014-03-01
skills:
  - Java
  - JavaScript
  - HTML
  - CSS
  - Node.js
  - REST
  - Mobile Application Development
categories:
  - projects
---
{%- assign showcase = page.relative_path |  split: '/' | last | split: '.md' | first | append: '.png' | prepend: '../' -%}
💻 **Work Project** • _March 2014 → June 2015_  
🏢 [Software Dev Engineer I at Venere.com]({{ site.data.links.experience.expedia-group-software-dev-engineer-1.page }})  
📍 _Rome Area, Italy_  
[🔗 www.venere.com](#)  

---

![Showcase]({{ showcase }})

---

**Venere.com** (an Expedia Inc. company), was the Italian leader in the online hotel reservations market. Venere.com featured real-time rates, availability, special offers and the best deals on the web.

I looked after the mobile part of the business. First by enhancing the existing website in order to make it responsive. Then I gained experience in the Android Native App programming by doing maintenance to the existing Venere Android App.

In the end I designed and implemented a prototype of a new Venere App based on Hybrid Technologies.


### Skills

{% for skill in page.skills %}- {{ skill }}  
{% endfor %}

- Apache Cordova
- RequireJS
- Backbone
- Handlebars
