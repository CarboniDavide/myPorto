import './App.css'

const projects = [
  {
    title: 'Commerce Pulse',
    description:
      'Dashboard e-commerce con analytics in tempo reale, filtri dinamici e export CSV.',
    stack: ['React', 'TypeScript', 'Recharts', 'Node API'],
    link: '#',
  },
  {
    title: 'Studio Booking',
    description:
      'Piattaforma di prenotazione per professionisti con calendario, pagamenti e reminder automatici.',
    stack: ['React', 'Supabase', 'Stripe', 'Tailwind'],
    link: '#',
  },
  {
    title: 'Travel Notes',
    description:
      'Web app mobile-first per creare itinerari, salvare luoghi e condividere mappe personalizzate.',
    stack: ['React', 'TypeScript', 'Mapbox', 'PWA'],
    link: '#',
  },
]

const skills = [
  'React + TypeScript',
  'UI Engineering',
  'Design Systems',
  'REST API Integration',
  'Performance Web',
  'Testing (Vitest)',
]

function App() {
  return (
    <div className="site-shell">
      <header className="hero" id="home">
        <p className="eyebrow">Frontend Developer</p>
        <h1>
          Creo prodotti web veloci,
          <span> moderni e memorabili.</span>
        </h1>
        <p className="lead">
          Ciao, sono Marco. Sviluppo interfacce React + TypeScript con attenzione
          al dettaglio, performance e conversione.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            Vedi progetti
          </a>
          <a href="#contact" className="btn btn-ghost">
            Contattami
          </a>
        </div>
      </header>

      <section className="panel" id="about">
        <h2>Chi sono</h2>
        <p>
          Negli ultimi anni ho lavorato su SaaS, e-commerce e tool interni,
          traducendo esigenze di business in esperienze chiare e scalabili.
        </p>
      </section>

      <section className="panel" id="projects">
        <div className="section-title">
          <h2>Progetti selezionati</h2>
          <p>Una selezione di lavori recenti orientati a risultati concreti.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul>
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a href={project.link}>Apri case study</a>
            </article>
          ))}
        </div>
      </section>

      <section className="panel split" id="skills">
        <div>
          <h2>Competenze</h2>
          <p>
            Dalla prototipazione al rilascio, seguo il ciclo completo del
            prodotto con approccio data-driven.
          </p>
        </div>
        <ul className="skill-list">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="panel contact" id="contact">
        <h2>Parliamo del tuo prossimo progetto</h2>
        <p>
          Se vuoi migliorare il tuo prodotto digitale o lanciare qualcosa di
          nuovo, scrivimi e fissiamo una call.
        </p>
        <a className="btn btn-primary" href="mailto:ciao@tuodominio.it">
          ciao@tuodominio.it
        </a>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Marco Rossi</p>
        <div>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
