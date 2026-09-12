/**
 * Main Application Logic for Ansh Ranjan Portfolio
 */

const portfolioData = window.portfolioData || {};

// SVG Icons Dictionary for 100% offline & reliable rendering
const ICONS = {
  'graduation-cap': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
  'cpu': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2M9 2v2M20 15h2M20 9h2M9 20v2M15 20v2M2 9h2M2 15h2"/></svg>`,
  'folder-git': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/><circle cx="12" cy="13" r="2"/><path d="M12 15v2"/></svg>`,
  'map-pin': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  'sparkles': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>`,
  'layout': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18M9 21V9"/></svg>`,
  'zap': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  'book-open': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
  'file-code': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="m10 13-2 2 2 2"/><path d="m14 17 2-2-2-2"/></svg>`,
  'palette': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>`,
  'code': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  'brain': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04Z"/></svg>`,
  'globe': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,
  'external-link': `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>`,
  'github': `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`,
  'linkedin': `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`,
  'twitter': `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>`,
  'mail': `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  'copy': `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`,
  'check': `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  'sun': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>`,
  'moon': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`,
  'arrow-up': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>`,
  'arrow-right': `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`
};

function initTheme() {
  document.documentElement.setAttribute('data-theme', 'dark');
  if (document.body) {
    document.body.setAttribute('data-theme', 'dark');
  }
}

function startApplication() {
  try { initTheme(); } catch (err) { console.error('Theme init error:', err); }
  try { initHeader(); } catch (err) { console.error('Header init error:', err); }
  try { renderHeroStats(); } catch (err) { console.error('Hero stats error:', err); }
  try { renderAboutHighlights(); } catch (err) { console.error('About highlights error:', err); }
  try { renderEducation(); } catch (err) { console.error('Education error:', err); }
  try { initSkills(); } catch (err) { console.error('Skills error:', err); }
  try { initProjects(); } catch (err) { console.error('Projects error:', err); }
  try { initAchievements(); } catch (err) { console.error('Achievements error:', err); }
  try { initContact(); } catch (err) { console.error('Contact error:', err); }
  try { initScrollSpy(); } catch (err) { console.error('ScrollSpy error:', err); }
  try { initBackToTop(); } catch (err) { console.error('BackToTop error:', err); }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startApplication);
} else {
  startApplication();
}

/* ==========================================================================
   2. Header, Scroll Progress & Mobile Menu
   ========================================================================== */
function initHeader() {
  const header = document.querySelector('.site-header');
  const progressBar = document.querySelector('.scroll-progress-bar');
  const menuBtn = document.getElementById('mobile-menu-btn');
  const closeBtn = document.getElementById('drawer-close-btn');
  const drawer = document.getElementById('mobile-drawer');
  const overlay = document.getElementById('drawer-overlay');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  // Scroll handler
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    if (header) {
      if (scrollPos > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    if (progressBar) {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollPos / docHeight) * 100 : 0;
      progressBar.style.width = `${progress}%`;
    }
  });

  // Mobile Drawer Toggle
  const openDrawer = () => {
    drawer?.classList.add('open');
    overlay?.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    drawer?.classList.remove('open');
    overlay?.classList.remove('open');
    document.body.style.overflow = '';
  };

  menuBtn?.addEventListener('click', openDrawer);
  closeBtn?.addEventListener('click', closeDrawer);
  overlay?.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // Escape key closes modal & drawer
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDrawer();
      closeProjectModal();
    }
  });
}

/* ==========================================================================
   3. Hero Stats & Dynamic Elements
   ========================================================================== */
function renderHeroStats() {
  const statsContainer = document.getElementById('hero-stats-grid');
  if (!statsContainer) return;

  statsContainer.innerHTML = portfolioData.personal.stats.map(s => `
    <div class="hero-stat-box">
      <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:0.35rem;">
        <span class="stat-value">${s.value}</span>
        <span style="color:var(--accent-primary);">${ICONS[s.icon] || ''}</span>
      </div>
      <div class="stat-label">${s.label}</div>
    </div>
  `).join('');
}

/* ==========================================================================
   4. About Highlights
   ========================================================================== */
function renderAboutHighlights() {
  const container = document.getElementById('about-features-container');
  if (!container) return;

  container.innerHTML = portfolioData.about.highlights.map(item => `
    <div class="feature-card">
      <div class="feature-icon-box">
        ${ICONS[item.icon] || ICONS['sparkles']}
      </div>
      <div>
        <h4 class="feature-title">${item.title}</h4>
        <p class="feature-desc">${item.description}</p>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   5. Education Section
   ========================================================================== */
function renderEducation() {
  const container = document.getElementById('education-container');
  if (!container) return;

  const edu = portfolioData.education[0];
  container.innerHTML = `
    <div class="edu-card">
      <div class="edu-header-row">
        <div>
          <h3 class="edu-institution">
            ${edu.institution}
            <span class="edu-badge-tag">${edu.period}</span>
          </h3>
          <div class="edu-degree">${edu.degree}</div>
        </div>
        <div class="pill-badge" style="background:rgba(99,102,241,0.1); color:var(--accent-primary); border-color:rgba(99,102,241,0.25);">
          ${ICONS['map-pin']} ${edu.location}
        </div>
      </div>

      <div class="edu-meta">
        <span><strong>Graduation Year:</strong> ${portfolioData.personal.gradYear}</span>
        <span>•</span>
        <span><strong>Status:</strong> ${edu.status}</span>
      </div>

      <p style="color:var(--text-secondary); margin-bottom:1.5rem; font-size:0.95rem; line-height:1.65;">
        ${edu.description}
      </p>

      <div style="margin-bottom:1.5rem;">
        <h4 class="edu-coursework-title">Key Learning Areas & Coursework</h4>
        <div class="edu-course-pills">
          ${edu.coursework.map(c => `<span class="edu-pill">${c}</span>`).join('')}
        </div>
      </div>

      <div style="padding-top:1.25rem; border-top:1px solid var(--border-subtle);">
        <h4 class="edu-coursework-title">Academic & Project Highlights</h4>
        <ul style="list-style:none; display:flex; flex-direction:column; gap:0.5rem;">
          ${edu.highlights.map(h => `
            <li style="display:flex; align-items:center; gap:0.65rem; color:var(--text-secondary); font-size:0.875rem;">
              <span style="color:var(--status-success);">${ICONS['check']}</span>
              <span>${h}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    </div>
  `;
}

/* ==========================================================================
   6. Skills Section & Filter
   ========================================================================== */
function initSkills() {
  const tabs = document.querySelectorAll('.skills-filter-nav .filter-tab');
  const grid = document.getElementById('skills-grid');

  const renderSkills = (filter = 'all') => {
    if (!grid) return;
    const items = filter === 'all' 
      ? portfolioData.skills 
      : portfolioData.skills.filter(s => s.category === filter);

    grid.innerHTML = items.map(skill => `
      <div class="skill-card">
        <div>
          <div class="skill-top">
            <div class="skill-icon-wrap">
              ${ICONS[skill.icon] || ICONS['code']}
            </div>
            <span class="skill-badge">${skill.levelLabel}</span>
          </div>
          <h3 class="skill-title">${skill.name}</h3>
          <p class="skill-desc">${skill.description}</p>
        </div>

        <div>
          <div class="skill-bar-track">
            <div class="skill-bar-fill" style="width: ${skill.level}%;"></div>
          </div>
          <div class="skill-tags">
            ${skill.tags.map(t => `<span class="skill-tag">${t}</span>`).join('')}
          </div>
        </div>
      </div>
    `).join('');
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.getAttribute('data-filter') || 'all';
      renderSkills(filter);
    });
  });

  renderSkills('all');
}

/* ==========================================================================
   7. Projects Section & Interactive Modal
   ========================================================================== */
function initProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  grid.innerHTML = portfolioData.projects.map(proj => `
    <div class="project-card">
      <div class="project-banner">
        <div class="project-banner-icon">
          ${ICONS[proj.category === 'ai' ? 'sparkles' : (proj.category === 'productivity' ? 'zap' : 'layout')]}
        </div>
        ${proj.featured ? `<span class="project-featured-tag">Featured</span>` : ''}
      </div>

      <div class="project-body">
        <h3 class="project-title">${proj.title}</h3>
        <div class="project-tagline">${proj.tagline}</div>
        <p class="project-desc">${proj.summary}</p>

        <div class="project-tech-pills">
          ${proj.techStack.map(t => `<span class="pill-badge">${t}</span>`).join('')}
        </div>

        <div class="project-footer-actions">
          <button class="project-btn-details" data-project-id="${proj.id}">
            View Details ${ICONS['arrow-right']}
          </button>
          <div class="project-link-group">
            <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="icon-btn" title="View Source Code">
              ${ICONS['github']}
            </a>
            <a href="${proj.demoUrl}" target="_blank" rel="noopener noreferrer" class="icon-btn" title="Live Project Demo">
              ${ICONS['external-link']}
            </a>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  // Attach click listener for Details button
  grid.querySelectorAll('.project-btn-details').forEach(btn => {
    btn.addEventListener('click', () => {
      const projId = btn.getAttribute('data-project-id');
      const project = portfolioData.projects.find(p => p.id === projId);
      if (project) {
        openProjectModal(project);
      }
    });
  });

  // Modal close handler
  const closeBtn = document.getElementById('modal-close-btn');
  const backdrop = document.getElementById('project-modal-backdrop');

  closeBtn?.addEventListener('click', closeProjectModal);
  backdrop?.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      closeProjectModal();
    }
  });
}

