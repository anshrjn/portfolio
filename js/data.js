/**
 * Portfolio Data for Ansh Ranjan
 * Easily update or expand skills, projects, achievements, and education.
 */

const portfolioData = {
  personal: {
    name: "Ansh Ranjan",
    shortName: "Ansh",
    role: "B.Tech Student | AI & Technology Enthusiast",
    tagline: "Exploring Artificial Intelligence, building modern web experiences, and optimizing digital productivity.",
    bio: "I am a forward-thinking B.Tech student passionate about artificial intelligence, modern web engineering, and digital workflows. I thrive on translating theoretical concepts into robust, user-centric software and exploring how generative AI can elevate productivity and real-world problem-solving.",
    college: "JECRC University",
    degree: "Bachelor of Technology (B.Tech)",
    gradYear: "2026",
    location: "Jaipur, Rajasthan, India",
    email: "contact@anshranjan.com",
    status: "Open to Internships & Collaborative Projects",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:contact@anshranjan.com"
    },
    stats: [
      { label: "Graduation Year", value: "2026", icon: "graduation-cap" },
      { label: "Core Focus", value: "AI & Web", icon: "cpu" },
      { label: "Projects Completed", value: "10+", icon: "folder-git" },
      { label: "Location", value: "Jaipur, IN", icon: "map-pin" }
    ]
  },

  about: {
    headline: "Engineering at the intersection of AI, Web Technology & Productivity",
    paragraphs: [
      "I am currently pursuing my B.Tech degree at JECRC University (Batch of 2026). My technical journey is driven by a deep fascination with how software and intelligent systems can empower individuals and modernize everyday operations.",
      "From crafting responsive, accessible web interfaces to experimenting with Large Language Models and Generative AI workflows, I enjoy building tools that solve real problems. I am continuously exploring emerging tech stacks, mastering software design patterns, and refining my personal digital productivity systems.",
      "When I am not coding or studying computer science fundamentals, you will find me participating in hackathons, exploring new developer utilities, and contributing to collaborative tech communities."
    ],
    highlights: [
      {
        title: "Artificial Intelligence & GenAI",
        description: "Exploring prompt engineering, neural network architectures, and integrating intelligent APIs into web applications.",
        icon: "sparkles"
      },
      {
        title: "Modern Web Engineering",
        description: "Building fast, reactive, and visually pleasing interfaces with clean semantic HTML, modern CSS, and JavaScript.",
        icon: "layout"
      },
      {
        title: "Digital Productivity & Tooling",
        description: "Designing streamlined workflows, leveraging automation, Git version control, and markdown-based knowledge systems.",
        icon: "zap"
      },
      {
        title: "Continuous Learning",
        description: "Dedicated to mastering Data Structures, Algorithms, System Architecture, and collaborative software development.",
        icon: "book-open"
      }
    ]
  },

  education: [
    {
      institution: "JECRC University",
      degree: "Bachelor of Technology (B.Tech)",
      location: "Jaipur, Rajasthan, India",
      period: "2022 - 2026",
      status: "In Progress (Class of 2026)",
      description: "Rigorous academic curriculum grounded in computer science principles, mathematical foundations, and modern software engineering practices.",
      coursework: [
        "Data Structures & Algorithms (DSA)",
        "Artificial Intelligence & Machine Learning",
        "Modern Web Development",
        "Object-Oriented Programming (OOP)",
        "Database Management Systems (DBMS)",
        "Computer Networks & Operating Systems",
        "Software Engineering & Agile Methodologies",
        "Digital Productivity & Developer Tooling"
      ],
      highlights: [
        "Active member of campus tech and coding societies",
        "Engaged in university hackathons and collaborative development projects",
        "Focused on hands-on practical implementation of emerging technologies"
      ]
    }
  ],

  skills: [
    {
      name: "HTML",
      category: "frontend",
      level: 95,
      levelLabel: "Advanced",
      description: "Semantic HTML5, Web Accessibility (a11y), SEO best practices, structured microdata.",
      icon: "file-code",
      tags: ["HTML5", "Semantic Markup", "A11y", "SEO"]
    },
    {
      name: "CSS",
      category: "frontend",
      level: 90,
      levelLabel: "Advanced",
      description: "CSS3, Flexbox, Grid, CSS Variables, Responsive Design, Keyframe Animations & Transitions.",
      icon: "palette",
      tags: ["CSS3", "Flexbox", "Grid", "Animations", "Tailwind"]
    },
    {
      name: "JavaScript",
      category: "frontend",
      level: 88,
      levelLabel: "Proficient",
      description: "ES6+, Async/Await, DOM manipulation, Fetch API, Modular JS, Functional programming concepts.",
      icon: "code",
      tags: ["ES6+", "Async/Await", "DOM", "Fetch API", "Event Loop"]
    },
    {
      name: "Artificial Intelligence",
      category: "ai",
      level: 82,
      levelLabel: "Proficient",
      description: "Core AI concepts, Machine Learning workflows, classification models, neural network fundamentals.",
      icon: "brain",
      tags: ["ML Concepts", "Model Evaluation", "Neural Nets", "Data Preprocessing"]
    },
    {
      name: "Generative AI",
      category: "ai",
      level: 86,
      levelLabel: "Proficient",
      description: "Large Language Models (LLMs), Prompt Engineering, API integration, Retrieval-Augmented Generation concepts.",
      icon: "sparkles",
      tags: ["LLMs", "Prompt Engineering", "RAG Concepts", "AI APIs"]
    },
    {
      name: "Web Development",
      category: "frontend",
      level: 89,
      levelLabel: "Proficient",
      description: "Full frontend lifecycle, component-based architectures, responsive UX, RESTful integration.",
      icon: "globe",
      tags: ["Component Architecture", "Single Page Apps", "REST APIs", "Performance"]
    },
    {
      name: "Digital Productivity",
      category: "productivity",
      level: 92,
      levelLabel: "Expert",
      description: "Modern developer tooling, Git/GitHub workflows, markdown systems, task automation, keyboard-driven development.",
      icon: "zap",
      tags: ["Git & GitHub", "Workflow Automation", "VS Code", "Notion / Obsidian"]
    }
  ],

  projects: [
    {
      id: "ai-assistant",
      title: "AI Knowledge & Research Assistant",
      tagline: "Context-aware conversational assistant built for research and automated documentation synthesis.",
      category: "ai",
      featured: true,
      image: "assets/project-ai.svg",
      summary: "An intelligent productivity tool that allows users to query documents, extract key insights, and summarize complex research papers using generative AI.",
      details: "Engineered a responsive frontend interface with real-time streaming responses, markdown rendering, and document upload support. Connects to modern generative AI APIs with custom prompt engineering templates for deep analysis.",
      techStack: ["Generative AI", "JavaScript", "HTML5/CSS3", "REST APIs", "Tailwind CSS"],
      demoUrl: "https://example.com/demo/ai-assistant",
      githubUrl: "https://github.com/example/ai-assistant",
      highlights: [
        "Interactive chat streaming interface with formatted markdown rendering",
        "Modular prompt engineering engine for tailored document insights",
        "Responsive dark/light UI with instant client-side query caching"
      ]
    },
    {
      id: "devflow-productivity",
      title: "DevFlow - Productivity & Workflow Hub",
      tagline: "All-in-one developer dashboard for tracking sprint tasks, habits, and technical learning.",
      category: "productivity",
      featured: true,
      image: "assets/project-devflow.svg",
      summary: "A streamlined digital productivity suite featuring kanban boards, pomodoro timers, quick code snippet vaults, and daily goal trackers.",
      details: "Designed with keyboard-first shortcuts and local storage persistence. Helps engineering students maintain deep work sessions, organize university assignments, and measure study velocity.",
      techStack: ["JavaScript (ES6+)", "Web Storage API", "Modern CSS", "Accessibility", "Flexbox/Grid"],
      demoUrl: "https://example.com/demo/devflow",
      githubUrl: "https://github.com/example/devflow",
      highlights: [
        "Drag-and-drop task organization with zero external UI dependencies",
        "Persistent local storage state with JSON backup and export",
        "Lightweight, snappy bundle size loading under 100ms"
      ]
    },
    {
      id: "genai-prompt-studio",
      title: "PromptCraft - GenAI Studio & Playground",
      tagline: "Interactive playground to test, refine, and catalog generative AI system prompts.",
      category: "ai",
      featured: true,
      image: "assets/project-promptcraft.svg",
      summary: "A developer tool designed to test token consumption, output consistency, and parameter tuning across different generative models.",
      details: "Provides comparison views for side-by-side prompt testing, automated variable injection, and one-click code export for quick integration into production apps.",
      techStack: ["Artificial Intelligence", "Generative AI", "JavaScript", "Responsive UI"],
      demoUrl: "https://example.com/demo/promptcraft",
      githubUrl: "https://github.com/example/promptcraft",
      highlights: [
        "Side-by-side output evaluation with token estimation metrics",
        "Reusable prompt template library with categorized tags",
        "Export configurations directly as JavaScript or Python snippets"
      ]
    },
    {
      id: "smart-campus-hub",
      title: "Smart Campus Resource & Community Portal",
      tagline: "Student portal to share peer notes, study roadmaps, and campus tech events.",
      category: "web",
      featured: false,
      image: "assets/project-campus.svg",
      summary: "A centralized platform for B.Tech students to organize study materials, curate subject notes, and discover upcoming coding hackathons.",
      details: "Built with a responsive multi-page layout, fast search filtering, and accessible UI patterns tailored for university students.",
      techStack: ["Web Development", "HTML5", "CSS3", "JavaScript"],
      demoUrl: "https://example.com/demo/smart-campus",
      githubUrl: "https://github.com/example/smart-campus",
      highlights: [
        "Real-time search filtering across courses and subject roadmaps",
        "Mobile-optimized reading mode for lecture summaries",
        "Built-in event countdown for university hackathons"
      ]
    }
  ],

  achievements: [
    {
      id: "cert-ai-foundations",
      title: "Artificial Intelligence Foundations",
      issuer: "Global Tech Academy / Online Specialization",
      date: "2024",
      category: "certifications",
      badge: "Certification",
      description: "Mastered fundamental principles of AI, machine learning pipelines, evaluation metrics, and ethical considerations.",
      linkText: "View Certificate",
      url: "#"
    },
    {
      id: "hack-university-2024",
      title: "University Tech Hackathon - Finalist",
      issuer: "JECRC University Tech Fest",
      date: "2024",
      category: "hackathons",
      badge: "Hackathon",
      description: "Built an innovative student utility prototype within 36 hours. Recognized among the top teams for UX design and AI integration.",
      linkText: "Project Showcase",
      url: "#"
    },
    {
      id: "course-web-dev",
      title: "Advanced Modern Web Development & Architecture",
      issuer: "Professional Development Course",
      date: "2023 - 2024",
      category: "courses",
      badge: "Course",
      description: "Completed in-depth curriculum covering semantic markup, modern CSS architecture, responsive design systems, and asynchronous JavaScript.",
      linkText: "Course Syllabus",
      url: "#"
    },
    {
      id: "cert-genai-prompt",
      title: "Generative AI & Prompt Engineering Specialist",
      issuer: "AI Skills Hub",
      date: "2024",
      category: "certifications",
      badge: "Certification",
      description: "Specialized training on LLM prompting techniques, few-shot prompting, chain-of-thought methodologies, and AI application design.",
      linkText: "View Credential",
      url: "#"
    },
    {
      id: "award-academic-excellence",
      title: "Academic Excellence Recognition",
      issuer: "Department of Engineering",
      date: "2023",
      category: "awards",
      badge: "Award",
      description: "Commended for consistent academic performance, project contributions, and active participation in peer learning groups.",
      linkText: "Verification",
      url: "#"
    },
    {
      id: "contrib-tech-community",
      title: "Campus Tech Club Contributor & Speaker",
      issuer: "Student Innovation Forum",
      date: "2024",
      category: "other",
      badge: "Community",
      description: "Conducted peer sessions on digital productivity tools, Git version control, and modern web application development.",
      linkText: "Event Summary",
      url: "#"
    }
  ]
};

if (typeof window !== 'undefined') {
  window.portfolioData = portfolioData;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { portfolioData };
}
