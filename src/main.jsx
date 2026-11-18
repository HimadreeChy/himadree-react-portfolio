import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Github, Linkedin, Mail, Phone, Download, ArrowUpRight,
  Code2, Brain, Database, Globe, Cpu, GraduationCap, ExternalLink
} from "lucide-react";

import "./styles.css";
import profileImage from "./assets/profile.jpg";
import reHome from "./assets/projects/realestate-home.png";
import reDetails from "./assets/projects/realestate-details.png";
import reSearch from "./assets/projects/realestate-search.png";

/* EDIT THESE LINKS
   CV: put your PDF inside the /public folder with this exact file name. */
const LINKEDIN_URL = "https://www.linkedin.com/in/your-username";
const CV_URL = "/Himadree_Chowdhury_CV.pdf";
const GITHUB_URL = "https://github.com/HimadreeChy";
const EMAIL = "himadreechowdhury074@gmail.com";
const PHONE_DISPLAY = "01302993817";
const PHONE_LINK = "+8801302993817";

const projects = [
  {
    title: "Nexus — SaaS Admin Dashboard",
    description: "A modern and responsive SaaS administration dashboard featuring analytics, KPI cards, transaction management, customer profiles, notifications, global search and interactive charts. Built with React and Vite.",
    tags: ["React", "Vite", "JavaScript", "Bootstrap 5", "Recharts", "Lucide React"],
    featured: true,
    live: "https://nexus-saas-dashboard-xi.vercel.app/",
    github: "https://github.com/HimadreeChy/nexus-saas-dashboard"
  },
  {
    title: "Real Estate Marketplace",
    description: "A full-stack property marketplace where users can sign up, list properties for sale, upload images, and search or filter listings. Developed using ASP.NET Core MVC with a structured application architecture.",
    tags: ["C#", "ASP.NET Core MVC", "Entity Framework Core", "PostgreSQL", "Npgsql"],
    featured: true,
    live: "",
    github: "https://github.com/HimadreeChy/RealEstateMarketplace",
    images: [reHome, reDetails, reSearch]
  },
  {
    title: "ARTIVA — Contemporary Art Gallery",
    description: "A multi-page contemporary art gallery website featuring artwork collections, artist profiles, exhibitions, artwork details and a functional contact form with EmailJS integration.",
    tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "EmailJS"],
    featured: true,
    live: "",
    github: "https://github.com/HimadreeChy/Artiva-Art-Gallery"
  },
  {
    title: "Liver Fibrosis Staging from Ultrasound Images",
    description: "A deep-learning based medical imaging project for five-class liver fibrosis staging (F0–F4). The research explores model evaluation, Grad-CAM explainability and prediction calibration.",
    tags: ["Python", "TensorFlow", "Deep Learning", "Computer Vision", "Medical Imaging"],
    featured: false,
    live: "",
    github: "https://github.com/HimadreeChy/Liver-Fibrosis-Classification"
  },
  {
    title: "Fuzzy Random Forest for Customer Churn Prediction",
    description: "A machine learning project combining Fuzzy Logic with Random Forest for customer churn prediction across three datasets. It compares a baseline Random Forest model with a fuzzy-enhanced approach and explores customer churn risk assessment.",
    tags: ["Python", "Machine Learning", "Fuzzy Logic", "Random Forest", "Data Analysis"],
    featured: false,
    live: "",
    github: "https://github.com/HimadreeChy/Fuzzy-Random-Forest-Customer-Churn-Prediction"
  },
  {
    title: "Planet Shopify — Fashion E-commerce",
    description: "A fashion e-commerce website project focused on presenting products and providing an online shopping experience through a web-based interface.",
    tags: ["PHP", "MySQL", "HTML", "CSS", "Bootstrap"],
    featured: false,
    live: "",
    github: "https://github.com/HimadreeChy/Planet-shopify"
  }
];

const skills = [
  ["Programming", "Python, C#, C++, C, Java, JavaScript, PHP", Code2],
  ["AI & Machine Learning", "TensorFlow, Keras, Scikit-learn, Deep Learning, Fuzzy Logic", Brain],
  ["Data & Visualization", "NumPy, Pandas, Matplotlib, Data Analysis, Recharts", Database],
  ["Frontend Development", "HTML5, CSS3, JavaScript, React, Bootstrap, Responsive Web Design", Globe],
  ["Backend & Database", "ASP.NET Core MVC, Entity Framework Core, PostgreSQL, MySQL", Cpu]
];

