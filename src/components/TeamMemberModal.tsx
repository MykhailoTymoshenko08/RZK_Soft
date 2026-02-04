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
      aiPython: "AI/Python",
      webDevelopment: "Web Development",
      programmingLanguages: "Programming Languages",
      toolsPlatforms: "Tools & Platforms",
      other: "Other",
      showMore: "Show more",
      showLess: "Show less",
      certificates: "certificates"
    },
    uk: {
      techStack: "Технології",
      projects: "Проєкти",
      diplomasAwards: "Дипломи та нагороди",
      viewCertificate: "Переглянути сертифікат",
      viewOnGitHub: "Переглянути на GitHub",
      aiPython: "AI/Python",
      webDevelopment: "Веб-розробка",
      programmingLanguages: "Мови програмування",
      toolsPlatforms: "Інструменти та платформи",
      other: "Інше",
      showMore: "Показати ще",
      showLess: "Показати менше",
      certificates: "сертифікатів"
    },
    es: {
      techStack: "Tecnologías",
      projects: "Proyectos",
      diplomasAwards: "Diplomas y Premios",
      viewCertificate: "Ver Certificado",
      viewOnGitHub: "Ver en GitHub",
      aiPython: "AI/Python",
      webDevelopment: "Desarrollo Web",
      programmingLanguages: "Lenguajes de Programación",
      toolsPlatforms: "Herramientas y Plataformas",
      other: "Otro",
      showMore: "Mostrar más",
      showLess: "Mostrar menos",
      certificates: "certificados"
    },
    de: {
      techStack: "Tech Stack",
      projects: "Projekte",
      diplomasAwards: "Diplome und Auszeichnungen",
      viewCertificate: "Zertifikat Anzeigen",
      viewOnGitHub: "Auf GitHub Anzeigen",
      aiPython: "AI/Python",
      webDevelopment: "Webentwicklung",
      programmingLanguages: "Programmiersprachen",
      toolsPlatforms: "Tools und Plattformen",
      other: "Andere",
      showMore: "Mehr anzeigen",
      showLess: "Weniger anzeigen",
      certificates: "Zertifikate"
    },
    nl: {
      techStack: "Tech Stack",
      projects: "Projecten",
      diplomasAwards: "Diploma's en Prijzen",
      viewCertificate: "Certificaat Bekijken",
      viewOnGitHub: "Bekijk op GitHub",
      aiPython: "AI/Python",
      webDevelopment: "Webontwikkeling",
      programmingLanguages: "Programmeertalen",
      toolsPlatforms: "Tools en Platforms",
      other: "Overig",
      showMore: "Meer tonen",
      showLess: "Minder tonen",
      certificates: "certificaten"
    }
  }

  const currentTranslations = (translations as any)[language] || translations.en

  const categorizeSkills = (skills: string[]) => {
    const categories: Record<string, string[]> = {
      [currentTranslations.aiPython]: [],
      [currentTranslations.webDevelopment]: [],
      [currentTranslations.programmingLanguages]: [],
      [currentTranslations.toolsPlatforms]: [],
      [currentTranslations.other]: []
    }

    skills.forEach((skill: string) => {
      const lowerSkill = skill.toLowerCase()
      if (lowerSkill.includes('python') || lowerSkill.includes('analytical skills') || lowerSkill.includes('llm') || lowerSkill.includes('machine learning')) {
        categories[currentTranslations.aiPython].push(skill)
      } else if (lowerSkill.includes('react') || lowerSkill.includes('javascript') || lowerSkill.includes('typescript') || lowerSkill.includes('next') || lowerSkill.includes('tailwind css') || lowerSkill.includes('graphql') || lowerSkill.includes('redux') || lowerSkill.includes('html') || lowerSkill.includes('css')  || lowerSkill.includes('web')) {
        categories[currentTranslations.webDevelopment].push(skill)
      } else if (lowerSkill.includes('java') || lowerSkill.includes('c++') || lowerSkill.includes('c (programming language)') || lowerSkill.includes('assembly') || lowerSkill.includes('typescript') || lowerSkill.includes('sql')) {
        categories[currentTranslations.programmingLanguages].push(skill)
      } else if (lowerSkill.includes('docker') || lowerSkill.includes('git') || lowerSkill.includes('linux') || lowerSkill.includes('postgresql') || lowerSkill.includes('redis') || lowerSkill.includes('openrouter api') || lowerSkill.includes('cloud')) {
        categories[currentTranslations.toolsPlatforms].push(skill)
      } else {
        categories[currentTranslations.other].push(skill)
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