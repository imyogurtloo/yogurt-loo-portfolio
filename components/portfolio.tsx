'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Code2, Download, Mail, MapPin, Menu, X } from 'lucide-react'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'work', label: 'Projects' },
  { id: 'toolkit', label: 'Toolkit' },
  { id: 'beyond', label: 'Beyond the Code' },
  { id: 'contact', label: 'Contact' },
]

const experiences = [
  { date: 'Jun 2026 — Present', role: 'Senior Web Developer', company: 'ML Innovation Sdn Bhd', detail: 'Web & Digital Marketing Specialist', technologies: ['Responsive web', 'Frontend systems', 'Release workflows'], bullets: ['Develop and maintain responsive web interfaces for web and digital marketing work.', 'Collaborate on frontend implementation, content updates, and development-to-production release workflows.'] },
  { date: 'Nov 2024 — Jun 2026', role: 'Senior Web Developer', company: 'Octafa Consulting Sdn Bhd', technologies: ['React.js', 'RESTful APIs', 'Git workflows'], bullets: ['Build and maintain frontend features with component-based architecture and reusable responsive UI patterns.', 'Integrate REST APIs and support releases across development, staging/UAT, and production environments.', 'Contribute through code reviews, debugging, performance improvements, and collaborative problem-solving.'] },
  { date: 'Mar 2020 — Nov 2024', role: 'Full Stack Developer', company: 'Sparksoft Sdn Bhd', technologies: ['React', 'React Native', 'Vue.js'], bullets: ['Develop web and cross-platform mobile interfaces using React, React Native, and Vue.js.', 'Connect frontend applications to REST APIs and support multi-environment deployment, branching, and rollback workflows.', 'Participate in code reviews, troubleshooting, AI-assisted development, and technical knowledge sharing.'] },
  { date: 'Jun 2017 — Mar 2020', role: 'Frontend Developer', company: 'Ant Internet Sdn Bhd', technologies: ['HTML', 'CSS', 'JavaScript'], bullets: ['Implement responsive frontend interfaces from designs using reusable HTML, CSS, and JavaScript patterns.', 'Support browser debugging, lazy loading, performance improvements, and delivery across project environments.'] },
]

const projects = [
  { title: 'Fightzone SG', label: 'FITNESS OPS', description: 'A membership and operations ecosystem spanning member, staff, check-in, and admin applications. Delivered frontend UI/UX implementation, feature development, and release contributions.', tech: ['React', 'Responsive UI', 'REST APIs'], url: 'https://fightzonesg.com/' },
  { title: 'Digital Play', label: 'SPORTS', description: 'A collaborative sports gaming platform featuring responsive interfaces, interactive user flows, and API-integrated frontend modules.', tech: ['React', 'TypeScript', 'REST APIs'], url: 'https://egame-fe.lstaging.com/home', hiddenLink: true },
  { title: 'Digital Play', label: 'ENTERTAINMENT', description: 'Contributed to responsive frontend experiences, reusable UI components, and ongoing product maintenance as part of a collaborative development team.', tech: ['React', 'TypeScript', 'REST APIs'], url: 'https://euro88-fe.c5kz1mt7rq.com/home', hiddenLink: true },
  { title: 'Kubota Method', label: 'EDUCATION WEBSITE', description: 'A Japanese multisensory brain science education program for children from two months to six years old, supporting sensory processing, thinking, memory, behavior, movement, and attention.', contribution: 'Handled development of all website pages, including responsive layouts, functionality, PHP, CSS, and animations using WordPress.', tech: ['WordPress', 'PHP', 'CSS', 'JavaScript', 'jQuery UI', 'Custom CSS Animations'], url: 'https://kubotamethod.com/' },
  { title: 'Mecapan Beauty', label: 'MOBILE APP · INDONESIA', description: 'A mobile beauty-services platform connecting customers with salons and beauty treatment providers for discovery and appointment booking.', contribution: 'Handled frontend development, page implementation, layout design, API integration, and interface development according to client requirements.', tech: ['Ionic 3', 'JavaScript', 'API Integration'], url: 'https://mecapan.en.softonic.com/android', linkLabel: 'App information' },
  { title: 'Starline Production', label: 'LIVE EVENTS', description: 'A Malaysia-based concert and live-event organizer specializing in artist showcases, orchestral performances, pop concerts, and music festivals across Malaysia and Southeast Asia.', contribution: 'Worked on website usability testing, frontend troubleshooting, and testing across multiple devices and browsers.', tech: ['WordPress', 'PHP', 'JavaScript', 'jQuery UI', 'Custom CSS Animations'], url: 'https://starlineproduction.com/' },
]