function App() {
  const [showContact, setShowContact] = useState(false);

  return (
    <div>
      <header className="nav">
        <a className="brand" href="#home">Himadree Chowdhury</a>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <span className="status">Open to work</span>
            <p className="eyebrow">
              Himadree Chowdhury, computer science and engineering graduate
            </p>
            <h1 className="hero-title">
              Exploring AI and building meaningful software.
            </h1>
            <p className="lead">
              I am interested in artificial intelligence, machine learning and
              frontend web development. I enjoy working on deep learning
              applications, medical image analysis and building responsive,
              user-friendly web applications.
            </p>
            <div className="actions">
              <a className="primary" href="#projects">
                See selected work <ArrowUpRight size={18} />
              </a>
              <a className="outline" href={CV_URL} download>
                <Download size={17} /> Download CV
              </a>
              <a className="outline" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                <Linkedin size={17} /> LinkedIn
              </a>
            </div>
          </div>

          <figure className="hero-photo">
            <img src={profileImage} alt="Himadree Chowdhury" />
            <figcaption>Code, create, innovate</figcaption>
          </figure>
        </section>

        <section id="about" className="section">
          <p className="section-label">About</p>
          <div className="two-col">
            <h2>A curious mind with a passion for technology.</h2>
            <div>
              <p>
                I am a Computer Science and Engineering graduate from
                International Islamic University Chittagong. My interests
                include artificial intelligence, machine learning, frontend web
                development and solving real-world problems through technology.
              </p>
              <p>
                My academic and personal projects have allowed me to explore
                deep learning for medical image analysis, explainable AI, fuzzy
                logic and web application development. I enjoy learning new
                technologies and turning ideas into practical applications.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <p className="section-label">Skills</p>
          <h2>Tools I work with</h2>
          <div className="skill-grid">
            {skills.map(([title, text, Icon]) => (
              <div className="skill" key={title}>
                <Icon size={24} />
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <p className="section-label">Projects</p>
          <div className="section-heading">
            <h2>Selected work</h2>
            <p>
              Academic and personal projects where I apply programming, machine
              learning, artificial intelligence and problem-solving skills.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((p) => (
              <article className="project" key={p.title}>
                <div className="project-head">
                  {p.featured && <span className="project-flag">Featured</span>}
                  <h3>{p.title}</h3>
                  <div className="tags">
                    {p.tags.map((t) => (<span key={t}>{t}</span>))}
                  </div>
                </div>

                <div className="project-main">
                  <p>{p.description}</p>
                  {(p.live || p.github) && (
                    <div className="project-links">
                      {p.live && (
                        <a className="primary small" href={p.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={15} /> Live Demo
                        </a>
                      )}
                      {p.github && (
                        <a className="outline small" href={p.github} target="_blank" rel="noopener noreferrer">
                          <Github size={15} /> Code
                        </a>
                      )}
                    </div>
                  )}
                </div>

                {p.images && (
                  <div className="project-shots">
                    {p.images.map((src, idx) => (
                      <a key={idx} href={src} target="_blank" rel="noopener noreferrer">
                        <img src={src} alt={p.title + " screenshot " + (idx + 1)} loading="lazy" />
                      </a>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section">
          <p className="section-label">Education</p>
          <div className="education">
            <div className="education-icon">
              <GraduationCap size={28} />
            </div>
            <div className="education-content">
              <p className="education-year">2022 — 2026</p>
              <h2>B.Sc. in Computer Science & Engineering</h2>
              <h3>International Islamic University Chittagong (IIUC)</h3>
              <p className="education-department">
                Department of Computer Science & Engineering
              </p>
              <div className="education-info">
                <div>
                  <strong>Academic Focus</strong>
                  <p>
                    Artificial Intelligence • Machine Learning • Computer Vision
                    • Medical Image Analysis • Frontend Web Development
                  </p>
                </div>
                <div>
                  <strong>Relevant Coursework</strong>
                  <p>
                    Machine Learning • Neural Networks • Database Systems •
                    Software Engineering • Data Structures & Algorithms
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="contact-inner">
            <p className="section-label">Contact</p>
            <h2>Let's build something meaningful.</h2>
            <p>
              I'm open to professional opportunities, academic collaboration and
              projects related to technology, software development and
              artificial intelligence.
            </p>

            <div className="actions">
              <button className="primary" onClick={() => setShowContact(!showContact)}>
                <Mail size={18} /> Email me
              </button>
              <a className="outline" href={CV_URL} download>
                <Download size={17} /> Download CV
              </a>
              <a className="outline" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                <Linkedin size={17} /> LinkedIn
              </a>
              <a className="outline" href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                <Github size={17} /> GitHub
              </a>
            </div>

            {showContact && (
              <div className="contact-details">
                <p>
                  <Mail size={17} />
                  <a href={"mailto:" + EMAIL}>{EMAIL}</a>
                </p>
                <p>
                  <Phone size={17} />
                  <a href={"tel:" + PHONE_LINK}>{PHONE_DISPLAY}</a>
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Himadree Chowdhury</span>
        <span>Built with React & Vite</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);