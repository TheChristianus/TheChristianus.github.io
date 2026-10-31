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
    "\images\\Capture d'écran 2026-09-29 230144.png"
  ],
  
];
const experiences = [
  [
    "EXP-001",
    "Seeking for first experience",
    "INTERNSHIP",
    " ",
    " ",
    [" "],
    " "
  ],
  
];
const skills = [
  ["SOLIDWORKS", "CSWP certified"],
  ["CATIA V5", "3D mechanical design"],
  ["GSD", "Surface modeling"],
  ["Mechanical Design", "Parametric modeling"],
  ["Aerospace", "Engineering fundamentals"],
  ["Engineering Analysis", "Technical reasoning"],
  ["Simulia/Abaqus", "Finite elements Analysis"],
  ["3DEXPERIENCE", "Colaborative Work"],
  ["3DEXPERIENCE CATIA", "3D mechanical design"]
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
            Koffi Christian KOUAYI <span>.</span>
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
            <span>AIRCRAFT / A-01 - PLAN VIEW</span>
            <div className="aircraft-container">
              <svg className="aircraft" viewBox="0 0 280 120" role="img" aria-label="Top-view technical illustration of a twin-engine swept-wing aircraft">
                <g className="aircraft-jet">
                  <path className="wing wing-main" d="M174 52 L105 8 L88 7 L113 53 Z M174 68 L105 112 L88 113 L113 67 Z" />
                  <path className="wing wing-tail" d="M72 54 L40 35 L31 37 L46 58 Z M72 66 L40 85 L31 83 L46 62 Z" />
                  <path className="engine" d="M151 25 C143 22 133 25 123 31 L138 40 C146 39 151 34 154 28 Z M151 95 C143 98 133 95 123 89 L138 80 C146 81 151 86 154 92 Z" />
                  <path className="fuselage" d="M274 60 C266 56 255 54 239 53 L84 49 L55 43 L43 46 L57 56 L27 58 L20 60 L27 62 L57 64 L43 74 L55 77 L84 71 L239 67 C255 66 266 64 274 60 Z" />
                  <path className="detail cockpit" d="M257 57 L266 60 L257 63" />
                  <path className="detail centerline" d="M51 60 L255 60" />
                  <path className="detail panel-line" d="M107 48 L122 59 M107 72 L122 61 M145 49 L156 59 M145 71 L156 61" />
                  <path className="engine-core" d="M148 29 L154 28 L151 34 Z M148 91 L154 92 L151 86 Z" />
                </g>
              </svg>
            </div>
            <div className="runway" />
            <div className="flight-data data-1">TWIN TURBOFAN</div>
            <div className="flight-data data-2">SWEPT WING</div>
            <div className="flight-data data-3">TOP VIEW / NTS</div>
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
                <span>CAD</span>SOLIDWORKS / CATIA V5 / 3DEXPERIENCE
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
            <a href="/Resume.pdf" download="Koffi-Christian-KOUAYI-Resume.pdf" className="btn btn-outline">
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
            <img src="/images/certified-solidworks-design-associate.png" alt="Certified SOLIDWORKS Associate" className="CSWP-badge" />
            <div>
              <small>SOLIDWORKS CERTIFICATION</small>
              <h3>Certified SOLIDWORKS Associate</h3>
              <p>
                This certification validates my ability to build parts using features such as patterns, 
                fillets, and chamfers; create assemblies with standard mates; analyze designs using dimensions, 
                mass properties; and apply materials to represent real-world design intent, establishing you as a 
                capable entry-level SOLIDWORKS user.
              </p>
            </div>
            <a className="btn" href="https://www.credly.com/badges/878629b7-b099-4afa-93c6-eb412e257e9f/public_url">
              View Credential ↗
            </a>
            <code>VERIFIED / CSWA</code>
          </div>
          <div className="cert reveal">
            <img src="\images\SOLIDWORKS DESIGN - PROFESSIONAL.png" alt="Certified SOLIDWORKS Professional" className="CSWP-badge" />
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
          <div className="cert reveal">
            <img src="/images/certified-3dexperience-3dswymer-associate.png" alt="Certified 3DEXPERIENCE 3DSwymer - Associate" className="CSWP-badge" />
            
            <div>
              <small>3DEXPERIENCE CERTIFICATION</small>
              <h3>Certified 3DEXPERIENCE 3DSwymer - Associate</h3>
              <p>
                Associate-level certification demonstrating foundamental knowledge of
                the 3DEXPERIENCE platform and collaborative product development workflows.
              </p>
            </div>
            <a className="btn" href="https://www.credly.com/badges/247b7cd7-6126-4fa3-aff0-b62f05f7dc32/public_url">
              View Credential ↗
            </a>
            <code>VERIFIED / 3DSwymer</code>
          </div>
          <div className="cert reveal">
            <img src="/images/certified-catia-mechanical-designer-associate.png" alt="Certified CATIA Mechanical Designer - Associate" className="CSWP-badge" />
            
            <div>
              <small>3DEXPERIENCE/CATIA CERTIFICATION</small>
              <h3>Certified CATIA Mechanical Designer - Associate</h3>
              <p>
                As a Certified CATIA Mechanical Designer Associate, I am able to collaborate 
                and navigate using the 3DEXPERIENCE platform, model a part, design an assembly, 
                analyze a part and an assembly, create drafting.
              </p>
            </div>
            <a className="btn" href="https://www.credly.com/badges/f4d559da-1bec-4bb8-b515-e64246ca1953/public_url">
              View Credential ↗
            </a>
            <code>VERIFIED / CATIA Associate</code>
          </div>
          <div className="cert reveal">
            <img src="/images/certified-catia-sheetmetal-designer-associate.png" alt="Certified CATIA Sheet Metal Designer - Associate" className="CSWP-badge" />
            
            <div>
              <small>3DEXPERIENCE/CATIA CERTIFICATION</small>
              <h3>Certified CATIA Sheet Metal Designer - Associate</h3>
              <p>
                As a certified CATIA SheetMetal Designer Associate, 
                I am able to create conceptual design, design bent parts, 
                design sheet metal, create drafting.
              </p>
            </div>
            <a className="btn" href="https://www.credly.com/badges/d3541fbb-8816-47cb-9ed2-9abc9fb780ba/public_url">
              View Credential ↗
            </a>
            <code>VERIFIED / CATIA Sheet Metal Designer - Associate</code>
          </div>
          <div className="cert reveal">
            <img src="/images/certified-catia-3d-tolerancing-and-annotation-desig.png" alt="Certified CATIA 3D Tolerancing and Annotation Designer - Associate" className="CSWP-badge" />
            <div>
              <small>3DEXPERIENCE/CATIA CERTIFICATION</small>
              <h3>Certified CATIA 3D Tolerancing and Annotation Designer - Associate</h3>
              <p>
                Associate-level certification focused on defining and communicating
                3D tolerances and annotations for CATIA designs.
              </p>
            </div>
            <a className="btn" href="https://www.credly.com/badges/8c0683bc-2305-4e1f-8bc9-9c0c53335ddd/public_url">
              View Credential ↗
            </a>
            <code>CATIA 3D TOLERANCING / ASSOCIATE</code>
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
        Koffi Christian KOUAYI / ENGINEERING PORTFOLIO {" "}
        <span>MECHANICAL × AEROSPACE</span> © 2026
      </footer>
    </>
  );
}
createRoot(document.getElementById("root")).render(<App />);