function openProjectModal(project) {
  const backdrop = document.getElementById('project-modal-backdrop');
  const content = document.getElementById('modal-content-area');
  if (!backdrop || !content) return;

  content.innerHTML = `
    <div style="margin-bottom:1.5rem;">
      <span class="pill-badge" style="background:rgba(99,102,241,0.12); color:var(--accent-primary); border-color:rgba(99,102,241,0.25); margin-bottom:0.75rem;">
        ${project.category.toUpperCase()} PROJECT
      </span>
      <h2 style="font-size:1.75rem; font-weight:800; margin-bottom:0.5rem; color:var(--text-primary);">
        ${project.title}
      </h2>
      <div style="color:var(--accent-tertiary); font-weight:500; font-size:1rem; margin-bottom:1rem;">
        ${project.tagline}
      </div>
    </div>

    <div style="margin-bottom:1.75rem;">
      <h4 style="font-size:0.9rem; text-transform:uppercase; letter-spacing:0.05em; color:var(--text-muted); font-weight:700; margin-bottom:0.65rem;">
        Overview & Architecture
      </h4>
      <p style="color:var(--text-secondary); line-height:1.75; font-size:0.95rem; margin-bottom:1rem;">
        ${project.details}
      </p>
    </div>

    <div style="margin-bottom:1.75rem;">
      <h4 style="font-size:0.9rem; text-transform:uppercase; letter-spacing:0.05em; color:var(--text-muted); font-weight:700; margin-bottom:0.65rem;">
        Key Architectural Highlights
      </h4>
      <ul style="list-style:none; display:flex; flex-direction:column; gap:0.65rem;">
        ${project.highlights.map(h => `
          <li style="display:flex; align-items:flex-start; gap:0.65rem; color:var(--text-secondary); font-size:0.9rem; line-height:1.5;">
            <span style="color:var(--status-success); margin-top:2px;">${ICONS['check']}</span>
            <span>${h}</span>
          </li>
        `).join('')}
      </ul>
    </div>

    <div style="margin-bottom:2rem;">
      <h4 style="font-size:0.9rem; text-transform:uppercase; letter-spacing:0.05em; color:var(--text-muted); font-weight:700; margin-bottom:0.65rem;">
        Technologies Used
      </h4>
      <div style="display:flex; flex-wrap:wrap; gap:0.5rem;">
        ${project.techStack.map(t => `<span class="pill-badge">${t}</span>`).join('')}
      </div>
    </div>

    <div style="display:flex; gap:1rem; flex-wrap:wrap; padding-top:1.25rem; border-top:1px solid var(--border-subtle);">
      <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="flex:1;">
        Live Demonstration ${ICONS['external-link']}
      </a>
      <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="flex:1;">
        ${ICONS['github']} GitHub Repository
      </a>
    </div>
  `;

  backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const backdrop = document.getElementById('project-modal-backdrop');
  if (backdrop && backdrop.classList.contains('open')) {
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }
}

