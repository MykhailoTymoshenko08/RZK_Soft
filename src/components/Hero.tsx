import { useState, useEffect } from 'react'

const Hero = () => {
  const [language, setLanguage] = useState('en')

  useEffect(() => {
    const savedLang = localStorage.getItem('selectedLang')
    if (savedLang) setLanguage(savedLang)
  }, [])

  const translations = {
    en: {
      freePartLine1: "Freelance Software",
      freePartLine2: "Development & Design",
      weArePart: "We are RZK Soft, a team of skilled programmers and designers ready to deliver top-notch solutions for your business needs.",
      hireUsPart: "Hire Us Now",
      contactUsPart: "Contact Us"
    },
    uk: {
      freePartLine1: "Фріланс Розробка",
      freePartLine2: "ПО та Дизайн",
      weArePart: "Ми RZK Soft, команда досвідчених програмістів та дизайнерів, готових надавати високоякісні рішення для ваших бізнес-потреб.",
      hireUsPart: "Найняти Нас",
      contactUsPart: "Зв'язатися"
    },
    es: {
      freePartLine1: "Desarrollo de Software",
      freePartLine2: "Freelance & Diseño",
      weArePart: "Somos RZK Soft, un equipo de programadores y diseñadores calificados listos para ofrecer soluciones de primer nivel para sus necesidades empresariales.",
      hireUsPart: "Contrátanos",
      contactUsPart: "Contáctanos"
    },
    de: {
      freePartLine1: "Freiberufliche Software",
      freePartLine2: "Entwicklung & Design",
      weArePart: "Wir sind RZK Soft, ein Team erfahrener Programmierer und Designer, das bereit ist, erstklassige Lösungen für Ihre Geschäftsanforderungen zu liefern.",
      hireUsPart: "Buchen Sie uns",
      contactUsPart: "Kontaktieren Sie uns"
    },
    nl: {
      freePartLine1: "Freelance Software",
      freePartLine2: "Ontwikkeling & Ontwerp",
      weArePart: "Wij zijn RZK Soft, een team van bekwame programmeurs en ontwerpers die klaar staan om eersteklas oplossingen te leveren voor uw zakelijke behoeften.",
      hireUsPart: "Huur Ons In",
      contactUsPart: "Neem Contact Op"
    }
  }

  const currentTranslations = (translations as any)[language] || translations.en

  return (
    <section id="home" className="hero-section min-h-screen flex items-center relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight fade-in-up">
            {currentTranslations.freePartLine1}<br />
            <span className="gradient-text">{currentTranslations.freePartLine2}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-3xl mx-auto fade-in-up delay-100">
            {currentTranslations.weArePart}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up delay-200">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=rinzunakasoftofficial@gmail.com&su=Project%20Inquiry&body=Hello%20RZK%20Soft%20team,%0D%0A%0D%0AI%20would%20like%20to%20discuss%20a%20potential%20project%20with%20your%20company.%0D%0A%0D%0APlease%20let%20me%20know%20how%20we%20can%20proceed."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              {currentTranslations.hireUsPart}
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
              {currentTranslations.contactUsPart}
            </button>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto fade-in-up delay-300">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brandCyan mb-2">50+</div>
              <div className="text-white/60">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brandCyan mb-2">24/7</div>
              <div className="text-white/60">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brandCyan mb-2">100%</div>
              <div className="text-white/60">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brandCyan mb-2">2+</div>
              <div className="text-white/60">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero