// src/components/Desktop.jsx
import { useEffect, useMemo, useState } from "react";
import Window from "./Window.jsx";
import Memoji from "../assets/Memoji.PNG";

/**
 * CV:
 * 1) Rename PDF to: Retaj-Alsakhri-CV.pdf
 * 2) Put it in: public/Retaj-Alsakhri-CV.pdf
 */
<a
  href={import.meta.env.BASE_URL + "Retaj-Alsakhri-CV.pdf"}
  target="_blank"
  rel="noopener noreferrer"
>
  CV
</a>;

const PROFILE = {
  name: "Retaj Alsakhri",
  headline: "Hello, I’m Retaj 👩‍💻",
  role: "Software Developer",
  email: "retajalsakhri90@gmail.com",
  github: "https://github.com/rexie90",
  linkedin: "https://www.linkedin.com/in/retaj-alsakhri-5066ab30a/",
};

const ABOUT = {
  title: "About Me",
  text: `I’m a Computer Science student at Umm Al-Qura University with a focus on building clean, modern UI and strong system logic.
I enjoy software development, databases, and cybersecurity fundamentals — and I love turning course projects into real portfolio pieces.`,
  blocks: [
    ["Strengths", "UI structure • Problem solving • Documentation"],
    ["Tools", "VS Code • Git/GitHub • Figma (basic)"],
    ["Focus", "Web apps • Databases • Security awareness"],
    ["Goal", "Internship-ready portfolio with real-world projects"],
  ],
};

const PROJECTS = [
  {
    title: "Keylogger Project",
    subtitle: "Cybersecurity & Java",
    desc: "A simple educational keylogger to demonstrate privacy risks and basic protection methods (ethical awareness only).",
    tags: ["Java", "JNativeHook", "Cybersecurity"],
    langs: ["Java"],
  },
  {
    title: "DevPath Educational Web Platform",
    subtitle: "Engineering Software Products",
    desc: "An interactive learning platform that guides students through tech paths with structured content and clean UI.",
    tags: ["HTML", "CSS", "JavaScript"],
    langs: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Hospital Management System",
    subtitle: "OOP & Database",
    desc: "Manages patient records and appointments to reduce manual errors and improve accessibility.",
    tags: ["Java", "MySQL", "OOP"],
    langs: ["Java", "MySQL"],
  },
  {
    title: "Multicore Programming Tasks",
    subtitle: "Operating Systems",
    desc: "Parallel processing tasks using multithreading concepts to improve performance.",
    tags: ["Multithreading", "OS"],
    langs: ["Java", "C"],
  },
];

