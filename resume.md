---
title: "Resume"
image: /assets/img/social-card.jpg
layout: page
---
<link rel="stylesheet" href="/assets/css/headshot.css">
![Saverio Ferrara](/assets/img/headshot/profile-pic-round.png){: .headshot}

## Saverio Ferrara
**Software Engineer & Technology Lead**  
_Full Stack • Generalist • Mentor_  
📍 Rome, Italy | 📞 +39 340 511 4184 | ✉️ fsferrara@gmail.com  
🔗 {{ site.data.links.profile.linkedin }} | 🔗 {{ site.data.links.profile.github }}

## Summary

An experienced Full Stack Software Engineer and Technology Lead who excels in guiding technical architecture and delivering scalable, maintainable, and high-quality software solutions. Deeply passionate about mentoring and empowering engineering teams, fostering a culture of curiosity and growth to develop future technical leaders. Combines strong stakeholder communication with a pragmatic problem-solving mindset to take full ownership of projects, driving them from strategic conception through to successful completion.


### General Skills

- **Full-Stack Development**: Builds scalable, high-quality, and maintainable software solutions across the entire technology stack.
- **Technical Leadership & Architecture**: Guides architectural decisions and shapes product strategy to meet business objectives.
- **Mentorship & Team Development**: Mentors fellow developers, fostering their growth into pragmatic and skilled technical leaders.
- **Complex Problem-Solving**: Leverages critical thinking and a data-driven approach to solve complex technical challenges effectively.
- **Stakeholder Collaboration**: Excels at communicating with stakeholders to set clear expectations and align on project plans.
- **Project Ownership**: Demonstrates a strong sense of accountability, driving projects from initial concept to final delivery.


### Technical Skills
This section should be scannable. Use bullet points or a list format to categorize your skills.

* **Programming Languages:** Swift, Java, JavaScript, C++, Kotlin, Bash
* **Frameworks & Libraries:** Node.js, Spring, Flutter, SwiftUI
* **Databases:** PostgreSQL, MySQL, MongoDB, Redis
* **Cloud Platforms:** AWS
* **Tools & Technologies:** Docker, Kubernetes, Git, Jenkins, CI/CD, REST APIs, GraphQL
* **Operating Systems:** Linux, Windows, macOS


## Professional Experience
List your experience in reverse chronological order. For each role, focus on quantifiable achievements and impact, not just your responsibilities.

### **[Job Title]** | [Company Name]
[City, State] | [Start Date] - [End Date]

* Developed and maintained [type of software/feature] using [technologies used], resulting in a [quantifiable outcome, e.g., "30% reduction in load time"].
* Collaborated with a team of [Number] engineers to redesign the [specific system], which improved [metric] by [percentage].
* Authored and maintained unit and integration tests, increasing code coverage from [percentage] to [percentage].
* Implemented new features that directly contributed to a [business metric, e.g., "15% increase in user engagement"].

## Personal Projects (Optional but highly recommended)
This section is great for showing your passion and demonstrating skills that might not be in your work experience.

### **[Project Name]**
[GitHub Link] | [Live Demo Link (if applicable)]

* A brief description of the project and the problem it solves.
* **Technologies Used:** [List the technologies]
* **Key Accomplishments:** [Highlight a unique feature or a technical challenge you overcame].

## Languages
* **Italian:** Native
* **English:** Full professional proficiency

## Education
List your highest degree first.

### **[Degree Name]** | [University Name]
[City, State] | [Graduation Date]

* [Relevant coursework or honors, if applicable]


{% assign sorted = site.resume | sort: "date" | reverse %}
{% assign date_format = site.minima.dayless_date_format | default: "%B, %Y" %}
{% assign categories = "experience,education" | split: "," %}
{% for category in categories %}
<div id="#{{ category | slugize }}">
<hr />
<h2>
  <a name="{{ category | slugize }}"></a>{{ category | capitalize }}
</h2>
<ul>
  {% for entry in sorted %}
    {% if entry.categories contains category %}
    <li>
      <a href="{{ entry.url | relative_url }}">{{ entry.title | escape }}</a>
      <span class="post-meta"> – {{ entry.date | date: date_format }}</span>
    </li>
    {% endif %}
  {% endfor %}
</ul>
</div>
{% endfor %}
