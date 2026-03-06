import { useState } from 'react'
import { TeamMember } from '../data/teamData'

interface TeamMemberModalProps {
  member: TeamMember
  onClose: () => void
  language: string
}

const TeamMemberModal = ({ member, onClose, language }: TeamMemberModalProps) => {
  const [showAllDiplomas, setShowAllDiplomas] = useState(false)

  // іshow 6 diploms i drugoe
  const diplomasToShow = showAllDiplomas 
    ? member.diplomas 
    : member.diplomas.slice(0, 6)

  const translations = {
    en: {
      techStack: "Tech Stack",
      projects: "Projects",
      diplomasAwards: "Diplomas & Awards",
      viewCertificate: "View Certificate",
      viewOnGitHub: "View on GitHub",
      showMore: "Show more",
      showLess: "Show less",
      certificates: "certificates",
      // skill categories
      programmingLanguages: "Programming Languages",
      csFundamentals: "CS Fundamentals",
      aiML: "AI & Machine Learning",
      mobileDev: "Mobile Development",
      webDevelopment: "Web Development",
      databases: "Databases",
      devops: "DevOps & Infrastructure",
      dataEngineering: "Data Engineering",
      qa: "QA & Testing",
      gameDev: "Game Development",
      design: "Design & UX",
      management: "Management & Tools",
      softSkills: "Soft Skills",
      languages: "Languages",
      other: "Other"
    },
    uk: {
      techStack: "Технології",
      projects: "Проєкти",
      diplomasAwards: "Дипломи та нагороди",
      viewCertificate: "Переглянути сертифікат",
      viewOnGitHub: "Переглянути на GitHub",
      showMore: "Показати ще",
      showLess: "Показати менше",
      certificates: "сертифікатів",
      aiML: "AI та машинне навчання",
      mobileDev: "Мобільна розробка",
      webDevelopment: "Веб-розробка",
      databases: "Бази даних",
      devops: "DevOps та інфраструктура",
      qa: "QA та тестування",
      programmingLanguages: "Мови програмування",
      csFundamentals: "Основи CS",
      design: "Дизайн та UX",
      dataEngineering: "Data Engineering",
      gameDev: "Розробка ігор",
      management: "Менеджмент та інструменти",
      softSkills: "Soft Skills",
      languages: "Мови",
      other: "Інше"
    },
    es: {
      techStack: "Tecnologías",
      projects: "Proyectos",
      diplomasAwards: "Diplomas y Premios",
      viewCertificate: "Ver Certificado",
      viewOnGitHub: "Ver en GitHub",
      showMore: "Mostrar más",
      showLess: "Mostrar menos",
      certificates: "certificados",
      aiML: "IA y Machine Learning",
      mobileDev: "Desarrollo Móvil",
      webDevelopment: "Desarrollo Web",
      databases: "Bases de Datos",
      devops: "DevOps e Infraestructura",
      qa: "QA y Testing",
      programmingLanguages: "Lenguajes de Programación",
      csFundamentals: "Fundamentos de CS",
      design: "Diseño y UX",
      dataEngineering: "Ingeniería de Datos",
      gameDev: "Desarrollo de Juegos",
      management: "Gestión y Herramientas",
      softSkills: "Habilidades Blandas",
      languages: "Idiomas",
      other: "Otro"
    },
    de: {
      techStack: "Tech Stack",
      projects: "Projekte",
      diplomasAwards: "Diplome und Auszeichnungen",
      viewCertificate: "Zertifikat Anzeigen",
      viewOnGitHub: "Auf GitHub Anzeigen",
      showMore: "Mehr anzeigen",
      showLess: "Weniger anzeigen",
      certificates: "Zertifikate",
      aiML: "KI & Machine Learning",
      mobileDev: "Mobile Entwicklung",
      webDevelopment: "Webentwicklung",
      databases: "Datenbanken",
      devops: "DevOps & Infrastruktur",
      qa: "QA & Testing",
      programmingLanguages: "Programmiersprachen",
      csFundamentals: "CS Grundlagen",
      design: "Design & UX",
      dataEngineering: "Dateningenieurwesen",
      gameDev: "Spieleentwicklung",
      management: "Management & Tools",
      softSkills: "Soziale Kompetenzen",
      languages: "Sprachen",
      other: "Andere"
    },
    nl: {
      techStack: "Tech Stack",
      projects: "Projecten",
      diplomasAwards: "Diploma's en Prijzen",
      viewCertificate: "Certificaat Bekijken",
      viewOnGitHub: "Bekijk op GitHub",
      showMore: "Meer tonen",
      showLess: "Minder tonen",
      certificates: "certificaten",
      aiML: "AI & Machine Learning",
      mobileDev: "Mobiele Ontwikkeling",
      webDevelopment: "Webontwikkeling",
      databases: "Databases",
      devops: "DevOps & Infrastructuur",
      qa: "QA & Testing",
      programmingLanguages: "Programmeertalen",
      csFundamentals: "CS Fundamenten",
      design: "Design & UX",
      dataEngineering: "Data Engineering",
      gameDev: "Game Ontwikkeling",
      management: "Beheer & Tools",
      softSkills: "Zachte Vaardigheden",
      languages: "Talen",
      other: "Overig"
    }
  }

  const currentTranslations = (translations as any)[language] || translations.en

  const categorizeSkills = (skills: string[]) => {
    const t = currentTranslations
    const categories: Record<string, string[]> = {
      [t.programmingLanguages]: [],
      [t.csFundamentals]: [],
      [t.aiML]: [],
      [t.webDevelopment]: [],
      [t.mobileDev]: [],
      [t.databases]: [],
      [t.devops]: [],
      [t.dataEngineering]: [],
      [t.qa]: [],
      [t.gameDev]: [],
      [t.design]: [],
      [t.management]: [],
      [t.softSkills]: [],
      [t.languages]: [],
      [t.other]: []
    }

    skills.forEach((skill: string) => {
      const s = skill.toLowerCase()

      // 1. Programming Languages — конкретні мови
      if (
        s === 'java' || (s.includes('java') && !s.includes('javascript')) ||
        s.includes('c++') || s.includes('c#') || s.includes('с#') ||
        s === 'c' || s.includes('c (programming') ||
        s.includes('assembly') || s.includes('rust') || s.includes('php') ||
        s.includes('ruby') || s.includes('scala') || s.includes('kotlin') ||
        s.includes('swift') || s.includes('typescript') || s.includes('javascript') && !s.includes('react') && !s.includes('next') ||
        s === 'python' || s.startsWith('python (')
      ) {
        categories[t.programmingLanguages].push(skill)

      // 2. CS Fundamentals — теорія, архітектура, алгоритми
      } else if (
        s.includes('clean architecture') || s.includes('architecture') ||
        s.includes('object-oriented') || s.includes('oop') ||
        s.includes('analysis of algorithm') || s.includes('algorithmic') ||
        s.includes('discrete math') || s.includes('data structure') ||
        s.includes('design pattern') || s.includes('solid') ||
        s.includes('refactor') || s.includes('programming') ||
        s.includes('mathematical thinking') || s.includes('math')
      ) {
        categories[t.csFundamentals].push(skill)

      // 3. AI & Machine Learning
      } else if (
        s.includes('langchain') || s.includes('langgraph') ||
        s.includes('llamaindex') || s.includes('machine learning') || s.includes('llm') ||
        s.includes('rag') || s.includes('openrouter') || s.includes('chromadb') ||
        s.includes('tavily') || s.includes('streamlit') || s.includes('fastapi') ||
        s.includes('aiogram') || s.includes('tensorflow') || s.includes('opencv') ||
        s.includes('pydantic') || s.includes('asyncio') || s.includes('bs4') ||
        s.includes('beautifulsoup') || s.includes('ai integration') ||
        s.includes('openai') || s.includes('hugging face') || s.includes('transformers') ||
        s.includes('selenium') && s.includes('python') ||
        s.includes('analytical skills')
      ) {
        categories[t.aiML].push(skill)

      // 4. Mobile Development (перед Web щоб React Native не потрапив у Web)
      } else if (
        s.includes('react native') || s.includes('flutter') || s.includes('jetpack') ||
        s.includes('android') || s.includes('ios') || s.includes('xamarin') ||
        s.includes('expo') || s.includes('cross-platform') || s.includes('firebase') ||
        s.includes('backend integration') || s.includes('ui/ux implementation')
      ) {
        categories[t.mobileDev].push(skill)

      // 5. Web Development
      } else if (
        s.includes('react') || s.includes('next.js') || s.includes('vue') ||
        s.includes('angular') || s.includes('html') || s.includes('css') ||
        s.includes('javascript') || s.includes('tailwind') ||
        s.includes('redux') || s.includes('graphql') || s.includes('webpack') ||
        s.includes('vite') || s.includes('responsive design') ||
        s.includes('unit testing') || s.includes('jest') ||
        s.includes('web development') || s.includes('web')
      ) {
        categories[t.webDevelopment].push(skill)

      // 6. Databases
      } else if (
        s === 'sql' || s.startsWith('sql (') || s.includes('postgresql') ||
        s.includes('sqlite') || s.includes('redis') || s.includes('bigquery') ||
        s.includes('mongodb') || s.includes('mysql') || s.includes('database')
      ) {
        categories[t.databases].push(skill)

      // 7. DevOps & Infrastructure
      } else if (
        s.includes('docker') || s.includes('linux') || s.includes('ci/cd') ||
        s.includes('bash') || s.includes('kubernetes') || s.includes('cloud') ||
        s.includes('aws') || s.includes('git') || s.includes('arduino') ||
        s.includes('airflow') || s.includes('nginx') || s.includes('terraform') ||
        s.includes('monitoring') || s.includes('devops') ||
        s.includes('computer networking')
      ) {
        categories[t.devops].push(skill)

      // 8. Data Engineering
      } else if (
        s.includes('etl') || s.includes('data model') || s.includes('data clean') ||
        s.includes('data engineer') || s.includes('analytics') ||
        s.includes('data warehousing') || s.includes('pipeline') ||
        s.includes('big data') || s.includes('tableau') || s.includes('power bi')
      ) {
        categories[t.dataEngineering].push(skill)

      // 9. QA & Testing
      } else if (
        s.includes('testing') || s.includes('test case') || s.includes('bug tracking') ||
        s.includes('cypress') || s.includes('regression') || s.includes('api testing') ||
        s.includes('quality assurance') || s.includes('qa') || s.includes('e2e') ||
        s.includes('selenium') || s.includes('performance testing')
      ) {
        categories[t.qa].push(skill)

      // 10. Game Development
      } else if (
        s.includes('unity') || s.includes('game') || s.includes('unreal') ||
        s.includes('godot') || s.includes('level design') || s.includes('blender')
      ) {
        categories[t.gameDev].push(skill)

      // 11. Design & UX
      } else if (
        s.includes('figma') || s.includes('adobe xd') || s.includes('sketch') ||
        s.includes('wireframing') || s.includes('prototyping') ||
        s.includes('user research') || s.includes('user testing') ||
        s.includes('interaction design') || s.includes('design system') ||
        s.includes('ui/ux') || s.includes('illustration') ||
        s.includes('canva') || s.includes('storyboarding') ||
        s.includes('player experience')
      ) {
        categories[t.design].push(skill)

      // 12. Management & Tools
      } else if (
        s.includes('jira') || s.includes('trello') || s.includes('n8n') ||
        s.includes('agile') || s.includes('scrum') || s.includes('roadmap') ||
        s.includes('project management') || s.includes('stakeholder') ||
        s.includes('requirements') || s.includes('prioritiz') ||
        s.includes('team coordination') || s.includes('team leadership') ||
        s.includes('planning')
      ) {
        categories[t.management].push(skill)

      // 13. Soft Skills
      } else if (
        s.includes('teamwork') || s.includes('communication') ||
        s.includes('problem solving') || s.includes('critical thinking') ||
        s.includes('collaboration') || s.includes('fast learning') ||
        s.includes('analytical')
      ) {
        categories[t.softSkills].push(skill)

      // 14. Human Languages
      } else if (
        s.includes('english') || s.includes('ukrainian') || s.includes('russian') ||
        s.includes('spanish') || s.includes('polish') || s.includes('german') ||
        s.includes('french') || s.includes('chinese') || s.includes('japanese') ||
        s.includes('arabic') || s.includes('portuguese') || s.includes('dutch') ||
        /\([a-z][1-9]\)/.test(s) || s.includes('native') || s.includes('(native)')
      ) {
        categories[t.languages].push(skill)

      // 15. Other
      } else {
        categories[t.other].push(skill)
      }
    })

    return Object.entries(categories)
      .filter(([_, skills]) => skills.length > 0)
      .reduce((acc, [cat, skills]) => ({ ...acc, [cat]: skills }), {} as Record<string, string[]>)
  }

  const categorizedSkills = categorizeSkills(member.skills)

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
            <div className="w-32 h-32 gradient-bg rounded-full flex items-center justify-center overflow-hidden">
              {member.avatar ? (
                <img 
                  src={member.avatar} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const initials = document.createElement('div');
                    initials.className = 'w-full h-full flex items-center justify-center text-4xl font-bold text-white';
                    initials.textContent = member.name.split(' ').map(n => n[0]).join('');
                    target.parentNode?.appendChild(initials);
                  }}
                />
              ) : (
                <div className="text-4xl font-bold text-white">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
              )}
            </div>
            
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-2">{member.name}</h2>
              <p className="text-brandCyan text-xl font-medium mb-4">{member.role}</p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                {member.socials.github && (
                  <a
                    href={member.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/80 hover:text-brandCyan transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                    GitHub
                  </a>
                )}
                
                {member.socials.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/80 hover:text-brandCyan transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                )}
                
                {member.socials.instagram && (
                  <a
                    href={member.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/80 hover:text-brandCyan transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                    </svg>
                    Instagram
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 gradient-text">
              {currentTranslations.techStack}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(categorizedSkills).map(([category, skills]) => (
                <div key={category} className="custom-card p-6">
                  <h4 className="font-bold text-brandCyan mb-4 text-lg">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill: string, index: number) => (
                      <span
                        key={index}
                        className="skill-tag"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          {member.projects.length > 0 && (
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                {currentTranslations.projects}
              </h3>
              
              <div className="space-y-4">
                {member.projects.map((project, index) => (
                  <div key={index} className="custom-card p-6">
                    <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                    <p className="text-white/70 mb-4">{project.description}</p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-brandCyan hover:text-cyan-400 transition-colors"
                    >
                      {currentTranslations.viewOnGitHub}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Diplomas & Awards */}
          {member.diplomas.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                {currentTranslations.diplomasAwards}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {diplomasToShow.map((diploma, index) => (
                  <a
                    key={index}
                    href={diploma.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="custom-card p-4 hover-lift"
                  >
                    <h4 className="font-bold mb-2 line-clamp-2">{diploma.title}</h4>
                    <span className="text-brandCyan text-sm">
                      {currentTranslations.viewCertificate} →
                    </span>
                  </a>
                ))}
              </div>
              
              {/* button(show sserificates nad awards) */}
              {member.diplomas.length > 6 && (
                <div className="mt-6 text-center">
                  <button
                    onClick={() => setShowAllDiplomas(!showAllDiplomas)}
                    className="px-6 py-3 bg-brandCyan hover:bg-cyan-600 text-white rounded-lg transition-colors font-medium"
                  >
                    {showAllDiplomas 
                      ? `${currentTranslations.showLess}`
                      : `${currentTranslations.showMore} (${member.diplomas.length - 6}+ ${currentTranslations.certificates})`
                    }
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TeamMemberModal