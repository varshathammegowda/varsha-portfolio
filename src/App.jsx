import { useEffect, useState } from 'react';
import {
  SiCplusplus,
  SiCss,
  SiExpress,
  SiFastapi,
  SiFlask,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiNumpy,
  SiPandas,
  SiPostgresql,
  SiPython,
  SiReact,
  SiScikitlearn,
} from 'react-icons/si';

const profile = {
  name: 'Varsha T.',
  email: 'varshathammegowda@gmail.com',
  github: 'https://github.com/varshathammegowda',
  linkedin: 'https://www.linkedin.com/in/varsha-thammegowda/',
};

const projects = [
  {
    number: '01', name: 'Student Feedback NLP System', type: 'NATURAL LANGUAGE PROCESSING', visual: 'feedback',
    description: 'Turns open-ended student feedback into organized, useful insight. Classifies sentiment and groups comments into areas like faculty, laboratories, examinations, library, and course content.',
    details: 'Feedback analysis · Topic categorization · Summarization',
    technologies: ['Python', 'NLP', 'TF-IDF', 'Logistic Regression', 'scikit-learn', 'Pandas'],
    link: 'https://github.com/varshathammegowda/student-feedback-nlp',
  },
  {
    number: '02', name: 'AI-Powered Research Agent', type: 'RETRIEVAL-AUGMENTED GENERATION', visual: 'research',
    description: 'A research assistant for exploring academic papers, retrieving relevant information, and producing structured answers grounded in source material.',
    details: 'Academic discovery · Semantic search · PDF question answering',
    technologies: ['React', 'FastAPI', 'Python', 'OpenAlex', 'PyMuPDF', 'Sentence Transformers', 'ChromaDB', 'Gemini API'],
    link: 'https://github.com/varshathammegowda/Research-agent',
  },
  {
    number: '03', name: 'ForgeMind AI', type: 'INDUSTRIAL KNOWLEDGE INTELLIGENCE', visual: 'forge',
    description: 'An AI-powered knowledge platform for industrial documents. It processes technical files, makes their content searchable, and generates context-aware answers from retrieved information.',
    details: 'Document processing · Semantic retrieval · Context-aware Q&A',
    technologies: ['React', 'FastAPI', 'Python', 'ChromaDB', 'RAG', 'Embeddings'],
    link: 'https://github.com/soundaryadshetty14-hash/ForgeMind-AI',
  },
];

const skillGroups = [
  { title: 'Programming', items: ['Python', 'SQL'] },
  { title: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'React'] },
  { title: 'Backend', items: ['Node.js', 'Express.js', 'Flask', 'FastAPI'] },
  { title: 'AI / Machine Learning', items: ['Natural Language Processing', 'scikit-learn', 'Pandas', 'NumPy', 'Generative AI', 'RAG', 'Prompt engineering'] },
  { title: 'Data & Tools', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'ChromaDB', 'Git', 'GitHub'] },
];

const technologyIcons = {
  Python: SiPython,
  HTML5: SiHtml5,
  CSS3: SiCss,
  JavaScript: SiJavascript,
  React: SiReact,
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  Flask: SiFlask,
  FastAPI: SiFastapi,
  'scikit-learn': SiScikitlearn,
  Pandas: SiPandas,
  NumPy: SiNumpy,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Git: SiGit,
  GitHub: SiGithub,
};

const technologyFallbacks = {
  Java: 'J',
  SQL: 'SQL',
  'Natural Language Processing': 'NLP',
  'Generative AI': 'AI',
  RAG: 'RAG',
  'Prompt engineering': '<>',
  ChromaDB: 'DB',
};

const technologies = skillGroups.flatMap((group) => group.items.map((name) => ({
  name,
  category: group.title,
  mark: technologyFallbacks[name],
})));

const navItems = ['About', 'Skills', 'Projects', 'Education', 'Contact', 'Resume'];

function SocialLinks({ compact = false }) {
  return <div className={`social-links${compact ? ' compact' : ''}`}>
    <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">GH <span>↗</span></a>
    <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">in <span>↗</span></a>
  </div>;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="navbar">
    <a className="brand" href="#home" aria-label="Varsha T. home"><span className="brand-mark">V.</span><span>VARSHA T.</span></a>
    <button className="menu-toggle" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /></button>
    <nav className={open ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
      {navItems.map((item) => item === 'Resume'
        ? <a key={item} href="/resume.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>{item}</a>
        : <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}>{item}</a>)}
      <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>LET’S TALK <span>↗</span></a>
    </nav>
  </header>;
}

