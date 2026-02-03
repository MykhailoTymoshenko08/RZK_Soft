import { useState, useEffect } from 'react'

const Services = () => {
  const [language, setLanguage] = useState('en')

  useEffect(() => {
    const savedLang = localStorage.getItem('selectedLang')
    if (savedLang) setLanguage(savedLang)
  }, [])

  const translations = {
    en: {
      ourServicespage: "Our Services",
      webDevelopmentPage: "Web Development",
      webDevelopmentDesc: "Custom websites and web applications using modern technologies like React, Next.js, and Node.js.",
      designPage: "UI/UX Design",
      designDesc: "User-centered design that combines aesthetics with functionality for optimal user experience.",
      mobilePage: "Mobile Development",
      mobileDesc: "Cross-platform mobile applications for iOS and Android using React Native and Flutter.",
      brandingPage: "Branding",
      brandingDesc: "Complete branding solutions including logo design, style guides, and marketing materials.",
      aiMlPage: "AI/ML Solutions",
      aiMlDesc: "Artificial Intelligence and Machine Learning solutions for automation and data analysis.",
      devOpsPage: "DevOps & Cloud",
      devOpsDesc: "Infrastructure setup, CI/CD pipelines, and cloud deployment on AWS, Azure, and Google Cloud.",
      consultingPage: "Tech Consulting",
      consultingDesc: "Strategic technology consulting to help businesses make informed decisions.",
      maintenancePage: "Support & Maintenance",
      maintenanceDesc: "Ongoing support, updates, and maintenance for your digital products.",
      learnMore: "Learn More",
      lookingForMore: "Looking for something specific?",
      getInTouch: "Get in Touch",
      contactDesc: "We also specialize in custom solutions. Contact us to discuss your specific requirements."
    },
    uk: {
      ourServicespage: "Наші Послуги",
      webDevelopmentPage: "Веб-розробка",
      webDevelopmentDesc: "Індивідуальні веб-сайти та веб-додатки з використанням сучасних технологій, таких як React, Next.js та Node.js.",
      designPage: "UI/UX Дизайн",
      designDesc: "Орієнтований на користувача дизайн, який поєднує естетику з функціональністю для оптимального досвіду користування.",
      mobilePage: "Мобільна розробка",
      mobileDesc: "Крос-платформні мобільні додатки для iOS та Android з використанням React Native та Flutter.",
      brandingPage: "Брендинг",
      brandingDesc: "Повні брендингові рішення, включаючи дизайн логотипу, гайди стилю та маркетингові матеріали.",
      aiMlPage: "AI/ML Рішення",
      aiMlDesc: "Рішення з штучного інтелекту та машинного навчання для автоматизації та аналізу даних.",
      devOpsPage: "DevOps & Хмара",
      devOpsDesc: "Налаштування інфраструктури, CI/CD пайплайни та хмарне розгортання на AWS, Azure та Google Cloud.",
      consultingPage: "Технологічний Консалтинг",
      consultingDesc: "Стратегічний технологічний консалтинг для допомоги бізнесам у прийнятті обґрунтованих рішень.",
      maintenancePage: "Підтримка & Обслуговування",
      maintenanceDesc: "Поточна підтримка, оновлення та обслуговування ваших цифрових продуктів.",
      learnMore: "Дізнатися більше",
      lookingForMore: "Шукаєте щось конкретне?",
      getInTouch: "Зв'яжіться з нами",
      contactDesc: "Ми також спеціалізуємося на індивідуальних рішеннях. Зв'яжіться з нами, щоб обговорити ваші конкретні вимоги."
    },
    es: {
      ourServicespage: "Nuestros Servicios",
      webDevelopmentPage: "Desarrollo Web",
      webDevelopmentDesc: "Sitios web y aplicaciones web personalizadas utilizando tecnologías modernas como React, Next.js y Node.js.",
      designPage: "Diseño UI/UX",
      designDesc: "Diseño centrado en el usuario que combina estética con funcionalidad para una experiencia de usuario óptima.",
      mobilePage: "Desarrollo Móvil",
      mobileDesc: "Aplicaciones móviles multiplataforma para iOS y Android utilizando React Native y Flutter.",
      brandingPage: "Branding",
      brandingDesc: "Soluciones de branding completas que incluyen diseño de logotipo, guías de estilo y materiales de marketing.",
      aiMlPage: "Soluciones AI/ML",
      aiMlDesc: "Soluciones de Inteligencia Artificial y Aprendizaje Automático para automatización y análisis de datos.",
      devOpsPage: "DevOps & Nube",
      devOpsDesc: "Configuración de infraestructura, pipelines CI/CD y despliegue en la nube en AWS, Azure y Google Cloud.",
      consultingPage: "Consultoría Tecnológica",
      consultingDesc: "Consultoría tecnológica estratégica para ayudar a las empresas a tomar decisiones informadas.",
      maintenancePage: "Soporte & Mantenimiento",
      maintenanceDesc: "Soporte continuo, actualizaciones y mantenimiento para sus productos digitales.",
      learnMore: "Más Información",
      lookingForMore: "¿Buscas algo específico?",
      getInTouch: "Ponte en Contacto",
      contactDesc: "También nos especializamos en soluciones personalizadas. Contáctenos para discutir sus requisitos específicos."
    },
    de: {
      ourServicespage: "Unsere Dienstleistungen",
      webDevelopmentPage: "Webentwicklung",
      webDevelopmentDesc: "Maßgeschneiderte Websites und Webanwendungen mit modernen Technologien wie React, Next.js und Node.js.",
      designPage: "UI/UX Design",
      designDesc: "Nutzerzentriertes Design, das Ästhetik mit Funktionalität für optimale Benutzererfahrung kombiniert.",
      mobilePage: "Mobile Entwicklung",
      mobileDesc: "Plattformübergreifende Mobile Apps für iOS und Android mit React Native und Flutter.",
      brandingPage: "Branding",
      brandingDesc: "Komplette Branding-Lösungen inklusive Logo-Design, Style-Guides und Marketing-Materialien.",
      aiMlPage: "AI/ML Lösungen",
      aiMlDesc: "Künstliche Intelligenz und Machine Learning Lösungen für Automatisierung und Datenanalyse.",
      devOpsPage: "DevOps & Cloud",
      devOpsDesc: "Infrastruktur-Einrichtung, CI/CD Pipelines und Cloud-Bereitstellung auf AWS, Azure und Google Cloud.",
      consultingPage: "Tech Consulting",
      consultingDesc: "Strategische Technologieberatung zur Unterstützung von Unternehmen bei fundierten Entscheidungen.",
      maintenancePage: "Support & Wartung",
      maintenanceDesc: "Fortlaufender Support, Updates und Wartung für Ihre digitalen Produkte.",
      learnMore: "Mehr Erfahren",
      lookingForMore: "Suchen Sie etwas Bestimmtes?",
      getInTouch: "Kontakt Aufnehmen",
      contactDesc: "Wir spezialisieren uns auch auf maßgeschneiderte Lösungen. Kontaktieren Sie uns, um Ihre spezifischen Anforderungen zu besprechen."
    },
    nl: {
      ourServicespage: "Onze Diensten",
      webDevelopmentPage: "Webontwikkeling",
      webDevelopmentDesc: "Op maat gemaakte websites en webapplicaties met moderne technologieën zoals React, Next.js en Node.js.",
      designPage: "UI/UX Ontwerp",
      designDesc: "Gebruikersgericht ontwerp dat esthetiek combineert met functionaliteit voor optimale gebruikerservaring.",
      mobilePage: "Mobiele Ontwikkeling",
      mobileDesc: "Platformonafhankelijke mobiele apps voor iOS en Android met React Native en Flutter.",
      brandingPage: "Branding",
      brandingDesc: "Complete branding oplossingen inclusief logo-ontwerp, style guides en marketingmaterialen.",
      aiMlPage: "AI/ML Oplossingen",
      aiMlDesc: "Kunstmatige Intelligentie en Machine Learning oplossingen voor automatisering en data-analyse.",
      devOpsPage: "DevOps & Cloud",
      devOpsDesc: "Infrastructuur opzetten, CI/CD pipelines en cloud-implementatie op AWS, Azure en Google Cloud.",
      consultingPage: "Tech Consulting",
      consultingDesc: "Strategische technologieconsulting om bedrijven te helpen geïnformeerde beslissingen te nemen.",
      maintenancePage: "Ondersteuning & Onderhoud",
      maintenanceDesc: "Doorlopende ondersteuning, updates en onderhoud voor uw digitale producten.",
      learnMore: "Meer Informatie",
      lookingForMore: "Zoekt u iets specifieks?",
      getInTouch: "Neem Contact Op",
      contactDesc: "We specialiseren ons ook in op maat gemaakte oplossingen. Neem contact met ons op om uw specifieke vereisten te bespreken."
    }
  }

  const currentTranslations = (translations as any)[language] || translations.en

  const services = [
    {
      id: 1,
      icon: '🌐',
      iconBg: 'bg-blue-500',
      title: currentTranslations.webDevelopmentPage,
      description: currentTranslations.webDevelopmentDesc,
      features: ['React/Next.js', 'Node.js/Express', 'Python/FastAPI', 'Database Design']
    },
    {
      id: 2,
      icon: '🎨',
      iconBg: 'bg-purple-500',
      title: currentTranslations.designPage,
      description: currentTranslations.designDesc,
      features: ['Wireframing', 'Prototyping', 'User Testing', 'Design Systems']
    },
    {
      id: 3,
      icon: '📱',
      iconBg: 'bg-green-500',
      title: currentTranslations.mobilePage,
      description: currentTranslations.mobileDesc,
      features: ['React Native', 'iOS & Android', 'App Store Deployment', 'Push Notifications']
    },
    {
      id: 4,
      icon: '💡',
      iconBg: 'bg-yellow-500',
      title: currentTranslations.brandingPage,
      description: currentTranslations.brandingDesc,
      features: ['Logo Design', 'Brand Identity', 'Marketing Materials', 'Social Media']
    },
    {
      id: 5,
      icon: '🤖',
      iconBg: 'bg-pink-500',
      title: currentTranslations.aiMlPage,
      description: currentTranslations.aiMlDesc,
      features: ['Chatbots', 'Predictive Analytics', 'Computer Vision', 'NLP']
    },
    {
      id: 6,
      icon: '☁️',
      iconBg: 'bg-indigo-500',
      title: currentTranslations.devOpsPage,
      description: currentTranslations.devOpsDesc,
      features: ['AWS/Azure/GCP', 'Docker/Kubernetes', 'CI/CD', 'Monitoring']
    },
    {
      id: 7,
      icon: '💼',
      iconBg: 'bg-cyan-500',
      title: currentTranslations.consultingPage,
      description: currentTranslations.consultingDesc,
      features: ['Tech Strategy', 'System Architecture', 'Digital Transformation', 'Risk Assessment']
    },
    {
      id: 8,
      icon: '🔧',
      iconBg: 'bg-orange-500',
      title: currentTranslations.maintenancePage,
      description: currentTranslations.maintenanceDesc,
      features: ['Bug Fixing', 'Performance Optimization', 'Security Updates', '24/7 Support']
    }
  ]

  return (
    <section id="services" className="py-16 md:py-24 section-padding scroll-mt-24">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            {currentTranslations.ourServicespage}
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Comprehensive software development and design services tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`service-card hover-lift hover-glow fade-in-up delay-${(index % 4) * 100}`}
            >
              <div className={`${service.iconBg} service-icon text-white text-2xl`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              
              <p className="text-white/70 mb-6">
                {service.description}
              </p>
              
              <div className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-brandCyan rounded-full"></div>
                    <span className="text-white/80 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button className="w-full py-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors duration-300 text-sm font-medium">
                {currentTranslations.learnMore}
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <div className="custom-card p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {currentTranslations.lookingForMore}
                </h3>
                <p className="text-white/70 mb-6">
                  {currentTranslations.contactDesc}
                </p>
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="btn-primary"
                >
                  {currentTranslations.getInTouch}
                </button>
              </div>
              
              <div className="bg-gradient-to-br from-brandCyan/20 to-purple-600/20 rounded-xl p-8">
                <h4 className="text-xl font-bold mb-4">Our Process</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center text-white font-bold">1</div>
                    <div>
                      <h5 className="font-bold">Discovery & Planning</h5>
                      <p className="text-white/60 text-sm">Understand requirements and create roadmap</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center text-white font-bold">2</div>
                    <div>
                      <h5 className="font-bold">Design & Prototyping</h5>
                      <p className="text-white/60 text-sm">Create wireframes and design prototypes</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center text-white font-bold">3</div>
                    <div>
                      <h5 className="font-bold">Development</h5>
                      <p className="text-white/60 text-sm">Code implementation with agile methodology</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center text-white font-bold">4</div>
                    <div>
                      <h5 className="font-bold">Testing & Deployment</h5>
                      <p className="text-white/60 text-sm">Quality assurance and production launch</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services