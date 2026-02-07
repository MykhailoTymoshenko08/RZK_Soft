import { useLanguage } from '../contexts/LanguageContext'

const Hero = () => {
  const { translations } = useLanguage()

  return (
    <section id="home" className="hero-section min-h-screen flex items-center relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight fade-in-up">
            {translations.freePartLine1}<br />
            <span className="gradient-text">{translations.freePartLine2}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-3xl mx-auto fade-in-up delay-100">
            {translations.weArePart}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up delay-200">
            <a
              href="mailto:rinzunakasoftofficial@gmail.com?subject=Project%20Inquiry&body=Hello%20RZK%20Soft%20team,%0D%0A%0D%0AI%20would%20like%20to%20discuss%20a%20potential%20project%20with%20your%20company.%0D%0A%0D%0APlease%20let%20me%20know%20how%20we%20can%20proceed."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              {translations.hireUsPart}
            </a>
            
            <button 
              onClick={() => {
                const element = document.getElementById('contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="btn-secondary"
            >
              {translations.contactUs}
            </button>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto fade-in-up delay-300">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brandCyan mb-2">50+</div>
              <div className="text-white/60">{translations.projects}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brandCyan mb-2">24/7</div>
              <div className="text-white/60">{translations.support}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brandCyan mb-2">100%</div>
              <div className="text-white/60">{translations.satisfaction}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brandCyan mb-2">2+</div>
              <div className="text-white/60">{translations.yearsExperience}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
