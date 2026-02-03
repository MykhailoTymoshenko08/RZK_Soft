import { useState, useEffect } from 'react'
import { TeamMember, teamData } from '../data/teamData'
import TeamMemberCard from './TeamMemberCard'
import TeamMemberModal from './TeamMemberModal'

const Team = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)
  const [language, setLanguage] = useState('en')
  const [filteredTeam, setFilteredTeam] = useState<TeamMember[]>(teamData)

  useEffect(() => {
    const savedLang = localStorage.getItem('selectedLang')
    if (savedLang) setLanguage(savedLang)
  }, [])

  const translations = {
    en: {
      teamPage: "Meet Our Team",
      teamDescription: "Our talented team of developers, designers, and strategists working together to deliver exceptional results.",
      filterAll: "All",
      filterDevelopers: "Developers",
      filterDesigners: "Designers",
      filterManagement: "Management",
      viewAllTeam: "View Full Team"
    },
    uk: {
      teamPage: "Наша команда",
      teamDescription: "Наша талановита команда розробників, дизайнерів та стратегів, які разом працюють над досягненням виняткових результатів.",
      filterAll: "Всі",
      filterDevelopers: "Розробники",
      filterDesigners: "Дизайнери",
      filterManagement: "Менеджмент",
      viewAllTeam: "Переглянути всю команду"
    },
    es: {
      teamPage: "Conoce a Nuestro Equipo",
      teamDescription: "Nuestro talentoso equipo de desarrolladores, diseñadores y estrategas trabajando juntos para ofrecer resultados excepcionales.",
      filterAll: "Todos",
      filterDevelopers: "Desarrolladores",
      filterDesigners: "Diseñadores",
      filterManagement: "Gestión",
      viewAllTeam: "Ver Todo el Equipo"
    },
    de: {
      teamPage: "Treffen Sie Unser Team",
      teamDescription: "Unser talentiertes Team aus Entwicklern, Designern und Strategen, die zusammenarbeiten, um außergewöhnliche Ergebnisse zu erzielen.",
      filterAll: "Alle",
      filterDevelopers: "Entwickler",
      filterDesigners: "Designer",
      filterManagement: "Management",
      viewAllTeam: "Ganzes Team Anzeigen"
    },
    nl: {
      teamPage: "Ontmoet Ons Team",
      teamDescription: "Ons getalenteerde team van ontwikkelaars, ontwerpers en strategen die samenwerken om uitzonderlijke resultaten te leveren.",
      filterAll: "Alle",
      filterDevelopers: "Ontwikkelaars",
      filterDesigners: "Ontwerpers",
      filterManagement: "Management",
      viewAllTeam: "Volledig Team Bekijken"
    }
  }

  const currentTranslations = (translations as any)[language] || translations.en

  const filterTeam = (role: string) => {
    if (role === 'all') {
      setFilteredTeam(teamData)
    } else if (role === 'developers') {
      setFilteredTeam(teamData.filter(member => 
        member.role.includes('Developer') || 
        member.skills.some(skill => skill.includes('React') || skill.includes('Python') || skill.includes('JavaScript'))
      ))
    } else if (role === 'designers') {
      setFilteredTeam(teamData.filter(member => 
        member.role.includes('Design') || 
        member.skills.some(skill => skill.includes('Figma') || skill.includes('UI/UX'))
      ))
    } else if (role === 'management') {
      setFilteredTeam(teamData.filter(member => 
        member.role.includes('CEO') || 
        member.role.includes('COO') || 
        member.role.includes('Manager')
      ))
    }
  }

  return (
    <section id="team" className="py-16 md:py-24 section-padding scroll-mt-24">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            {currentTranslations.teamPage}
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
            {currentTranslations.teamDescription}
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button 
              onClick={() => filterTeam('all')}
              className="px-6 py-2 bg-brandCyan hover:bg-cyan-600 text-white rounded-full transition duration-300"
            >
              {currentTranslations.filterAll}
            </button>
            <button 
              onClick={() => filterTeam('developers')}
              className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition duration-300"
            >
              {currentTranslations.filterDevelopers}
            </button>
            <button 
              onClick={() => filterTeam('designers')}
              className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition duration-300"
            >
              {currentTranslations.filterDesigners}
            </button>
            <button 
              onClick={() => filterTeam('management')}
              className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition duration-300"
            >
              {currentTranslations.filterManagement}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredTeam.map((member, index) => (
            <div key={member.id} className={`fade-in-up delay-${(index % 4) * 100}`}>
              <TeamMemberCard
                member={member}
                onClick={() => setSelectedMember(member)}
                language={language}
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="btn-secondary">
            {currentTranslations.viewAllTeam}
          </button>
        </div>

        {selectedMember && (
          <TeamMemberModal
            member={selectedMember}
            onClose={() => setSelectedMember(null)}
            language={language}
          />
        )}
      </div>
    </section>
  )
}

export default Team