/* Apple-ish dock icons (SVG) */
function IconHome() {
  return (
    <svg className="ico" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconGrid() {
  return (
    <svg className="ico" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 4h7v7H4V4Zm9 0h7v7h-7V4ZM4 13h7v7H4v-7Zm9 0h7v7h-7v-7Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconLink() {
  return (
    <svg className="ico" viewBox="0 0 24 24" fill="none">
      <path
        d="M10.5 13.5 13.5 10.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M8.5 15.5 7 17a4 4 0 0 1-5.7-5.6l1.7-1.7A4 4 0 0 1 8.6 9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M15.4 15a4 4 0 0 0 5.6 0l1.7-1.7A4 4 0 0 0 17 7.6l-1.5 1.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

const APPS = [
  { id: "home", label: "Home", Icon: IconHome },
  { id: "about_projects", label: "About & Projects", Icon: IconGrid },
  { id: "connect_cv", label: "Connect & CV", Icon: IconLink },
];

/* Connect icons */
function IconMail() {
  return (
    <svg className="linkCard__icon" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M6 8l6 4 6-4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconGitHub() {
  return (
    <svg className="linkCard__icon" viewBox="0 0 24 24" fill="none">
      <path
        d="M9 19c-3 1-3-1-4-1m8 2v-3.5c0-1 .1-1.5-.5-2 1.5-.2 3-.8 3-3.5 0-.8-.3-1.5-.8-2.1.1-.2.4-1-.1-2.1 0 0-.7-.2-2.2.8-.6-.2-1.3-.3-2-.3s-1.4.1-2 .3c-1.5-1-2.2-.8-2.2-.8-.5 1.1-.2 1.9-.1 2.1-.5.6-.8 1.3-.8 2.1 0 2.7 1.5 3.3 3 3.5-.4.3-.5.8-.5 1.6V20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* LinkedIn icon (clean + correct) */
function IconLinkedIn() {
  return (
    <svg className="linkCard__icon" viewBox="0 0 24 24" fill="none">
      <path
        d="M6.4 9.6V18"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="M6.4 6.6h.01"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path
        d="M10.2 18v-4.6c0-2.2 3.5-2.4 3.5 0V18"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="M13.7 13.4c.2-2.4 3.9-2.5 4.1.1V18"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Desktop() {
  const autoTheme = useMemo(() => {
    const hour = new Date().getHours();
    return hour >= 18 || hour < 6 ? "night" : "day";
  }, []);

  const [theme, setTheme] = useState(autoTheme);
  const [open, setOpen] = useState("home");
  const [toast, setToast] = useState("");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  function showToast(message) {
    setToast(message);
    window.clearTimeout(window.__toastTimer);
    window.__toastTimer = window.setTimeout(() => setToast(""), 2400);
  }

  function openCV() {
    window.open(CV_PATH, "_blank", "noopener,noreferrer");
  }

  return (
    <main className="os">
      <div className="bg" aria-hidden="true" />

      <header className="topbar">
        <div className="topbar__left">RETAJ.OS</div>

        {/* فقط Cloud/Night — بدون Sound نهائيًا */}
        <div className="topbar__right">
          <button
            className={`chip ${theme === "night" ? "is-on" : ""}`}
            onClick={() => setTheme((t) => (t === "day" ? "night" : "day"))}
            aria-label="Toggle theme"
          >
            {theme === "day" ? "☁️ Cloud Mode" : "🌙 Night Mode"}
          </button>
        </div>
      </header>

      <section className="stage">
        {open === "home" && (
          <Window title="Home" onClose={() => setOpen("")}>
            <div className="hero">
              <div className="hero__text">
                <h1>{PROFILE.headline}</h1>
                <p className="muted">
                  {PROFILE.role} • Computer Science • Umm Al-Qura University
                </p>

                <p className="muted">
                  I build clean interfaces, structured systems, and
                  portfolio-ready projects from real coursework. I’m especially
                  interested in software development, databases, and security
                  fundamentals.
                </p>

                <div className="chips">
                  {[
                    "Java",
                    "JavaScript",
                    "MySQL",
                    "Cybersecurity",
                    "Networks",
                    "Multithreading",
                  ].map((x) => (
                    <span className="tag" key={x}>
                      {x}
                    </span>
                  ))}
                </div>

                <div className="actions">
                  <button
                    className="btn primary"
                    onClick={() => setOpen("about_projects")}
                  >
                    About & Projects
                  </button>

                  <button className="btn" onClick={() => setOpen("connect_cv")}>
                    Connect & CV
                  </button>
                </div>
              </div>

              <div className="hero__card" aria-label="Avatar card">
                <div className="avatar">
                  <img
                    className="avatar__img"
                    src={Memoji}
                    alt="Retaj Memoji"
                  />
                  {/* بديل عن Memoji (animated) */}
                  <div className="avatar__caption">RETAJ.OS avatar</div>
                </div>
              </div>
            </div>
          </Window>
        )}

        {open === "about_projects" && (
          <Window title="About & Projects" onClose={() => setOpen("")}>
            <div style={{ marginBottom: 16 }}>
              <h2>{ABOUT.title}</h2>
              <p className="muted" style={{ lineHeight: 1.7 }}>
                {ABOUT.text}
              </p>

              <div className="grid" style={{ marginTop: 12 }}>
                {ABOUT.blocks.map(([k, v]) => (
                  <div className="card" key={k}>
                    <h3>{k}</h3>
                    <p className="muted">{v}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: 18 }}>
              <h2>Projects</h2>
              <p className="muted">
                Selected work with languages used per project.
              </p>

              <div className="grid" style={{ marginTop: 12 }}>
                {PROJECTS.map((p) => (
                  <article className="card" key={p.title}>
                    <div className="card__top">
                      <div>
                        <h3>{p.title}</h3>
                        <p className="muted small">{p.subtitle}</p>
                      </div>
                      <span className="badge">RETAJ.OS</span>
                    </div>

                    <p className="desc">{p.desc}</p>

                    <div className="chips">
                      {p.tags.map((t) => (
                        <span className="tag" key={t}>
                          {t}
                        </span>
                      ))}
                    </div>

                    <p className="muted small" style={{ marginTop: 6 }}>
                      Languages: {p.langs.join(" • ")}
                    </p>

                    <div className="actions" style={{ marginTop: 12 }}>
                      <button
                        className="btn primary"
                        onClick={() =>
                          showToast(
                            "Coming soon — I’m preparing it for publication.",
                          )
                        }
                      >
                        GitHub
                      </button>
                      <button
                        className="btn"
                        onClick={() =>
                          showToast(
                            "Details coming soon — polishing the write-up.",
                          )
                        }
                      >
                        Details
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </Window>
        )}

        {open === "connect_cv" && (
          <Window title="Connect" onClose={() => setOpen("")}>
            <div className="connect">
              <div className="connect__panel">
                <h2>Connect</h2>
                <p className="muted">
                  Links are hidden (clean look). Tap an icon card to open.
                </p>

                <div className="connect__grid">
                  {/* Email */}
                  <a
                    className="linkCard"
                    href={`mailto:${PROFILE.email}`}
                    aria-label="Email"
                    title="Email"
                  >
                    <IconMail />
                    <div className="linkCard__k">Email</div>
                  </a>

                  {/* GitHub */}
                  <a
                    className="linkCard"
                    href={PROFILE.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    title="GitHub"
                  >
                    <IconGitHub />
                    <div className="linkCard__k">GitHub</div>
                  </a>

                  {/* LinkedIn */}
                  <a
                    className="linkCard"
                    href={PROFILE.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                  >
                    <IconLinkedIn />
                    <div className="linkCard__k">LinkedIn</div>
                  </a>
                </div>

                <div className="cvPanel">
                  <div>
                    <div className="cvPanel__title">CV</div>

                    {/* شلت سطر التعليمات — فقط اسم الملف */}
                    <div className="muted small">
                      <span className="mono">{CV_FILE}</span>
                    </div>
                  </div>

                  <div className="actions">
                    <button className="btn primary" onClick={openCV}>
                      View CV
                    </button>
                    <a className="btn" href={CV_PATH} download>
                      Download
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Window>
        )}
      </section>

      <nav className="dock" aria-label="Dock">
        {APPS.map((a) => (
          <button
            key={a.id}
            className={`dock__item ${open === a.id ? "is-active" : ""}`}
            onClick={() => setOpen(a.id)}
            title={a.label}
            aria-label={a.label}
            type="button"
          >
            <span className="dock__icon" aria-hidden="true">
              <a.Icon />
            </span>
            <span className="dock__dot" aria-hidden="true" />
          </button>
        ))}
      </nav>

      {toast && <div className="toast">{toast}</div>}
    </main>
  );
}
