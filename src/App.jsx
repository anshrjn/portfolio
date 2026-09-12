import React, { useState, useEffect } from 'react';
import { portfolioData } from '../js/data.js';

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [activeSkillTab, setActiveSkillTab] = useState('all');
  const [activeAchTab, setActiveAchTab] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const filteredSkills = activeSkillTab === 'all'
    ? portfolioData.skills
    : portfolioData.skills.filter(s => s.category === activeSkillTab);

  const filteredAch = activeAchTab === 'all'
    ? portfolioData.achievements
    : portfolioData.achievements.filter(a => a.category === activeAchTab);

  return (
    <div className="portfolio-react-root">
      {/* Header */}
      <header className="site-header">
        <div className="container nav-wrapper">
          <a href="#hero" className="brand-logo">
            <span className="brand-badge">AR</span>
            <span>{portfolioData.personal.name}</span>
          </a>
          <nav>
            <ul className="nav-links">
              <li><a href="#hero" className="nav-link">Home</a></li>
              <li><a href="#about" className="nav-link">About</a></li>
              <li><a href="#education" className="nav-link">Education</a></li>
              <li><a href="#skills" className="nav-link">Skills</a></li>
              <li><a href="#projects" className="nav-link">Projects</a></li>
              <li><a href="#achievements" className="nav-link">Achievements</a></li>
              <li><a href="#contact" className="nav-link">Contact</a></li>
            </ul>
          </nav>
          <div className="nav-actions">
            <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle Theme">
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero */}
        <section id="hero" className="hero-section">
          <div className="container">
            <div className="hero-content">
              <div>
                <div className="hero-status-pill">
                  <span className="pulse-dot"></span>
                  <span>{portfolioData.personal.status}</span>
                </div>
                <h1 className="hero-title">
                  Hi, I'm <span className="gradient-text">{portfolioData.personal.name}</span>
                </h1>
                <div className="hero-subtitle">
                  {portfolioData.personal.role}
                </div>
                <p className="hero-bio">{portfolioData.personal.bio}</p>
                <div className="hero-cta-group">
                  <a href="#projects" className="btn btn-primary">View Projects</a>
                  <a href="#contact" className="btn btn-secondary">Contact Me</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">About Me</span>
              <h2 className="section-title">Driven by Curiosity & Hands-On Engineering</h2>
            </div>
            <div className="about-grid">
              <div className="about-text-content glass-card">
                {portfolioData.about.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section id="education" style={{ background: 'var(--bg-secondary)' }}>
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Education</span>
              <h2 className="section-title">Academic Background</h2>
            </div>
            <div className="edu-card">
              <h3>{portfolioData.education[0].institution} - {portfolioData.education[0].degree}</h3>
              <p>Graduation Year: {portfolioData.personal.gradYear} ({portfolioData.personal.location})</p>
              <div className="edu-course-pills" style={{ marginTop: '1rem' }}>
                {portfolioData.education[0].coursework.map((c, i) => (
                  <span key={i} className="edu-pill">{c}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Skills</span>
              <h2 className="section-title">Technical Expertise</h2>
            </div>
            <div className="skills-grid">
              {filteredSkills.map((s, i) => (
                <div key={i} className="skill-card">
                  <h3>{s.name}</h3>
                  <p>{s.description}</p>
                  <div className="skill-bar-track">
                    <div className="skill-bar-fill" style={{ width: `${s.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" style={{ background: 'var(--bg-secondary)' }}>
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Projects</span>
              <h2 className="section-title">Featured Works</h2>
            </div>
            <div className="projects-grid">
              {portfolioData.projects.map((p, i) => (
                <div key={i} className="project-card">
                  <div className="project-body">
                    <h3>{p.title}</h3>
                    <p>{p.summary}</p>
                    <div className="project-tech-pills">
                      {p.techStack.map((t, ti) => <span key={ti} className="pill-badge">{t}</span>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section id="achievements">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Achievements</span>
              <h2 className="section-title">Milestones & Accolades</h2>
            </div>
            <div className="achievements-grid">
              {filteredAch.map((a, i) => (
                <div key={i} className="achievement-card">
                  <span className="achievement-badge">{a.badge}</span>
                  <h3>{a.title}</h3>
                  <div className="achievement-issuer">{a.issuer} ({a.date})</div>
                  <p>{a.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" style={{ background: 'var(--bg-secondary)' }}>
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Contact</span>
              <h2 className="section-title">Get in Touch</h2>
            </div>
            <div className="glass-card" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
              <p>Email: <strong>{portfolioData.personal.email}</strong></p>
              <button onClick={copyEmail} className="btn btn-primary" style={{ marginTop: '1rem' }}>
                {copied ? 'Copied to Clipboard!' : 'Copy Email Address'}
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container text-center">
          <p>&copy; 2026 {portfolioData.personal.name}. Built with modern web standards.</p>
        </div>
      </footer>
    </div>
  );
}
