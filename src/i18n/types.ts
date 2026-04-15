export const SUPPORTED_LANGUAGES = ['en', 'it', 'fr'] as const

export type Language = (typeof SUPPORTED_LANGUAGES)[number]

export type ProjectTranslation = {
  title: string
  description: string
  stack: string[]
  link: string
}

export type Translation = {
  languageLabel: string
  languageNames: Record<Language, string>
  eyebrow: string
  heroTitleStart: string
  heroTitleAccent: string
  lead: string
  ctaProjects: string
  ctaContact: string
  aboutTitle: string
  aboutText: string
  projectsTitle: string
  projectsSubtitle: string
  projectCta: string
  skillsTitle: string
  skillsText: string
  skills: string[]
  contactTitle: string
  contactText: string
  footerLinks: {
    github: string
    linkedin: string
  }
  projects: ProjectTranslation[]
}