const education = [
  { degree: 'Diploma in Information Communication Technology', school: 'Victoria International College, Kuala Lumpur', years: '2014 – 2017' },
  { degree: 'Secondary Education', school: 'SMK Choong Hua, Bidor', years: '2008 – 2013' },
]

const interests = [
  { title: 'Coffee Crafting & Home Barista', text: 'Passionate about specialty coffee, practicing manual espresso preparation at home and exploring extraction techniques.', mark: '01' },
  { title: 'Nature & Outdoor Exploration', text: 'Enjoy spending quiet time in nature for mindfulness, balance, and fresh inspiration.', mark: '02' },
  { title: 'Independent Reflection & Focus', text: 'Value dedicated solo time for deep thinking, personal learning, and creative problem-solving.', mark: '03' },
]

const skills = {
  Frontend: ['React.js', 'React Native', 'Vue.js', 'TypeScript', 'JavaScript'],
  Integration: ['REST APIs', 'Responsive web applications'],
  Workflow: ['Git', 'CI/CD', 'Staging', 'UAT', 'Production releases', 'Code reviews'],
  Practices: ['Frontend architecture', 'Performance optimization', 'Lazy loading', 'Reusable components', 'Mentoring', 'AI-assisted development'],
}

export default function Portfolio() {
  const [active, setActive] = useState('about')
  const [menuOpen, setMenuOpen] = useState(false)
  const contentRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActive(visible.target.id)
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible')
      })
    }, { root: contentRef.current, rootMargin: '-18% 0px -62% 0px', threshold: [0, .2, .5, 1] })
    sections.forEach(({ id }) => { const element = document.getElementById(id); if (element) observer.observe(element) })
    return () => observer.disconnect()
  }, [])

  return <div className="portfolio-shell">
    <aside className="sidebar">
      <div className="sidebar-inner">
        <a href="#top" className="identity" aria-label="Yogurt Loo Hui Ling home"><span className="identity-mark">YL</span><span><strong>Yogurt Loo Hui Ling</strong><small>Senior Frontend Developer</small></span></a>
        <div className="portrait" role="img" aria-label="Portrait artwork inspired by mountain landscapes" />
        <p className="sidebar-intro">I build responsive interfaces, scalable applications, and digital experiences that feel as good as they work.</p>
        <nav className={menuOpen ? 'sidebar-nav open' : 'sidebar-nav'} aria-label="Portfolio sections">
          {sections.map((section, index) => <a className={active === section.id ? 'active' : ''} href={`#${section.id}`} onClick={() => setMenuOpen(false)} key={section.id}><span>0{index + 1}</span>{section.label}</a>)}
        </nav>
        <div className="sidebar-links"><a href="mailto:yogurtloo.studio@gmail.com"><Mail size={15} /> Email</a><a href="tel:+60169441349"><span className="phone-icon">↗</span> Phone</a><span><MapPin size={15} /> Kuala Lumpur, Malaysia</span></div>
        <div className="sidebar-footer"><span>© 2026</span><span>Available for select projects</span></div>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>{menuOpen ? <X /> : <Menu />}</button>
      </div>
    </aside>
    <main className="cv-content" id="top" ref={contentRef}>
      <section className="cv-section about-section is-visible" id="about"><div className="section-number">01 / About</div><div className="about-grid"><div><p className="eyebrow">Senior frontend developer / Malaysia</p><h1>I build what <span>moves the web forward.</span></h1></div><div className="about-copy"><p>I&apos;m a Senior Frontend Developer experienced in crafting responsive web applications and cross-platform mobile applications. I care about the details that turn a functional interface into something people enjoy using.</p><p>From frontend architecture and API integration to performance, deployment workflows, code reviews, and mentoring — I bring a systems mindset to every layer of the work.</p><a className="inline-link" href="mailto:yogurtloo.studio@gmail.com">Let&apos;s work together <ArrowUpRight size={15} /></a></div></div></section>
      <section className="cv-section" id="experience"><div className="section-number">02 / Experience</div><div className="section-intro"><h2>A frontend practice built over time.</h2><p>Selected roles, responsibilities, and ways of working.</p></div><div className="experience-list">{experiences.map((experience, index) => <article className="experience-entry" key={`${experience.company}-${experience.date}`}><div className="experience-date">{experience.date}</div><div><p className="entry-label">{index === 0 ? 'CURRENT ROLE' : `0${index + 1} / EXPERIENCE`}</p><h3>{experience.role}</h3><p className="company">{experience.company}{experience.detail && <span> · {experience.detail}</span>}</p><div className="tag-list">{experience.technologies.map(item => <span key={item}>{item}</span>)}</div><ul>{experience.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul></div></article>)}</div></section>
      <section className="cv-section" id="education"><div className="section-number">03 / Education</div><div className="section-intro"><h2>Foundations for the work.</h2><p>Academic background in information and communication technology.</p></div><div className="education-list">{education.map((item, index) => <article className="education-entry" key={item.degree}><span>0{index + 1}</span><div><h3>{item.degree}</h3><p>{item.school}</p></div><time>{item.years}</time></article>)}</div></section>
      <section className="cv-section" id="work"><div className="section-number">04 / Selected projects</div><div className="section-intro"><h2>Work I&apos;ve helped bring to life.</h2><p>Six projects, shaped through frontend contribution.</p></div><div className="projects-list">{projects.map((project, index) => <article className="project-entry" key={`${project.title}-${project.label}`}><div className="project-index">0{index + 1}</div><div><p className="entry-label">{project.label}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p>{project.contribution && <p className="project-contribution"><strong>Contribution</strong>{project.contribution}</p>}<div className="tag-list">{project.tech.map(item => <span key={item}>{item}</span>)}</div>{project.url && !project.hiddenLink && <a className="inline-link" href={project.url} target="_blank" rel="noopener noreferrer">{project.linkLabel ?? 'View project'} <ArrowUpRight size={15} /></a>}</div></article>)}</div></section>
      <section className="cv-section" id="toolkit"><div className="section-number">05 / Toolkit</div><div className="section-intro"><h2>Tools for making things move.</h2><p>A practical set of technologies and engineering habits used across my work.</p></div><div className="skills-list">{Object.entries(skills).map(([group, items]) => <div className="skill-row" key={group}><h3>{group}</h3><div className="tag-list">{items.map(item => <span key={item}>{item}</span>)}</div></div>)}</div></section>
      <section className="cv-section" id="beyond"><div className="section-number">06 / Beyond the Code</div><div className="section-intro"><h2>Hobbies &amp; Interests</h2><p>A few things that keep the work grounded, curious, and human.</p></div><div className="interests-list">{interests.map(item => <article className="interest-entry" key={item.title}><span>{item.mark}</span><div><h3>{item.title}</h3><p>{item.text}</p></div><Code2 size={18} /></article>)}</div></section>
      <section className="cv-section contact-section" id="contact"><div className="section-number">07 / Contact</div><div className="contact-block"><Code2 size={21} /><h2>Let&apos;s make something move.</h2><p>Open to discussing frontend engineering opportunities and thoughtful digital products.</p><a className="contact-email" href="mailto:yogurtloo.studio@gmail.com">yogurtloo.studio@gmail.com <ArrowUpRight size={19} /></a></div><div className="contact-meta"><span><Mail size={14} /> yogurtloo.studio@gmail.com</span><span><MapPin size={14} /> Malaysia</span><a href="tel:+60169441349">016-944 1349</a></div></section>
      <footer className="cv-footer"><span>Yogurt Loo Hui Ling / Senior Frontend Developer</span><a href="#top">Back to top ↑</a></footer>
    </main>
  </div>
}
