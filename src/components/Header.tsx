import { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { useNavigate, useLocation } from 'react-router-dom'
import { BsTranslate } from 'react-icons/bs'

const Header = () => {
  const { language, setLanguage, translations } = useLanguage()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const languages = [
    { code: 'en', name: 'English', flag: '/images/enLang.png' },
    { code: 'uk', name: 'Українська', flag: '/images/ukrLang.png' },
    { code: 'es', name: 'Español', flag: '/images/spLang.png' },
    { code: 'de', name: 'Deutsch', flag: '/images/gerLang.png' },
    { code: 'nl', name: 'Nederlands', flag: '/images/nethLang.png' },
  ]

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
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
      }, 100)
    } else {
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
    }
    setIsMobileMenuOpen(false)
  }

  const navigateToNews = () => {
    navigate('/news')
    setIsMobileMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-brandDark/95 backdrop-blur-md py-3 shadow-lg' : 'bg-brandDark py-4'
      }`}>
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center">
            <a 
              href="/" 
              className="flex items-center gap-3 group"
              onClick={(e) => {
                e.preventDefault();
                navigate('/');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div className="relative">
                <img 
                  src="/images/logo.png" 
                  alt="RZK Soft Logo" 
                  className="h-10 w-auto transition-transform group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.parentElement?.querySelector('.logo-fallback') as HTMLElement;
                    if (fallback) {
                      fallback.style.display = 'flex';
                    }
                  }}
                />
                <div className="logo-fallback h-10 w-10 gradient-bg rounded-lg flex items-center justify-center" style={{ display: 'none' }}>
                  <span className="font-bold text-white text-lg">RZK</span>
                </div>
              </div>
              
              <div className="hidden md:block">
                <span className="text-2xl font-bold font-space-grotesk bg-gradient-to-r from-brandCyan to-purple-500 bg-clip-text text-transparent">
                  RZK Soft
                </span>
                <p className="text-xs text-white/60 font-medium">{translations.companyTagline}</p>
              </div>
            </a>
            
            <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
              <button onClick={() => {
                if (location.pathname !== '/') {
                  navigate('/');
                  setTimeout(() => scrollToSection('home'), 100);
                } else {
                  scrollToSection('home');
                }
              }} className="nav-link">
                {translations.homePage}
              </button>
              <button onClick={() => {
                if (location.pathname !== '/') {
                  navigate('/');
                  setTimeout(() => scrollToSection('about'), 100);
                } else {
                  scrollToSection('about');
                }
              }} className="nav-link">
                {translations.aboutUsPage}
              </button>
              <button onClick={() => {
                if (location.pathname !== '/') {
                  navigate('/');
                  setTimeout(() => scrollToSection('services'), 100);
                } else {
                  scrollToSection('services');
                }
              }} className="nav-link">
                {translations.servicesPage}
              </button>
              <button onClick={() => {
                if (location.pathname !== '/') {
                  navigate('/');
                  setTimeout(() => scrollToSection('team'), 100);
                } else {
                  scrollToSection('team');
                }
              }} className="nav-link">
                {translations.teamPage}
              </button>
              <button onClick={() => navigateToNews()} className="nav-link">
                {translations.newsPage}
              </button>
              <button onClick={() => {
                if (location.pathname !== '/') {
                  navigate('/');
                  setTimeout(() => scrollToSection('contact'), 100);
                } else {
                  scrollToSection('contact');
                }
              }} className="nav-link">
                {translations.contactPage}
              </button>

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
                          setLanguage(lang.code as any)
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
                          setLanguage(lang.code as any)
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
        </div>
      </header>

      <div className={`md:hidden fixed inset-0 z-[100] ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div 
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/*menu container */}
        <div className="absolute top-0 right-0 h-full w-3/4 max-w-sm bg-brandDark border-l border-white/10">
          <div className="p-6 h-full">
            <div className="absolute top-4 right-4">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-lg border border-white/20 hover:bg-white/10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="flex flex-col space-y-4 mt-12">
              <button onClick={() => {
                navigate('/');
                setIsMobileMenuOpen(false);
                setTimeout(() => scrollToSection('home'), 100);
              }} className="nav-link text-lg text-left">
                {translations.homePage}
              </button>
              <button onClick={() => {
                navigate('/');
                setIsMobileMenuOpen(false);
                setTimeout(() => scrollToSection('about'), 100);
              }} className="nav-link text-lg text-left">
                {translations.aboutUsPage}
              </button>
              <button onClick={() => {
                navigate('/');
                setIsMobileMenuOpen(false);
                setTimeout(() => scrollToSection('services'), 100);
              }} className="nav-link text-lg text-left">
                {translations.servicesPage}
              </button>
              <button onClick={() => {
                navigate('/');
                setIsMobileMenuOpen(false);
                setTimeout(() => scrollToSection('team'), 100);
              }} className="nav-link text-lg text-left">
                {translations.teamPage}
              </button>
              <button onClick={() => {
                navigateToNews();
                setIsMobileMenuOpen(false);
              }} className="nav-link text-lg text-left">
                {translations.newsPage}
              </button>
              <button onClick={() => {
                navigate('/');
                setIsMobileMenuOpen(false);
                setTimeout(() => scrollToSection('contact'), 100);
              }} className="nav-link text-lg text-left">
                {translations.contactPage}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header