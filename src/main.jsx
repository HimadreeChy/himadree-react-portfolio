import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Download,
  ArrowUpRight,
  Code2,
  Brain,
  Database,
  Globe,
  Cpu,
  GraduationCap,
  ExternalLink
} from "lucide-react";
import "./styles.css";
import profileImage from "./assets/profile.jpg";
import reHome from "./assets/projects/realestate-home.png";
import reDetails from "./assets/projects/realestate-details.png";
import reSearch from "./assets/projects/realestate-search.png";
/* ============================================================
   EDIT THESE LINKS
   - Leave a value as "" and its button/icon will stay hidden.
   - CV_URL: put your PDF in the /public folder, e.g. "/Himadree_Chowdhury_CV.pdf"
   ============================================================ */
const LINKEDIN_URL = "";
const CV_URL = "";
const GITHUB_URL = "https://github.com/HimadreeChy";
const EMAIL = "himadreechowdhury074@gmail.com";
const PHONE_DISPLAY = "01302993817";
const PHONE_LINK = "+8801302993817";

const projects = [
  {
    title: "Real Estate Marketplace",
    description:
      "A full-stack property marketplace where users can sign up, list properties for sale, upload images, and search or filter listings to buy. Built with a clean MVC architecture.",
    tags: ["C#", "ASP.NET Core MVC", "Entity Framework Core", "Authentication"],
    featured: true,
    live: "",
    github: "https://github.com/HimadreeChy/RealEstateMarketplace",
    images: [reHome, reDetails, reSearch]
  },
  {
    title: "Liver Fibrosis Staging from Ultrasound Images",
    description:
      "Deep-learning based five-class liver fibrosis staging system covering F0–F4, with model evaluation, Grad-CAM explainability and calibration analysis.",
    tags: ["Python", "TensorFlow", "Deep Learning", "Medical Imaging"],
    live: "",
    github: ""
  },
  {
    title: "Fuzzy Random Forest for Customer Churn Prediction",
    description:
      "A course project applying a Fuzzy Random Forest approach to customer churn prediction with model training and performance evaluation.",
    tags: ["Python", "Machine Learning", "Fuzzy Logic", "Random Forest"],
    live: "",
    github: ""
  }
];

const skills = [
  ["Programming", "Python, C#, C++, C, Java, JavaScript, MySQL", Code2],
  ["AI & Machine Learning", "TensorFlow, Keras, Scikit-learn, Deep Learning", Brain],
  ["Data & Visualization", "NumPy, Pandas, Matplotlib, Data Analysis", Database],
  ["Web Development", "ASP.NET Core MVC, Entity Framework, HTML, CSS, JavaScript, React", Globe],
  ["Core CSE", "Computer Networks, Computer Graphics, Database Management", Cpu]
];

function App() {
  const [showContact, setShowContact] = useState(false);

  return (
    <div>
      <header className="nav">
        <a className="brand" href="#home">
          HC<span>.</span>
        </a>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav-btn" href="#contact">
          Let's talk <ArrowUpRight size={16} />
        </a>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <span className="status">Open to work</span>
            <p className="eyebrow">COMPUTER SCIENCE & ENGINEERING</p>
            <h2 className="hero-title">
              <span>Himadree Chowdhury</span>
              <br />
              <em>CSE student building AI and full-stack software.</em>
            </h2>
            <p className="lead">
              I work on deep learning for medical imaging and build web applications with
              ASP.NET Core. I care about explainable models and clean, maintainable code.
            </p>
            <div className="actions">
              <a className="primary" href="#projects">
                View my work <ArrowUpRight size={18} />
              </a>
              <a className="secondary" href="#contact">
                Contact me
              </a>
              {CV_URL && (
                <a className="secondary" href={CV_URL} download>
                  <Download size={16} /> Download CV
                </a>
              )}
            </div>
          </div>

          <div className="hero-card">
            <img className="profile-placeholder" src={profileImage} alt="Himadree Chowdhury" />
            <div className="card-caption">
              <strong>Code • Create • Innovate</strong>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-label">01 — ABOUT</div>
          <div className="two-col">
            <div>
              <h2>
                A curious mind with a passion for <span>technology.</span>
              </h2>
            </div>
            <div>
              <p>
                I am a Computer Science and Engineering student interested in solving real-world
                problems through software and artificial intelligence.
              </p>
              <p>
                My current academic work focuses on deep learning and medical image analysis, where
                I explore reliable and explainable approaches rather than accuracy alone.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="section muted">
          <div className="section-label">02 — SKILLS</div>
          <h2>Tools I work with</h2>
          <div className="skill-grid">
            {skills.map(([title, text, Icon]) => (
              <div className="skill" key={title}>
                <Icon size={26} />
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-label">03 — PROJECTS</div>
          <div className="section-heading">
            <h2>Selected work</h2>
            <p>
              Academic and personal work where I apply programming, machine learning and
              problem-solving.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((p, i) => (
              <article className={"project " + (p.featured ? "featured" : "")} key={p.title}>
                <div className="project-top">
                  <span className="project-number">0{i + 1}</span>
                  <ArrowUpRight size={20} />
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
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="tags">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                {(p.live || p.github) && (
                  <div className="project-links">
                    {p.live && (
                      <a
                        className="primary small"
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={15} /> Live Demo
                      </a>
                    )}
                    {p.github && (
                      <a
                        className="secondary small"
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={15} /> Code
                      </a>
                    )}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section education-section">
          <div className="section-label">04 — EDUCATION</div>

          <div className="education">
            <div className="education-icon">
              <GraduationCap size={30} />
            </div>

            <div className="education-content">
              <p className="education-year">2022 — 2026</p>

              <h2>
                B.Sc. in <span>Computer Science & Engineering</span>
              </h2>

              <h3>International Islamic University Chittagong (IIUC)</h3>

              <p className="education-department">Department of Computer Science & Engineering</p>

              <div className="education-info">
                <div>
                  <strong>Academic Focus</strong>
                  <p>
                    Artificial Intelligence • Machine Learning • Computer Vision • Medical Image
                    Analysis
                  </p>
                </div>

                <div>
                  <strong>Relevant Coursework</strong>
                  <p>
                    Machine Learning • Neural Networks • Database Systems • Software Engineering •
                    Data Structures & Algorithms
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="section-label">05 — CONTACT</div>
          <h2>
            Let's build something
            <br />
            <span>meaningful.</span>
          </h2>
          <p>
            I'm open to academic collaboration, projects and opportunities related to technology
            and AI.
          </p>

          <button className="primary" onClick={() => setShowContact(!showContact)}>
            <Mail size={18} /> Email me
          </button>

          {showContact && (
            <div className="contact-details">
              <p>
                <Mail size={17} /> <a href={"mailto:" + EMAIL}>{EMAIL}</a>
              </p>
              <p>
                <Phone size={17} /> <a href={"tel:" + PHONE_LINK}>{PHONE_DISPLAY}</a>
              </p>
            </div>
          )}

          <div className="socials">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github />
            </a>
            {LINKEDIN_URL && (
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin />
              </a>
            )}
            <a href={"mailto:" + EMAIL} aria-label="Email">
              <Mail />
            </a>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 Himadree Chowdhury</span>
        <span>Built with React & Vite</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);