/* ==========================================================================
   8. Achievements Section & Filter
   ========================================================================== */
function initAchievements() {
  const tabs = document.querySelectorAll('.achievements-filter-nav .filter-tab');
  const grid = document.getElementById('achievements-grid');

  const renderAchievements = (filter = 'all') => {
    if (!grid) return;
    const items = filter === 'all'
      ? portfolioData.achievements
      : portfolioData.achievements.filter(a => a.category === filter);

    grid.innerHTML = items.map(ach => `
      <div class="achievement-card">
        <div class="achievement-top">
          <span class="achievement-badge">${ach.badge}</span>
          <span class="achievement-date">${ach.date}</span>
        </div>
        <h3 class="achievement-title">${ach.title}</h3>
        <div class="achievement-issuer">${ach.issuer}</div>
        <p class="achievement-desc">${ach.description}</p>
        <div>
          <a href="${ach.url}" class="achievement-link">
            ${ach.linkText} ${ICONS['arrow-right']}
          </a>
        </div>
      </div>
    `).join('');
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.getAttribute('data-filter') || 'all';
      renderAchievements(filter);
    });
  });

  renderAchievements('all');
}

/* ==========================================================================
   9. Contact Form & Copy Email Utility
   ========================================================================== */
function initContact() {
  const copyBtn = document.getElementById('copy-email-btn');
  const contactForm = document.getElementById('contact-form');
  const toast = document.getElementById('toast-notice');

  // Copy Email Button
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      const email = portfolioData.personal.email;
      try {
        await navigator.clipboard.writeText(email);
        showToast('Email address copied to clipboard!');
        copyBtn.innerHTML = `${ICONS['check']} Copied!`;
        setTimeout(() => {
          copyBtn.innerHTML = `${ICONS['copy']} Copy Email`;
        }, 2200);
      } catch (err) {
        // Fallback for clipboard
        const input = document.createElement('input');
        input.value = email;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        showToast('Email address copied to clipboard!');
      }
    });
  }

  // Contact Form Submission
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      // Basic client-side validation
      const name = contactForm.elements['name']?.value?.trim();
      const email = contactForm.elements['email']?.value?.trim();
      const message = contactForm.elements['message']?.value?.trim();

      if (!name || !email || !message) {
        showToast('Please fill in all required fields.', true);
        return;
      }

      // Simulate sending state
      submitBtn.disabled = true;
      submitBtn.innerHTML = `Sending message...`;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        contactForm.reset();
        showToast(`Thank you, ${name}! Your message has been sent successfully.`);
      }, 900);
    });
  }
}

function showToast(message, isError = false) {
  const toast = document.getElementById('toast-notice');
  const toastMsg = document.getElementById('toast-message');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.style.borderColor = isError ? 'var(--status-warning)' : 'var(--status-success)';
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

/* ==========================================================================
   10. Scroll Spy for Navigation Highlighting
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    let currentId = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   11. Back to Top Button
   ========================================================================== */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top-btn');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.style.opacity = '1';
      backToTopBtn.style.pointerEvents = 'auto';
    } else {
      backToTopBtn.style.opacity = '0';
      backToTopBtn.style.pointerEvents = 'none';
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
