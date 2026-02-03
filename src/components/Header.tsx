import { useState, useEffect } from 'react'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)
  const [language, setLanguage] = useState('en')
  const [scrolled, setScrolled] = useState(false)

  const languages = [
    { code: 'en', name: 'English', flag: '/images/enLang.png' },
    { code: 'uk', name: 'Українська', flag: '/images/ukrLang.png' },
    { code: 'es', name: 'Español', flag: '/images/spLang.png' },
    { code: 'de', name: 'Deutsch', flag: '/images/gerLang.png' },
    { code: 'nl', name: 'Nederlands', flag: '/images/nethLang.png' },
  ]

  const translations: Record<string, Record<string, string>> = {
    en: {
      homePage: 'Home',
      aboutUsPage: 'About Us',
      servicesPage: 'Services',
      teamPage: 'Our Team',
      contactPage: 'Contact'
    },
    uk: {
      homePage: 'Головна',
      aboutUsPage: 'Про нас',
      servicesPage: 'Послуги',
      teamPage: 'Наша команда',
      contactPage: 'Контакти'
    },
    es: {
      homePage: 'Inicio',
      aboutUsPage: 'Sobre Nosotros',
      servicesPage: 'Servicios',
      teamPage: 'Nuestro Equipo',
      contactPage: 'Contacto'
    },
    de: {
      homePage: 'Startseite',
      aboutUsPage: 'Über Uns',
      servicesPage: 'Dienstleistungen',
      teamPage: 'Unser Team',
      contactPage: 'Kontakt'
    },
    nl: {
      homePage: 'Home',
      aboutUsPage: 'Over Ons',
      servicesPage: 'Diensten',
      teamPage: 'Ons Team',
      contactPage: 'Contact'
    }
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsMobileMenuOpen(false)
  }

  useEffect(() => {
    const savedLang = localStorage.getItem('selectedLang')
    if (savedLang) setLanguage(savedLang)
  }, [])

  useEffect(() => {
    localStorage.setItem('selectedLang', language)
  }, [language])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const currentTranslations = translations[language] || translations.en

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-brandDark/95 backdrop-blur-md py-3 shadow-lg' : 'bg-brandDark py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold font-space-grotesk">RZK Soft</h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="nav-link"
            >
              {currentTranslations.homePage}
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="nav-link"
            >
              {currentTranslations.aboutUsPage}
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="nav-link"
            >
              {currentTranslations.servicesPage}
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="nav-link"
            >
              {currentTranslations.teamPage}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="nav-link"
            >
              {currentTranslations.contactPage}
            </button>

            {/* Language Selector */}
            <div className="language-selector">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 hover:border-brandCyan transition-colors"
              >
                <img 
                  src={languages.find(l => l.code === language)?.flag} 
                  alt="Language" 
                  className="w-5 h-5"
                />
                <span>{languages.find(l => l.code === language)?.name}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isLangMenuOpen && (
                <div className="language-menu">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code)
                        setIsLangMenuOpen(false)
                      }}
                      className={`language-option ${language === lang.code ? 'active' : ''}`}
                    >
                      <img src={lang.flag} alt={lang.name} className="w-5 h-5" />
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="p-2 rounded-lg border border-white/20"
              >
                <img 
                  src={languages.find(l => l.code === language)?.flag} 
                  alt="Language" 
                  className="w-6 h-6"
                />
              </button>
              
              {isLangMenuOpen && (
                <div className="absolute top-full right-0 mt-2 language-menu">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code)
                        setIsLangMenuOpen(false)
                      }}
                      className={`language-option ${language === lang.code ? 'active' : ''}`}
                    >
                      <img src={lang.flag} alt={lang.name} className="w-5 h-5" />
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg border border-white/20"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''} md:hidden`}>
          <div className="flex flex-col space-y-4 mt-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="nav-link text-lg"
            >
              {currentTranslations.homePage}
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="nav-link text-lg"
            >
              {currentTranslations.aboutUsPage}
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="nav-link text-lg"
            >
              {currentTranslations.servicesPage}
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="nav-link text-lg"
            >
              {currentTranslations.teamPage}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="nav-link text-lg"
            >
              {currentTranslations.contactPage}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header