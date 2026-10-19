'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight, ChevronDown, Code2, Download, Mail, MapPin, Menu, X } from 'lucide-react'

const projects = [
  { number: '01', title: 'eGame', type: 'Gaming platform', description: 'Collaborative team project where I built and maintained assigned frontend modules, responsive interfaces, and REST API-connected UI with two teammates.', tech: ['React', 'TypeScript', 'REST APIs'], url: 'https://egame-fe.lstaging.com/home', accent: 'cyan' },
  { number: '02', title: 'Euro88', type: 'Digital entertainment', description: 'Contributed to selected frontend modules, responsive UI implementation, and ongoing product maintenance as part of a collaborative team.', tech: ['React', 'TypeScript', 'REST APIs'], url: 'https://euro88-fe.c5kz1mt7rq.com/home', accent: 'violet' },
  { number: '03', title: 'Fightzone SG', type: 'Fitness training platform', description: 'Implemented frontend and UI/UX across member, staff, check-in, and admin applications for a connected fitness training workflow.', tech: ['React', 'Responsive UI', 'REST APIs'], accent: 'orange' },
  { number: '04', title: 'Membership Suite', type: 'Membership management', description: 'Implemented frontend and UI/UX for a focused membership management experience, from responsive screens to connected application flows.', tech: ['React', 'TypeScript', 'Responsive UI'], accent: 'blue' },
]

const experiences = [
  { date: 'Jun 2026 — Present', role: 'Senior Web Developer', company: 'ML Innovation Sdn Bhd', detail: 'Web & Digital Marketing Specialist', technologies: ['Responsive web', 'Frontend systems', 'Release workflows'], bullets: ['Develop and maintain responsive web interfaces for web and digital marketing work.', 'Collaborate on frontend implementation, content updates, and development-to-production release workflows.'] },
  { date: 'Nov 2024 — Jun 2026', role: 'Senior Web Developer', company: 'Octafa Consulting Sdn Bhd', technologies: ['React.js', 'RESTful APIs', 'Git workflows'], bullets: ['Build and maintain frontend features with component-based architecture and reusable responsive UI patterns.', 'Integrate REST APIs and support releases across development, staging/UAT, and production environments.', 'Contribute through code reviews, debugging, performance improvements, and collaborative problem-solving.'] },
  { date: 'Mar 2020 — Nov 2024', role: 'Full Stack Developer', company: 'Sparksoft Sdn Bhd', technologies: ['React', 'React Native', 'Vue.js'], bullets: ['Develop web and cross-platform mobile interfaces using React, React Native, and Vue.js.', 'Connect frontend applications to REST APIs and support multi-environment deployment, branching, and rollback workflows.', 'Participate in code reviews, troubleshooting, AI-assisted development, and technical knowledge sharing.'] },
  { date: 'Jun 2017 — Mar 2020', role: 'Frontend Developer', company: 'Ant Internet Sdn Bhd', technologies: ['HTML', 'CSS', 'JavaScript'], bullets: ['Implement responsive frontend interfaces from designs using reusable HTML, CSS, and JavaScript patterns.', 'Support browser debugging, lazy loading, performance improvements, and delivery across project environments.'] },
]