function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal, .project-card');
    const skillCards = document.querySelectorAll('.tech-card');

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach((element) => element.classList.add('is-visible'));
      skillCards.forEach((card) => card.classList.add('is-visible'));
      return undefined;
    }

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      skillCards.forEach((card) => card.classList.add('is-visible'));
      return undefined;
    }

    let observer;
    try {
      observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            currentObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

      skillCards.forEach((card) => card.classList.add('skill-reveal-pending'));
      [...elements, ...skillCards].forEach((element) => observer.observe(element));
    } catch {
      observer?.disconnect();
      [...elements, ...skillCards].forEach((element) => {
        element.classList.remove('skill-reveal-pending');
        element.classList.add('is-visible');
      });
      return undefined;
    }

    return () => observer.disconnect();
  }, []);
}

function Hero() {
  return <section className="hero section-wrap" id="home">
    <div className="hero-gridline" aria-hidden="true" />
    <div className="hero-copy">
      <p className="eyebrow hero-availability"><span className="status-dot" /> OPEN TO SOFTWARE & AI/ML INTERNSHIPS</p>
      <h1 className="hero-title"><span className="hero-greeting">Hello, I'm</span><span className="hero-name">VARSHA T<span className="hero-name-period">.</span></span></h1>
      <p className="hero-role">Final-year Engineering Student</p>
      <p className="hero-intro">Building full-stack applications and intelligent systems that translate ideas into practical solutions.</p>
      <div className="hero-actions"><a className="button button-primary" href="#projects">Explore My Work <span>↘</span></a><a className="button button-quiet" href="#contact">Get in Touch <span>↗</span></a></div>
      <ul className="hero-pill" aria-label="Build, learn, innovate, deploy">
        <li>BUILD <sup>01</sup></li>
        <li>LEARN <sup>02</sup></li>
        <li>INNOVATE <sup>03</sup></li>
        <li>DEPLOY <sup>04</sup></li>
      </ul>
      <SocialLinks />
    </div>
    <div className="hero-art" aria-label="Abstract red orbital artwork">
      <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
      <div className="orb-core"><span>V</span><small>ECE · SWE · AI/ML · MERN </small></div>
      <span className="art-cross cross-one">+</span><span className="art-cross cross-two">+</span>
      <span className="art-caption"><br /></span>
      <span className="art-index">01 / 04</span>
    </div>
    <a href="#about" className="scroll-cue"><span /> SCROLL TO EXPLORE</a>
    <div className="hero-side-label">BENGALURU, INDIA · 2026</div>
  </section>;
}

function SectionHeading({ number, eyebrow, title, accent }) {
  return <div className="section-heading"><span className="section-number">{number} /</span><div><p className="eyebrow">{eyebrow}</p><h2>{title} <span>{accent}</span></h2></div></div>;
}

function About() {
  return <section className="section-wrap content-section reveal" id="about">
    <SectionHeading number="01" eyebrow="A LITTLE ABOUT ME" title="Curious by nature." accent="Engineer by choice." />
    <div className="about-layout"><p className="about-lead">I’m an Electronics & Communication Engineering student who loves making ideas work in the real world.</p>
      <div className="about-copy"><p>My engineering background taught me to look at problems from the ground up. Now I bring that same curiosity to building software—from full-stack applications and dependable backend systems to experiments in AI, NLP, and Generative AI.</p><p>I enjoy learning by building, asking better questions, and shaping complex ideas into useful, approachable tools. I’m currently seeking software development and AI/ML internship opportunities.</p><a className="text-link" href="#education">More about my journey <span>↘</span></a></div>
    </div>
    <div className="about-stats"><div><strong>8.5</strong><span>CGPA</span></div><div><strong>2027</strong><span>GRADUATING</span></div><div><strong>ECE</strong><span>ENGINEERING ROOTS</span></div><div><strong>∞</strong><span>THINGS TO LEARN</span></div></div>
  </section>;
}

function Skills() {
  return <section className="section-wrap content-section skills-section reveal" id="skills">
    <div className="stack-heading"><p className="eyebrow">02 / MY TOOLKIT</p><h2>TECH STACK</h2><p className="stack-subtitle">Technologies I use to build, experiment, and solve problems.</p></div>
    <ul className="tech-grid" aria-label="Technology skills">{technologies.map((tech, index) => {
      const Icon = technologyIcons[tech.name];
      return <li className="tech-card" key={tech.name} style={{ '--card-delay': `${(index % 10) * 45}ms` }}>
        <span className="tech-icon" aria-hidden="true">{Icon ? <Icon /> : <FallbackTechIcon mark={tech.mark} />}</span>
        <span className="tech-name">{tech.name}</span>
      </li>;
    })}</ul>
  </section>;
}

function FallbackTechIcon({ mark }) {
  return <svg viewBox="0 0 36 36" focusable="false" aria-hidden="true">
    <rect x="3.5" y="3.5" width="29" height="29" rx="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <text x="18" y="22" textAnchor="middle" fill="currentColor" fontFamily="Manrope, sans-serif" fontSize={mark.length > 2 ? '8' : '11'} fontWeight="700">{mark}</text>
  </svg>;
}

