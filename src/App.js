import React, { useState, useEffect } from "react";
import data from "./data/portfolio.json";
import "./App.css";

const IconGitHub = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const IconLinkedIn = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const IconArrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M7 7h10v10" />
  </svg>
);

const IconClose = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

const IconMenu = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M3 12h18M3 6h18M3 18h18" />
  </svg>
);

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on scroll
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="app">
      {/* Nav */}
      <nav className={`nav${scrolled ? " nav--scrolled" : ""}`}>
        <span className="nav-logo">vks.</span>
        <div className="nav-links">
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </div>
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <IconClose /> : <IconMenu />}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-links">
            {navLinks.map(({ href, label }, i) => (
              <a key={href} href={href} onClick={closeMenu} style={{ animationDelay: `${i * 60}ms` }}>
                <span className="mobile-menu-num">0{i + 1}</span>
                {label}
              </a>
            ))}
          </div>
          <div className="mobile-menu-footer">
            <a href={data.meta.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
              <IconGitHub /> GitHub
            </a>
            <a href={data.meta.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost">
              <IconLinkedIn /> LinkedIn
            </a>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-top">
            <span className="hero-available">
              <span className="avail-dot" /> Available for opportunities
            </span>
          </div>
          <div className="hero-mid">
            <p className="hero-sup">
              {data.meta.title} <span className="hero-sep">/</span> {data.meta.location}
            </p>
            <h1 className="hero-name">
              Vyshnav<br />
              <span className="hero-name-ks">K S<span className="hero-dot">.</span></span>
            </h1>
          </div>
          <div className="hero-bottom">
            <p className="hero-tagline">{data.meta.tagline}</p>
            <div className="hero-links">
              <a href={`mailto:${data.meta.email}`} className="btn btn-primary">
                Get in touch <IconArrow />
              </a>
              <a href={data.meta.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
                <IconGitHub />
              </a>
              <a href={data.meta.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost">
                <IconLinkedIn />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Content sections */}
      <div className="sections-wrap">

        {/* About */}
        <div className="section-row" id="about">
          <div className="section-label">
            <span className="section-num">01</span>
            <span>About</span>
          </div>
          <div className="section-content">
            <p className="about-bio">{data.bio}</p>
            <span className="about-loc">
              <span className="loc-dot" /> {data.meta.location}
            </span>
          </div>
        </div>

        {/* Skills */}
        <div className="section-row" id="skills">
          <div className="section-label">
            <span className="section-num">02</span>
            <span>Skills</span>
          </div>
          <div className="section-content">
            {data.skills.map((group, i) => (
              <div className="skill-row" key={i}>
                <span className="skill-cat">{group.category}</span>
                <div className="skill-tags">
                  {group.items.map((item, j) => (
                    <span className="tag" key={j}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="section-row" id="experience">
          <div className="section-label">
            <span className="section-num">03</span>
            <span>Experience</span>
          </div>
          <div className="section-content">
            {data.experience.map((job, i) => (
              <div className="exp-row" key={i}>
                <div className="exp-left">
                  <span className="exp-role">{job.role}</span>
                  <span className="exp-company">{job.company} &mdash; {job.location}</span>
                </div>
                <span className="exp-period">{job.period}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="section-row" id="projects">
          <div className="section-label">
            <span className="section-num">04</span>
            <span>Projects</span>
          </div>
          <div className="section-content">
            <div className="projects-grid">
              {data.projects.map((project, i) => (
                <div className="project-card" key={i}>
                  <div className="project-top">
                    <span className="project-name">{project.name}</span>
                    <span className="project-sub">{project.subtitle}</span>
                  </div>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tags">
                    {project.tech.map((t, j) => (
                      <span className="tag" key={j}>{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="section-row" id="education">
          <div className="section-label">
            <span className="section-num">05</span>
            <span>Education</span>
          </div>
          <div className="section-content">
            <div className="exp-row">
              <div className="exp-left">
                <span className="exp-role">{data.education.degree}</span>
                <span className="exp-company">{data.education.institution}</span>
              </div>
              <div className="exp-right-col">
                <span className="exp-period">{data.education.period}</span>
                <span className="edu-gpa">GPA {data.education.gpa}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="section-row section-row--contact" id="contact">
          <div className="section-label">
            <span className="section-num">06</span>
            <span>Contact</span>
          </div>
          <div className="section-content">
            <p className="contact-text">Currently open to new opportunities.</p>
            <div className="contact-links">
              <a href={`mailto:${data.meta.email}`} className="btn btn-primary">
                {data.meta.email} <IconArrow />
              </a>
              <a href={data.meta.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost btn-ghost--label">
                <IconLinkedIn /> LinkedIn
              </a>
            </div>
          </div>
        </div>

      </div>

      <footer className="footer">
        <span>Vyshnav K S</span>
        <span>{new Date().getFullYear()}</span>
      </footer>
    </div>
  );
}

export default App;
