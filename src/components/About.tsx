import { useLanguage } from '../contexts/LanguageContext'

const About = () => {
  const { translations } = useLanguage()

  return (
    <section id="about" className="py-16 md:py-24 section-padding scroll-mt-24">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            {translations.aboutUsPage}
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            {translations.aboutText}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="custom-card p-8 hover-lift">
            <div className="w-16 h-16 gradient-bg rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">{translations.missionTitle}</h3>
            <p className="text-white/70">{translations.missionText}</p>
          </div>

          <div className="custom-card p-8 hover-lift">
            <div className="w-16 h-16 gradient-bg rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">{translations.visionTitle}</h3>
            <p className="text-white/70">{translations.visionText}</p>
          </div>

          <div className="custom-card p-8 hover-lift">
            <div className="w-16 h-16 gradient-bg rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">{translations.valuesTitle}</h3>
            <p className="text-white/70">{translations.valuesText}</p>
          </div>
        </div>

        <div className="mt-16 custom-card p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">{translations.whyChooseTitle}</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brandCyan rounded-full"></div>
                  <span>{translations.whyChoose1}</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brandCyan rounded-full"></div>
                  <span>{translations.whyChoose2}</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brandCyan rounded-full"></div>
                  <span>{translations.whyChoose3}</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brandCyan rounded-full"></div>
                  <span>{translations.whyChoose4}</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brandCyan rounded-full"></div>
                  <span>{translations.whyChoose5}</span>
                </li> 
              </ul>
            </div>
            <div className="bg-gradient-to-br from-brandCyan/20 to-purple-600/20 rounded-xl p-8">
              <h4 className="text-xl font-bold mb-4">Our Expertise</h4>
              <div className="flex flex-wrap gap-3">
                <span className="skill-tag">React & Next.js</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">AI/ML</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">AWS</span>
                <span className="skill-tag">UI/UX Design</span>
                <span className="skill-tag">Mobile Apps</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
