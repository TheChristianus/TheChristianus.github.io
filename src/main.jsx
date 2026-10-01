import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
const projects = [
  [
    "PRJ-001",
    "Artillery Cannon Modeling",
    "CAD",
    "CATIA V5 · Assembly",
    "Part design and assembly focused.",
    ["CATIA V5", "CAD", "Assembly"],
    "/images/Capture d'écran 2026-09-29 230144.png"
  ],
  
];
const experiences = [
  [
    "EXP-001",
    "Mechanical Engineering Intern",
    "INTERNSHIP",
    "COMPANY · LOCATION",
    "Role",
    ["Technologies"],
    "Date"
  ],
  
];
const skills = [
  ["SOLIDWORKS", "CSWP certified"],
  ["CATIA V5", "3D mechanical design"],
  ["GSD", "Surface modeling"],
  ["Mechanical Design", "Parametric modeling"],
  ["Aerospace", "Engineering fundamentals"],
  ["Engineering Analysis", "Technical reasoning"],
];
function App() {
  const [open, setOpen] = useState(false),
    [filter, setFilter] = useState("All");
  useEffect(() => {
    const o = new IntersectionObserver(
      (e) =>
        e.forEach((x) => x.isIntersecting && x.target.classList.add("show")),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((x) => o.observe(x));
    return () => o.disconnect();
  }, []);
  const cats = ["All", "CAD / Aerospace", "Mechanical Design", "Engineering"];
  const list =
    filter === "All" ? projects : projects.filter((p) => p[2] === filter);
  return (
    <>
      <header>
        <nav>
          <a className="brand" href="#home">
            Panthera Christianus<span>.</span>
          </a>
          <button className="toggle" onClick={() => setOpen(!open)}>
            ☰
          </button>
          <div className={"links " + (open ? "open" : "")}>
            {[
              "home",
              "about",
              "skills",
              "projects",
              "experience",
              "certifications",
              "contact",
            ].map((x) => (
              <a key={x} href={"#" + x} onClick={() => setOpen(false)}>
                {x}
              </a>
            ))}
          </div>
        </nav>
      </header>
      <main>
        <section id="home" className="hero">
          <div className="gridbg" />
          <div className="heroText reveal">
            <p className="eyebrow">MECHANICAL ENGINEERING / AEROSPACE</p>
            <small>PORTFOLIO / 2026</small>
            <h1>
              Design.
              <br />
              <em>Model.</em>
              <br />
              Innovate.
            </h1>
            <p>
              Mechanical Engineering student focused on mechanical design, CAD,
              3D modeling and aerospace applications.
            </p>
            <a className="btn" href="#projects">
              View projects ↗
            </a>
            <a className="btn ghost" href="#contact">
              Get in touch
            </a>
          </div>
          <div className="blueprint reveal">
  <span>AIRCRAFT / A-01</span>

  <div className="aircraft-container">
  <svg className="aircraft" viewBox="0 0 120 120">
    <path
      d="
        M8 60
        L48 52
        L65 15
        L73 15
        L68 52
        L94 57
        L106 42
        L112 42
        L104 60
        L112 78
        L106 78
        L94 63
        L68 68
        L73 105
        L65 105
        L48 68
        Z
      "
    />
  </svg>
</div>

  <div className="runway" />

  <div className="flight-data data-1">
    ALT 1200 FT
  </div>

  <div className="flight-data data-2">
    IAS 240 KT
  </div>

  <div className="flight-data data-3">
    HDG 090°
  </div>
</div>
        </section>
        <section id="about" className="section">
          <div className="head reveal">
            <i>01</i>
            <div>
              <small>PROFILE</small>
              <h2>About me</h2>
            </div>
          </div>
          <div className="two">
            <div className="reveal">
              <p className="lead">
                I build my engineering profile around{" "}
                <em>design, modeling, CAE, simulation and aerospace</em>.
              </p>
              <p className="muted">
                I am a Mechanical Engineering student developing practical
                skills in computer-aided design, simulation and
                engineering problem solving. My goal is to connect precise CAD
                work with real mechanical and aerospace applications.
              </p>
            </div>
            
            <div className="spec reveal">
              <b>ENGINEER PROFILE</b>
              <p>
                <span>DISCIPLINE</span>Mechanical Engineering
              </p>
              <p>
                <span>INTEREST</span>Aerospace Engineering
              </p>
              <p>
                <span>CAD</span>SOLIDWORKS / CATIA V5 / 3Dexperience
              </p>
              <p>
                <span>APPROACH</span>Design → Model → Validate
              </p>
            </div>
          </div>
          <div className="Resume-action">
            <a href="/Resume.pdf" target="_blank" rel="noreferrer" className="btn">
            View my Resume
            </a>
            <a href="\Resume.pdf" download="Koffi-Christian-KOUAYI-Resume.pdf" className="btn btn-outline">
              Download Resume
            </a>

          </div>
        </section>
        <section id="skills" className="section dark">
          <div className="head reveal">
            <i>02</i>
            <div>
              <small>CAPABILITIES</small>
              <h2>Technical skills</h2>
            </div>
          </div>
          <div className="skills">
            {skills.map((s, i) => (
              <article className="card reveal" key={s[0]}>
                <b>0{i + 1}</b>
                <strong>⌬</strong>
                <h3>{s[0]}</h3>
                <p>{s[1]}</p>
              </article>
            ))}
          </div>
        </section>
        <section id="projects" className="section">
          <div className="head split reveal">
            <div>
              <i>03</i>
              <div>
                <small>SELECTED WORK</small>
                <h2>Projects</h2>
              </div>
            </div>
            <div className="filters">
              {cats.map((c) => (
                <button
                  className={filter === c ? "active" : ""}
                  onClick={() => setFilter(c)}
                  key={c}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
          <div className="projects">
            {list.map((p, i) => (
              <article className="project reveal" key={p[0]} >
                <div className={"visual v" + i}>
                  <small>{p[0]}</small>
                  <div />
                </div>
                <div className="pbody">
                  <small>
                    {p[2]} · {p[3]}
                  </small>
                  <h3>{p[1]}</h3>
                  <p>{p[4]}</p>
                  <div>
                    {p[5].map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <a href={p[6]} target="_blank" rel="noreferrer" className="report-btn">
                    View Project
                  </a>
                  <a href={p[6]} target="_blank" rel="noreferrer" className="report-btn">
                    View Report
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section id="experience" className="section">
          <div className="head split reveal">
            <div>
              <i>04</i>
              <div>
                <small>PROFESSIONAL JOURNEY</small>
                <h2>Experience</h2>
              </div>
            </div>
          </div>

  <div className="projects">
    {experiences.map((e, i) => (
      <article className="project reveal" key={e[0]}>

        <div className={"visual v" + i}>
          <small>{e[0]}</small>
          <div />
        </div>

        <div className="pbody">

          <small>
            {e[2]} · {e[3]}
          </small>

          <h3>{e[1]}</h3>

          <p>{e[4]}</p>

          <div>
            {e[5].map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>

          <small className="experience-date">
            {e[6]}
          </small>

        </div>

      </article>
    ))}
  </div>
</section>
        <section id="certifications" className="section dark">
          <div className="head reveal">
            <i>05</i>
            <div>
              <small>CREDENTIALS</small>
              <h2>Certification</h2>
            </div>
          </div>
          <div className="cert reveal">
            <img src = "\images\SOLIDWORKS DESIGN - PROFESSIONAL.png" alt="Certified SOLIDWORKS Professionnal" className="CSWP-badge"/>
            
            <div>
              <small>SOLIDWORKS CERTIFICATION</small>
              <h3>Certified SOLIDWORKS Professional</h3>
              <p>
                Professional-level certification demonstrating competence in
                advanced SOLIDWORKS part and assembly modeling.
              </p>
            </div>
            <a className="btn" href="https://www.credly.com/badges/30702b44-cbed-4a9a-823c-6505f6535fa3/public_url">
              View Credential ↗
            </a>
            <code>VERIFIED / CSWP</code>
          </div>
        </section>
        <section id="contact" className="section contact">
          <div className="reveal">
            <p className="eyebrow">CONTACT / 06</p>
            <h2>
              Let’s build something <em>mechanical.</em>
            </h2>
            <p className="muted">
              Open to engineering projects, internships and opportunities
              related to mechanical engineering and aerospace.
            </p>
          </div>
          
          <div className="contactLinks reveal">
            <a href="mailto:christianuspanthera@gmail.com">Contact Me ↗</a>
            <a
              href="https://www.linkedin.com/in/koffi-christian-kouayi-a333972b5"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/TheChristianus"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </section>
      </main>
      <footer>
        Koffi Christian KOUAYI / ENGINEERING PORTFOLIO{" "}
        <span>MECHANICAL × AEROSPACE</span> © 2026
      </footer>
    </>
  );
}
createRoot(document.getElementById("root")).render(<App />);