function ProjectVisual({ type }) {
  if (type === 'feedback') return <div className="project-visual visual-feedback"><div className="visual-window"><div className="window-bar"><i /><i /><i /><span>feedback_insights.py</span></div><div className="sentiment-row"><span>POSITIVE</span><b style={{ width: '78%' }} /></div><div className="sentiment-row"><span>NEUTRAL</span><b style={{ width: '48%' }} /></div><div className="sentiment-row"><span>NEGATIVE</span><b style={{ width: '32%' }} /></div><div className="visual-label">SENTIMENT OVERVIEW <em>01—03</em></div></div></div>;
  if (type === 'research') return <div className="project-visual visual-research"><div className="research-ring ring-a"/><div className="research-ring ring-b"/><div className="research-node node-a">PAPER</div><div className="research-node node-b">QUERY</div><div className="research-node node-c">RAG</div><div className="research-core">⌕</div><span className="visual-label">KNOWLEDGE, CONNECTED</span></div>;
  return <div className="project-visual visual-forge"><div className="forge-doc"><span>PDF / 24 PAGES</span><i /><i /><i /><i /><i /><b>EXTRACTED KNOWLEDGE</b></div><div className="forge-arrow">↗</div><div className="forge-answer"><span>AI RESPONSE</span><p>Context, retrieved.<br /><b>Answers that make sense.</b></p><i>RAG / 01</i></div><span className="visual-label">FROM DOCUMENT TO DECISION</span></div>;
}

function Projects() {
  return <section className="section-wrap content-section projects-section" id="projects">
    <SectionHeading number="03" eyebrow="SELECTED WORK" title="Ideas made" accent="tangible." />
    <div className="project-list">{projects.map((project, index) => <article className="project-card" key={project.number} style={{ '--reveal-delay': `${index * 110}ms` }}>
      <ProjectVisual type={project.visual} />
      <div className="project-info"><div className="project-topline"><span>PROJECT {project.number}</span><span>{project.type}</span></div><h3>{project.name}</h3><p className="project-description">{project.description}</p><p className="project-details">{project.details}</p><div className="project-tags">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div><a className="project-link" href={project.link} target="_blank" rel="noreferrer">View on GitHub <span>↗</span></a></div>
    </article>)}</div>
  </section>;
}

function Education() {
  return <section className="section-wrap content-section education-section reveal" id="education">
    <SectionHeading number="04" eyebrow="THE FOUNDATION" title="Learning to" accent="build better." />
    <article className="education-card"><div className="edu-marker"><span /></div><div className="edu-main"><p className="eyebrow">2023 — 2027 <span>·</span> BENGALURU, INDIA</p><h3>B.E. in Electronics and<br className="desktop-break" /> Communication Engineering</h3><p>Dayananda Sagar College of Engineering</p></div><div className="edu-score"><strong>8.5</strong><span>CGPA</span></div></article>
    <div className="community-note"><span className="community-icon">✳</span><p><b>Beyond the classroom</b><br />Part of Team Mudita and social responsibility activities at college.</p><span className="community-arrow">↗</span></div>
  </section>;
}

function Contact() {
  return <section className="contact-section reveal" id="contact"><div className="section-wrap contact-inner"><p className="eyebrow"><span className="status-dot" /> THE NEXT CHAPTER</p><h2>Have a good<br />problem? <span>Let’s talk.</span></h2><p className="contact-copy">I’m looking for opportunities to learn, contribute, and build things that matter. If you’re working on something interesting, I’d love to hear about it.</p><div className="contact-actions"><a className="button button-primary" href={`mailto:${profile.email}`}>Say hello <span>↗</span></a><a className="button button-quiet resume-download" href="/resume.pdf" download="Varsha_T_Resume.pdf">Download Resume <span>↓</span></a></div><div className="contact-meta"><div><span>EMAIL</span><a href={`mailto:${profile.email}`}>{profile.email}</a></div><div><span>ELSEWHERE</span><SocialLinks compact /></div><div><span>RESUME</span><a className="resume-view" href="/resume.pdf" target="_blank" rel="noopener noreferrer">View Resume <span>↗</span></a></div></div></div></section>;
}

function Footer() {
  return <footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">V.</span><span>VARSHA T.</span></a><p>Building with curiosity. Learning with intent.</p><span>© {new Date().getFullYear()} VARSHA T.</span><a className="footer-resume" href="/resume.pdf" target="_blank" rel="noopener noreferrer">View Resume <span>↗</span></a><a className="back-top" href="#home" aria-label="Back to top">↑</a></footer>;
}

export default function App() {
  useScrollReveal();
  return <><Navbar /><main><Hero /><About /><Skills /><Projects /><Education /><Contact /></main><Footer /></>;
}
