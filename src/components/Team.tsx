import { useState } from 'react'
import { TeamMember, teamData } from '../data/teamData'
import TeamMemberCard from './TeamMemberCard'
import TeamMemberModal from './TeamMemberModal'
import { useLanguage } from '../contexts/LanguageContext'

const Team = () => {
  const { translations, language } = useLanguage()
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)
  const [filteredTeam, setFilteredTeam] = useState<TeamMember[]>(teamData)

  const filterTeam = (role: string) => {
    if (role === 'all') {
      setFilteredTeam(teamData)
    } else if (role === 'developers') {
      setFilteredTeam(
        teamData.filter(
          member =>
            member.role.includes('Developer') ||
            member.skills.some(skill =>
              ['React', 'Python', 'JavaScript'].some(s => skill.includes(s))
            )
        )
      )
    } else if (role === 'designers') {
      setFilteredTeam(
        teamData.filter(
          member =>
            member.role.includes('Design') ||
            member.skills.some(skill =>
              ['Figma', 'UI/UX'].some(s => skill.includes(s))
            )
        )
      )
    } else if (role === 'management') {
      setFilteredTeam(
        teamData.filter(
          member =>
            member.role.includes('CEO') ||
            member.role.includes('COO') ||
            member.role.includes('Manager')
        )
      )
    }
  }

  return (
    <section id="team" className="py-16 md:py-24 section-padding scroll-mt-24">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            {translations.meetOurTeam}
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
            {translations.meetOurTeamDesc}
          </p>

          {/* filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => filterTeam('all')}
              className="px-6 py-2 bg-brandCyan hover:bg-cyan-600 text-white rounded-full transition duration-300"
            >
              {translations.filterAll}
            </button>
            <button
              onClick={() => filterTeam('developers')}
              className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition duration-300"
            >
              {translations.filterDevelopers}
            </button>
            <button
              onClick={() => filterTeam('designers')}
              className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition duration-300"
            >
              {translations.filterDesigners}
            </button>
            <button
              onClick={() => filterTeam('management')}
              className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition duration-300"
            >
              {translations.filterManagement}
            </button>
          </div>
        </div>

        {/*team members grid */}
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

        {/* button view all team */}
        <div className="text-center">
          <button className="btn-secondary">{translations.viewAllTeam}</button>
        </div>

        {/* modal view */}
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