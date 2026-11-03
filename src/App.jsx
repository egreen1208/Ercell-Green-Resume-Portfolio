import { useEffect, useState } from 'react'
import { credentials, experience, portfolio, projects, skills } from './portfolioData.js'

const navItems = ['home', 'about', 'skills', 'experience', 'projects', 'contact']

function Icon({ name, size = 22 }) {
  const paths = {
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    code: <><path d="m8 9-4 3 4 3"/><path d="m16 9 4 3-4 3"/><path d="m14 5-4 14"/></>,
    cloud: <path d="M17.5 19H7a5 5 0 1 1 1.7-9.7A6 6 0 0 1 20 12a3.5 3.5 0 0 1-2.5 7Z"/>,
    server: <><rect x="3" y="4" width="18" height="6" rx="2"/><rect x="3" y="14" width="18" height="6" rx="2"/><path d="M7 7h.01M7 17h.01"/></>,
    workflow: <><rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="15" width="6" height="6" rx="1"/><path d="M9 6h3a3 3 0 0 1 3 3v6M12 18H9a3 3 0 0 1-3-3V9"/></>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    github: <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-1.5 6-6a4.6 4.6 0 0 0-1.2-3.2A4.2 4.2 0 0 0 18.7 2S17.7 1.7 15 3.5a12 12 0 0 0-6 0C6.3 1.7 5.3 2 5.3 2a4.2 4.2 0 0 0-.1 3.3A4.6 4.6 0 0 0 4 8.5c0 4.5 3 6 6 6a4.8 4.8 0 0 0-1 3.5v4"/>,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></>,
    external: <><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></>,
    location: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    menu: <><path d="M4 6h16M4 12h16M4 18h16"/></>,
    close: <><path d="m6 6 12 12M18 6 6 18"/></>,
  }
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}

