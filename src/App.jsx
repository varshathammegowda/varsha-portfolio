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
    number: '01', name: 'Jagriti Alarm', type: 'ACTIVITY-BASED ALARM', visual: 'jagriti',
    description: 'An interactive activity-based alarm application that uses real-time body pose detection to verify physical movements and help users complete activities before dismissing the alarm.',
    features: ['Real-time pose detection', 'Activity/exercise tracking', 'Camera-based movement verification', 'Repetition counting', 'Interactive alarm experience'],
    technologies: ['React', 'JavaScript', 'MediaPipe Pose Landmarker', 'Node.js', 'Express.js', 'MongoDB'],
  link: 'https://github.com/varshathammegowda/Jagriti-Alaram-App'
},
  {
    number: '02', name: 'Student Feedback NLP System', type: 'NATURAL LANGUAGE PROCESSING', visual: 'feedback',
    description: 'A natural language processing system that analyzes student feedback, classifies sentiment, and organizes comments into meaningful categories to generate useful insights.',
    features: ['Sentiment classification', 'Feedback categorization', 'Text preprocessing', 'TF-IDF feature extraction', 'Logistic Regression classification', 'Feedback insights'],
    technologies: ['Python', 'NLP', 'TF-IDF', 'Logistic Regression', 'Scikit-learn', 'Pandas'],
    link: 'https://github.com/varshathammegowda/student-feedback-nlp',
  },
  {
    number: '03', name: 'AI-Powered Research Agent', type: 'RETRIEVAL-AUGMENTED GENERATION', visual: 'research',
    description: 'An AI research assistant that discovers academic papers, extracts information from PDFs, performs semantic search, and generates context-aware answers using retrieved research content.',
    features: ['Academic paper discovery', 'PDF text extraction', 'Semantic search', 'RAG pipeline', 'Context-aware question answering', 'AI-generated responses'],
    technologies: ['React', 'FastAPI', 'Python', 'OpenAlex', 'PyMuPDF', 'Sentence Transformers', 'ChromaDB', 'Gemini API'],
    link: 'https://github.com/varshathammegowda/Research-agent',
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
  if (type === 'jagriti') return <div className="project-visual visual-jagriti" aria-hidden="true">
    <div className="activity-ui">
      <div className="activity-ui-top"><span><i /> LIVE POSE CHECK</span><span>CAMERA / 01</span></div>
      <div className="activity-frame">
        <span className="activity-corner corner-tl" /><span className="activity-corner corner-tr" />
        <span className="activity-corner corner-bl" /><span className="activity-corner corner-br" />
        <svg className="pose-figure" viewBox="0 0 180 150" fill="none">
          <circle cx="91" cy="27" r="10" />
          <path d="M91 39 88 79 91 101M89 53 64 70 49 58M89 54 114 68 130 54M88 79 68 111 61 134M89 80 111 109 121 132" />
          <circle cx="88" cy="51" r="3" /><circle cx="64" cy="70" r="3" /><circle cx="114" cy="68" r="3" />
          <circle cx="88" cy="79" r="3" /><circle cx="68" cy="111" r="3" /><circle cx="111" cy="109" r="3" />
        </svg>
        <span className="activity-guide guide-one" /><span className="activity-guide guide-two" />
      </div>
      <div className="activity-ui-bottom"><span><i /> MOVEMENT DETECTED</span><span>ACTIVITY 01</span></div>
    </div>
    <span className="visual-label">MOVE TO DISMISS <em>· LIVE</em></span>
  </div>;
  if (type === 'feedback') return <div className="project-visual visual-feedback" aria-hidden="true"><div className="visual-window"><div className="window-bar"><i /><i /><i /><span>feedback_insights.py</span></div><div className="sentiment-row"><span>POSITIVE</span><b style={{ width: '78%' }} /></div><div className="sentiment-row"><span>NEUTRAL</span><b style={{ width: '48%' }} /></div><div className="sentiment-row"><span>NEGATIVE</span><b style={{ width: '32%' }} /></div><div className="visual-label">SENTIMENT OVERVIEW <em>01—03</em></div></div></div>;
  if (type === 'research') return <div className="project-visual visual-research" aria-hidden="true"><div className="research-ring ring-a"/><div className="research-ring ring-b"/><div className="research-node node-a">PAPER</div><div className="research-node node-b">QUERY</div><div className="research-node node-c">RAG</div><div className="research-core">⌕</div><span className="visual-label">KNOWLEDGE, CONNECTED</span></div>;
  return null;
}

function Projects() {
  return <section className="section-wrap content-section projects-section" id="projects">
    <SectionHeading number="03" eyebrow="SELECTED WORK" title="Ideas made" accent="tangible." />
    <div className="project-list">{projects.map((project, index) => <article className="project-card" key={project.number} style={{ '--reveal-delay': `${index * 110}ms` }}>
      <ProjectVisual type={project.visual} />
      <div className="project-info">
        <div className="project-topline"><span>PROJECT {project.number}</span><span>{project.type}</span></div>
        <h3>{project.name}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-capabilities">
          <p className="project-subheading">KEY CAPABILITIES</p>
          <ul className="project-features" aria-label={`${project.name} key features`}>
            {project.features.map((feature) => <li key={feature}>{feature}</li>)}
          </ul>
        </div>
        <div className="project-tags" aria-label="Technologies used">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
        {project.link && <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} on GitHub`}>View on GitHub <span>↗</span></a>}
      </div>
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