const skills = {
  'Core languages': ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript'],
  Frameworks: ['React', 'React Native', 'Vue.js', 'Angular', 'Next.js', 'Nuxt.js'],
  Styling: ['Tailwind CSS', 'Bootstrap', 'Sass/SCSS', 'Responsive Design', 'Mobile-First Development'],
  'Tools & APIs': ['Git', 'GitHub', 'RESTful APIs', 'Browser DevTools', 'Debugging & Troubleshooting'],
  Practices: ['Testing', 'Web Performance', 'Accessibility', 'Lazy Loading', 'Figma Implementation', 'Code Reviews', 'Technical Problem-Solving'],
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const move = (event: MouseEvent) => setMouse({ x: (event.clientX / window.innerWidth - .5) * 18, y: (event.clientY / window.innerHeight - .5) * 18 })
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return <main className="site-shell" style={{ '--mouse-x': `${mouse.x}px`, '--mouse-y': `${mouse.y}px` } as React.CSSProperties}>
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Yogurt Loo Hui Ling home"><span>YL</span><em>YOGURT LOO HUI LING</em></a>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation"><a href="#about" onClick={closeMenu}>About</a><a href="#experience" onClick={closeMenu}>Experience</a><a href="#work" onClick={closeMenu}>Work</a><a href="#contact" onClick={closeMenu}>Contact</a></nav>
      <a className="header-availability" href="mailto:yogurtloo.studio@gmail.com"><i /> Available for select projects</a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
    </header>

    <section className="hero" id="top">
      <div className="hero-grid" /><div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
      <div className="hero-copy"><p className="eyebrow reveal"><span className="eyebrow-dot" /> Senior frontend developer <span className="slash">/</span> Malaysia</p><h1><span className="headline-line">I build what</span><span className="headline-line accent-text">moves the web<span className="period">.</span></span></h1><p className="hero-intro">I build responsive interfaces, scalable applications, and digital experiences that feel as good as they work.</p><div className="hero-actions"><a className="button button-primary" href="#work">Explore projects <ArrowUpRight size={17} /></a><span className="button button-ghost button-disabled" aria-disabled="true" title="CV PDF asset not supplied"><Download size={16} /> CV asset needed</span></div></div>
      <div className="hero-portrait" aria-label="Atmospheric portrait artwork inspired by mountain landscapes" role="img" /><div className="hero-side-note">Scroll to explore <ChevronDown size={15} /></div><div className="tech-float float-one">React <span>↗</span></div><div className="tech-float float-two">TypeScript <span>TS</span></div><div className="tech-float float-three">Vue.js <span>✦</span></div><div className="hero-footer"><span>Based in Kuala Lumpur</span><span className="hero-index">01 <i /> 06</span></div>
    </section>

    <section className="intro-section section-pad" id="about"><div className="section-kicker"><span>02</span><span>About me</span></div><div className="intro-layout"><h2>Building digital <span className="accent-text">experiences</span> with intent.</h2><div className="intro-detail"><p>I&apos;m a Senior Frontend Developer experienced in crafting responsive web applications and cross-platform mobile applications. I care about the details that turn a functional interface into something people enjoy using.</p><p>From frontend architecture and API integration to performance, deployment workflows, code reviews, and mentoring — I bring a systems mindset to every layer of the work.</p><a className="text-link" href="mailto:yogurtloo.studio@gmail.com">Let&apos;s work together <ArrowUpRight size={16} /></a></div></div></section>

    <section className="experience-section section-pad" id="experience"><div className="section-heading experience-heading"><div><div className="section-kicker"><span>03</span><span>Work experience</span></div><h2 className="section-display">A frontend practice built <span className="accent-text">over time.</span></h2></div><p>Selected roles, responsibilities, and ways of working.</p></div><div className="experience-list">{experiences.map((experience, index) => <article className={`experience-item ${index === 0 ? 'current' : ''}`} key={`${experience.company}-${experience.date}`}><span className="experience-dot" /><div className="experience-date">{experience.date}</div><div className="experience-content"><div className="experience-label">{index === 0 ? 'CURRENT ROLE' : `0${index + 1} / EXPERIENCE`}</div><h3>{experience.role}</h3><p className="experience-company">{experience.company}{experience.detail && <span> · {experience.detail}</span>}</p><div className="experience-tech">{experience.technologies.map(technology => <span key={technology}>{technology}</span>)}</div><ul>{experience.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul></div><code className="experience-code">{index === 0 ? 'frontend.config' : `role_${String(index + 1).padStart(2, '0')}.tsx`}</code></article>)}</div></section>

    <section className="work-section section-pad" id="work"><div className="section-heading"><div className="section-kicker"><span>04</span><span>Selected work</span></div><p>A few things I&apos;ve helped bring to life.</p></div><div className="projects-list">{projects.map(project => <article className={`project-row project-${project.accent}`} key={project.title}><div className="project-meta"><span>{project.number}</span><span>{project.type}</span></div><div className="project-info"><div className="project-topline"><span>PROJECT / {project.number}</span><span className="project-status">● frontend contribution</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="project-tags">{project.tech.map(technology => <span key={technology}>{technology}</span>)}</div>{project.url && <a className="project-link" href={project.url} target="_blank" rel="noreferrer">View project <ArrowUpRight size={15} /></a>}</div><div className="project-code" aria-hidden="true"><span>{`<${project.title.toLowerCase().replace(/ /g, '-')}/>`}</span><b>01</b><i /><i /><i /></div></article>)}</div></section>

    <section className="skills-section section-pad" id="toolkit"><div className="section-kicker"><span>05</span><span>Toolkit</span></div><div className="toolkit-intro"><h2>Tools for making <span className="accent-text">things move.</span></h2><p>A practical set of technologies and engineering habits used across my work.</p></div><div className="skills-grid">{Object.entries(skills).map(([group, items], index) => <div className="skill-group" key={group}><h3><span>0{index + 1}</span> {group}</h3><div>{items.map(item => <span key={item}>{item}</span>)}</div></div>)}</div></section>

    <section className="contact-section section-pad" id="contact"><div className="contact-mark"><Code2 size={24} /><span>Have a project<br />in mind?</span></div><h2>Let&apos;s make<br /><span className="accent-text">something move.</span></h2><a className="contact-email" href="mailto:yogurtloo.studio@gmail.com">yogurtloo.studio@gmail.com <ArrowUpRight size={22} /></a><div className="contact-details"><a href="mailto:yogurtloo.studio@gmail.com"><Mail size={15} /> yogurtloo.studio@gmail.com</a><span><MapPin size={15} /> Malaysia</span><a href="tel:+60169441349"><span className="phone-icon">↗</span> 016-944 1349</a></div></section>
    <footer className="site-footer"><span>© 2026 Yogurt Loo Hui Ling</span><div><a href="#top" aria-label="Back to top">Back to top ↑</a></div></footer>
  </main>
}
