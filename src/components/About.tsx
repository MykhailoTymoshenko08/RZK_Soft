import { useState, useEffect } from 'react'

const About = () => {
  const [language, setLanguage] = useState('en')

  useEffect(() => {
    const savedLang = localStorage.getItem('selectedLang')
    if (savedLang) setLanguage(savedLang)
  }, [])

  const translations = {
    en: {
      aboutUsPage: "About Us",
      missionTitle: "Our Mission",
      missionText: "To deliver innovative software solutions that empower businesses and individuals to achieve their goals through cutting-edge technology.",
      visionTitle: "Our Vision",
      visionText: "To become a leading global provider of software development services, known for excellence, innovation, and client satisfaction.",
      valuesTitle: "Our Values",
      valuesText: "Quality, Innovation, Integrity, and Client Success are at the core of everything we do.",
      aboutText: "RZK Soft is a dynamic software development agency specializing in creating custom solutions for businesses of all sizes. With expertise in modern technologies and a passion for innovation, we transform ideas into powerful digital experiences."
    },
    uk: {
      aboutUsPage: "Про нас",
      missionTitle: "Наша Місія",
      missionText: "Надавати інноваційні програмні рішення, які дозволяють бізнесам та приватним особам досягати своїх цілей за допомогою передових технологій.",
      visionTitle: "Наше Бачення",
      visionText: "Стати провідним глобальним постачальником послуг з розробки програмного забезпечення, відомим завдяки якості, інноваціям та задоволенню клієнтів.",
      valuesTitle: "Наші Цінності",
      valuesText: "Якість, Інновації, Чеснота та Успіх клієнта знаходяться в основі всього, що ми робимо.",
      aboutText: "RZK Soft - це динамічна агенція з розробки програмного забезпечення, яка спеціалізується на створенні індивідуальних рішень для бізнесів будь-якого розміру. Маючи експертизу в сучасних технологіях та пристрасть до інновацій, ми перетворюємо ідеї на потужні цифрові досвіди."
    },
    es: {
      aboutUsPage: "Sobre Nosotros",
      missionTitle: "Nuestra Misión",
      missionText: "Entregar soluciones de software innovadoras que empoderen a empresas e individuos para alcanzar sus objetivos a través de tecnología de vanguardia.",
      visionTitle: "Nuestra Visión",
      visionText: "Convertirnos en un proveedor global líder de servicios de desarrollo de software, conocido por la excelencia, innovación y satisfacción del cliente.",
      valuesTitle: "Nuestros Valores",
      valuesText: "Calidad, Innovación, Integridad y Éxito del Cliente están en el centro de todo lo que hacemos.",
      aboutText: "RZK Soft es una agencia dinámica de desarrollo de software especializada en crear soluciones personalizadas para empresas de todos los tamaños. Con experiencia en tecnologías modernas y pasión por la innovación, transformamos ideas en poderosas experiencias digitales."
    },
    de: {
      aboutUsPage: "Über Uns",
      missionTitle: "Unsere Mission",
      missionText: "Innovative Softwarelösungen zu liefern, die Unternehmen und Einzelpersonen befähigen, ihre Ziele durch modernste Technologie zu erreichen.",
      visionTitle: "Unsere Vision",
      visionText: "Ein führender globaler Anbieter von Softwareentwicklungsdiensten zu werden, bekannt für Exzellenz, Innovation und Kundenzufriedenheit.",
      valuesTitle: "Unsere Werte",
      valuesText: "Qualität, Innovation, Integrität und Kundenerfolg stehen im Mittelpunkt all unseres Handelns.",
      aboutText: "RZK Soft ist eine dynamische Softwareentwicklungsagentur, die sich auf die Erstellung maßgeschneiderter Lösungen für Unternehmen aller Größen spezialisiert hat. Mit Expertise in modernen Technologien und einer Leidenschaft für Innovation verwandeln wir Ideen in kraftvolle digitale Erlebnisse."
    },
    nl: {
      aboutUsPage: "Over Ons",
      missionTitle: "Onze Missie",
      missionText: "Innovatieve softwareoplossingen leveren die bedrijven en individuen in staat stellen hun doelen te bereiken via geavanceerde technologie.",
      visionTitle: "Onze Visie",
      visionText: "Een toonaangevende wereldwijde aanbieder van softwareontwikkelingsdiensten worden, bekend om uitmuntendheid, innovatie en klanttevredenheid.",
      valuesTitle: "Onze Waarden",
      valuesText: "Kwaliteit, Innovatie, Integriteit en Klantsucces staan centraal in alles wat we doen.",
      aboutText: "RZK Soft is een dynamisch softwareontwikkelingsbureau gespecialiseerd in het creëren van op maat gemaakte oplossingen voor bedrijven van elke omvang. Met expertise in moderne technologieën en een passie voor innovatie transformeren we ideeën in krachtige digitale ervaringen."
    }
  }

  const currentTranslations = (translations as any)[language] || translations.en

  return (
    <section id="about" className="py-16 md:py-24 section-padding scroll-mt-24">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            {currentTranslations.aboutUsPage}
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            {currentTranslations.aboutText}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="custom-card p-8 hover-lift">
            <div className="w-16 h-16 gradient-bg rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">{currentTranslations.missionTitle}</h3>
            <p className="text-white/70">
              {currentTranslations.missionText}
            </p>
          </div>

          <div className="custom-card p-8 hover-lift">
            <div className="w-16 h-16 gradient-bg rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">{currentTranslations.visionTitle}</h3>
            <p className="text-white/70">
              {currentTranslations.visionText}
            </p>
          </div>

          <div className="custom-card p-8 hover-lift">
            <div className="w-16 h-16 gradient-bg rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">{currentTranslations.valuesTitle}</h3>
            <p className="text-white/70">
              {currentTranslations.valuesText}
            </p>
          </div>
        </div>

        <div className="mt-16 custom-card p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Why Choose RZK Soft?</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brandCyan rounded-full"></div>
                  <span>Expert team with diverse skill sets</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brandCyan rounded-full"></div>
                  <span>Cutting-edge technology stack</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brandCyan rounded-full"></div>
                  <span>Agile development methodology</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brandCyan rounded-full"></div>
                  <span>Transparent communication</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brandCyan rounded-full"></div>
                  <span>Competitive pricing</span>
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