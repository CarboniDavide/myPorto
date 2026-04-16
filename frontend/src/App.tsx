import { useEffect, useState } from 'react'
import './App.css'
import {
  DEFAULT_LANGUAGE,
  STORAGE_KEY,
  translations,
} from './i18n/translations'
import { SUPPORTED_LANGUAGES, type Language } from './i18n/types'

function App() {
  const [language, setLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Language | null
    if (stored && SUPPORTED_LANGUAGES.includes(stored)) {
      return stored
    }
    return DEFAULT_LANGUAGE
  })

  useEffect(() => {
    document.documentElement.lang = language
    localStorage.setItem(STORAGE_KEY, language)
  }, [language])

  const t = translations[language]

  return (
    <div className="site-shell">
      <header className="hero" id="home">
        <div className="hero-topbar">
          <p className="eyebrow">{t.eyebrow}</p>
          <div className="language-switcher" role="group" aria-label={t.languageLabel}>
            {SUPPORTED_LANGUAGES.map((lang) => (
              <button
                key={lang}
                type="button"
                className={lang === language ? 'lang-btn active' : 'lang-btn'}
                onClick={() => setLanguage(lang)}
                aria-pressed={lang === language}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        <h1>
          {t.heroTitleStart}
          <span>{t.heroTitleAccent}</span>
        </h1>
        <p className="lead">{t.lead}</p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            {t.ctaProjects}
          </a>
          <a href="#contact" className="btn btn-ghost">
            {t.ctaContact}
          </a>
        </div>
      </header>

      <section className="panel" id="about">
        <h2>{t.aboutTitle}</h2>
        <p>{t.aboutText}</p>
      </section>

      <section className="panel" id="projects">
        <div className="section-title">
          <h2>{t.projectsTitle}</h2>
          <p>{t.projectsSubtitle}</p>
        </div>
        <div className="project-grid">
          {t.projects.map((project) => (
            <article key={project.title} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul>
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a href={project.link}>{t.projectCta}</a>
            </article>
          ))}
        </div>
      </section>

      <section className="panel split" id="skills">
        <div>
          <h2>{t.skillsTitle}</h2>
          <p>{t.skillsText}</p>
        </div>
        <ul className="skill-list">
          {t.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="panel contact" id="contact">
        <h2>{t.contactTitle}</h2>
        <p>{t.contactText}</p>
        <a className="btn btn-primary" href="mailto:studio.ing.dci@gmail.com">
          studio.ing.dci@gmail.com
        </a>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Davide Carboni</p>
        <div>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            {t.footerLinks.github}
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            {t.footerLinks.linkedin}
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