function Header({ activeSection }) {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <header className="site-header">
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="logo" href="#home" onClick={close} aria-label="Ercell Green home">
          <span>EG</span><i aria-hidden="true">_</i>
        </a>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="nav-links" aria-label={open ? 'Close navigation' : 'Open navigation'}>
          <Icon name={open ? 'close' : 'menu'} />
        </button>
        <div id="nav-links" className={`nav-links ${open ? 'is-open' : ''}`}>
          {navItems.map((item, index) => (
            <a key={item} href={`#${item}`} onClick={close} className={activeSection === item ? 'active' : ''}>
              <small>0{index + 1}.</small> {item}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}

function SectionHeading({ eyebrow, title, intro }) {
  return (
    <div className="section-heading reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </div>
  )
}

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = document.querySelectorAll('main section[id]')
    const navObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActiveSection(entry.target.id)),
      { rootMargin: '-35% 0px -55% 0px' },
    )
    sections.forEach((section) => navObserver.observe(section))

    const revealObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible')),
      { threshold: 0.12 },
    )
    document.querySelectorAll('.reveal').forEach((item) => revealObserver.observe(item))
    return () => { navObserver.disconnect(); revealObserver.disconnect() }
  }, [])

  const contactLinks = [
    { label: portfolio.email || 'Add public email', value: portfolio.email, icon: 'mail', href: portfolio.email ? `mailto:${portfolio.email}` : '' },
    { label: portfolio.linkedin ? 'LinkedIn profile' : 'Add LinkedIn URL', value: portfolio.linkedin, icon: 'linkedin', href: portfolio.linkedin },
    { label: portfolio.github ? 'GitHub profile' : 'Add GitHub URL', value: portfolio.github, icon: 'github', href: portfolio.github },
  ]

  return (
    <>
      <Header activeSection={activeSection} />
      <main id="main-content">
        <section id="home" className="hero section-grid">
          <div
            className="mountain-backdrop"
            style={{ '--mountain-image': `url(${import.meta.env.BASE_URL}smoky-mountains-hero.png)` }}
            aria-hidden="true"
          />
          <div className="orb orb-one" aria-hidden="true" />
          <div className="orb orb-two" aria-hidden="true" />
          <div className="shell hero-content">
            <div className="hero-copy reveal visible">
              <p className="eyebrow hero-kicker"><span className="status-dot" /> Bryson City roots · Technology focus</p>
              <h1><span>Hello, I’m</span> Ercell Green.</h1>
              <p className="hero-role">Software Developer <i>/</i> IT Systems Professional</p>
              <p className="hero-intro">Rooted in the mountains of Western North Carolina, I bring software development, DevOps, infrastructure, and support experience together to solve practical technology problems from end to end.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">Explore my work <Icon name="arrow" size={18} /></a>
                <a className="button button-secondary" href="#contact">Let’s connect</a>
              </div>
              <div className="hero-meta">
                <span><Icon name="location" size={17} /> Bryson City, NC roots</span>
                <span><Icon name="code" size={17} /> Development · DevOps · Infrastructure · Support</span>
              </div>
            </div>
            <div className="hero-visual reveal visible" aria-label="Professional portrait of Ercell Green">
              <div className="portrait-frame">
                <img
                  src={`${import.meta.env.BASE_URL}ercell-green-profile.png`}
                  alt="Ercell Green wearing a navy suit and smiling"
                  width="1254"
                  height="1254"
                  fetchPriority="high"
                  decoding="async"
                />
                <div className="portrait-scan" aria-hidden="true" />
                <span className="portrait-label">ERCELL.GREEN // PROFILE</span>
              </div>
              <div className="circuit-lines" aria-hidden="true"><span/><span/><span/><span/></div>
            </div>
          </div>
          <a className="scroll-cue" href="#about" aria-label="Scroll to about section"><span>Scroll</span><i /></a>
        </section>

        <section id="about" className="section section-grid">
          <div className="shell two-column">
            <SectionHeading eyebrow="01 / About" title={<>Grounded in service. <span>Built for the climb.</span></>} />
            <div className="about-copy reveal">
              <p className="lead">I’m a software developer and information technology professional whose experience spans application development, DevSecOps platforms, cloud identity, systems administration, endpoint management, infrastructure, automation, and user support.</p>
              <p>This portfolio’s mountain character reflects my roots in Bryson City, North Carolina, surrounded by the ridgelines and mist of the Great Smoky Mountains.</p>
              <p>My path has taken me through utility operations, federal technology, healthcare, and education. That range helps me see technology as a connected system: applications, infrastructure, security, business processes, and the people who depend on all of it.</p>
              <p>Today at SECO Energy, I develop .NET web and desktop solutions for enterprise workflows. Earlier roles taught me how to administer CI/CD platforms, support complex environments, coordinate infrastructure projects, automate repetitive work, and communicate clearly when the stakes are high.</p>
              <div className="principles">
                <div><span>01</span><strong>End-to-end perspective</strong><small>From user need to reliable delivery.</small></div>
                <div><span>02</span><strong>Service-centered</strong><small>Technology succeeds when people can trust it.</small></div>
                <div><span>03</span><strong>Continuous improvement</strong><small>Automate, document, refine, and learn.</small></div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <div className="shell">
            <SectionHeading eyebrow="02 / Skills" title={<>A toolkit built across the <span>technology stack.</span></>} intro="Application development is the current focus, supported by years of work across platforms, infrastructure, security, automation, and service delivery." />
            <div className="skill-grid">
              {skills.map((skill, index) => (
                <article className="skill-card reveal" key={skill.group} style={{ '--delay': `${index * 90}ms` }}>
                  <div className="skill-card-top"><span className="skill-icon"><Icon name={skill.icon} /></span><small>0{index + 1}</small></div>
                  <h3>{skill.group}</h3>
                  <ul>{skill.items.map((item) => <li key={item}><Icon name="check" size={15} />{item}</li>)}</ul>
                </article>
              ))}
            </div>
            <div className="credentials reveal" aria-label="Education, certificates, and recognition">
              {credentials.map((credential) => (
                <article key={credential.label}>
                  <p>{credential.label}</p>
                  <h3>{credential.title}</h3>
                  <span>{credential.detail}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section section-grid">
          <div className="shell">
            <SectionHeading eyebrow="03 / Experience" title={<>Experience across <span>industries & disciplines.</span></>} intro="A career built through software delivery, DevSecOps administration, enterprise support, infrastructure projects, healthcare technology, and education." />
            <div className="timeline">
              {experience.map((job, index) => (
                <article className="timeline-item reveal" key={job.role}>
                  <div className="timeline-marker"><span>{String(index + 1).padStart(2, '0')}</span></div>
                  <div className="timeline-date">{job.date}{job.current && <b>Current</b>}</div>
                  <div className="timeline-content">
                    <p className="company">{job.company}</p>
                    <h3>{job.role}</h3>
                    <p className="job-summary">{job.summary}</p>
                    <ul>{job.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="shell">
            <SectionHeading eyebrow="04 / Projects" title={<>Selected work, <span>ready to personalize.</span></>} intro="These cards are intentionally marked placeholders. Replace them with public-safe project details before sharing the portfolio." />
            <div className="project-list">
              {projects.map((project) => (
                <article className="project-card reveal" key={project.number}>
                  <div className="project-number">{project.number}</div>
                  <div className="project-body">
                    <p className="placeholder-label">{project.type}</p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                  </div>
                  <div className="project-icon" aria-hidden="true"><Icon name="code" size={30}/></div>
                </article>
              ))}
            </div>
            <p className="edit-note reveal"><span>EDIT NOTE</span> Project titles, descriptions, links, and contact details live in <code>src/portfolioData.js</code>.</p>
          </div>
        </section>

        <section id="contact" className="section contact-section section-grid">
          <div className="shell contact-wrap reveal">
            <div>
              <p className="eyebrow">05 / Contact</p>
              <h2>Let’s build something <span>useful.</span></h2>
              <p>Interested in connecting about software development, enterprise technology, or a worthwhile project? I’d be glad to hear from you.</p>
            </div>
            <div className="contact-links">
              {contactLinks.map((link) => link.href ? (
                <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"><Icon name={link.icon}/><span>{link.label}</span><Icon name="external" size={17}/></a>
              ) : (
                <div className="contact-placeholder" key={link.label}><Icon name={link.icon}/><span>{link.label}<small>Set in portfolioData.js</small></span></div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="shell footer-inner">
          <a className="logo" href="#home"><span>EG</span><i>_</i></a>
          <p>Designed & built for Ercell Green <span>© {new Date().getFullYear()}</span></p>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </>
  )
}

export default App
