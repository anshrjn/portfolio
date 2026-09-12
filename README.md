# Ansh Ranjan - Personal Portfolio Website

A modern, high-performance personal portfolio website for **Ansh Ranjan** (B.Tech Student at JECRC University, Jaipur, India — Class of 2026).

Designed with a sleek dark/light theme, modern typography, responsive cards, interactive modals, filterable achievements and skills, smooth scroll spy, and production-ready Vercel configuration.

---

## 🚀 Live Demo & Preview

Run the portfolio locally with any web server:

```bash
# Option 1: Instant Python server (no install needed)
python3 -m http.server 3000

# Option 2: Using npm / Vite (when node is available)
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

---

## ✨ Features & Sections

1. **Hero Section**:
   - Status Badge (*Available for Internships & Projects*)
   - Title: **Ansh Ranjan**
   - Subtitle: **B.Tech Student | AI & Technology Enthusiast**
   - Quick CTA buttons: *View Projects*, *Contact Me*
   - Interactive Bento visual card with quick metrics & tech badges

2. **About Me**:
   - Student-friendly yet professional narrative
   - Highlights in Artificial Intelligence, Modern Web Development, and Digital Productivity

3. **Education**:
   - Degree: **B.Tech (2022 - 2026)**
   - Institution: **JECRC University**, Jaipur, India
   - Detailed coursework: DSA, AI & ML, Modern Web, OOP, DBMS, Developer Tooling

4. **Technical Skills**:
   - HTML, CSS, JavaScript, Artificial Intelligence, Generative AI, Web Development, Digital Productivity
   - Interactive category tabs (All, Frontend & Web, AI & GenAI, Productivity & Tools)
   - Proficiency meters and tagged micro-skills

5. **Projects**:
   - Interactive cards with live demo & GitHub repository links
   - **Interactive Modal Dialog** with architecture breakdowns, highlights, and tech stacks
   - Featured projects: AI Knowledge Assistant, DevFlow Productivity Hub, PromptCraft Studio, Smart Campus Portal

6. **Achievements (Milestones)**:
   - Filterable categories: *Certifications*, *Hackathons*, *Courses*, *Awards*, *Other*
   - Easy-to-extend data schema for adding future certificates and accolades

7. **Contact**:
   - Direct email: `contact@anshranjan.com`
   - One-click **Copy Email** button with animated toast confirmation
   - Interactive message form with validation
   - Timezone indicator (IST UTC+5:30) and social links (GitHub, LinkedIn, Twitter/X, Email)

8. **UI/UX Polish**:
   - Dark / Light mode toggle with persistent `localStorage` memory
   - Responsive mobile navigation with slide-out drawer
   - Top reading progress bar
   - Scroll-spy active link indicator in navbar
   - Back-to-top floating button

---

## 🛠️ Project Structure

```
├── index.html              # Main semantic HTML application
├── css/
│   └── styles.css          # Design system, glassmorphic cards, animations, responsive breakpoints
├── js/
│   ├── app.js              # Application logic, interactions, modals, validation, theme switcher
│   └── data.js             # Structured portfolio data (skills, projects, achievements, etc.)
├── src/
│   ├── App.jsx             # React component implementation
│   └── main.jsx            # React root entry point
├── package.json            # Dependencies and scripts for Vite/React/Tailwind
├── vite.config.js          # Vite build config
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS plugins
├── vercel.json             # Vercel deployment and caching rules
└── README.md               # Documentation
```

---

## 🌐 Deploy to Vercel (1-Click)

### Via GitHub:
1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Select your repository.
4. Vercel automatically detects the configuration (`vercel.json`) and deploys instantly!

### Via Vercel CLI:
```bash
npm i -g vercel
vercel
```

---

## 📝 Customizing Your Information

All personal details, skills, projects, and achievements are organized in **`js/data.js`**:
- Simply open `js/data.js` to modify text, add new projects, or paste your certificate links!
