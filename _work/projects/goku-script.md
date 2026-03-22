---
title: "Goku Script"
date: 2000-09-01
skills:
  - Programming
  - Software Development
  - Algorithms
  - Data Structures
  - Shell Scripting
  - Open Source
categories:
  - projects
---
{%- assign showcase = page.relative_path |  split: '/' | last | split: '.md' | first | append: '.jpg' | prepend: '../' -%}
💻 **Personal Project** • _September 2000 → July 2001_  
🏫 [High School Student]({{ site.data.links.education.high-school.page }})  
📍 _@remote_  
[💾 download]({{ site.data.links.projects.goku-script.download }})  

---

![Showcase]({{ showcase }})

---

I realized the **Goku Script** when I was just a kid. It was a great success, and since its release it has always been in the top ten of the mIRC scripts. In July of 2001 I had approximately 16k download of this script! Even today we can find on the Internet material about it; I am so proud of this project!


### Skills

{% for skill in page.skills %}- {{ skill }}  
{% endfor %}

- IRC
- mSL (mIRC Scripting Language)
