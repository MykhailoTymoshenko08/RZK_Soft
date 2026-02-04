import { useLanguage } from '../contexts/LanguageContext'

const Services = () => {
  const { translations } = useLanguage()

  const services = [
    {
      id: 1,
      icon: '🌐',
      iconBg: 'bg-blue-500',
      title: translations.webDevelopmentPage,
      description: translations.webDevelopmentDesc,
      features: ['React/Next.js', 'Node.js/Express', 'Python/FastAPI', 'Database Design']
    },
    {
      id: 2,
      icon: '🎨',
      iconBg: 'bg-purple-500',
      title: translations.designPage,
      description: translations.designDesc,
      features: ['Wireframing', 'Prototyping', 'User Testing', 'Design Systems']
    },
    {
      id: 3,
      icon: '📱',
      iconBg: 'bg-green-500',
      title: translations.mobilePage,
      description: translations.mobileDesc,
      features: ['React Native', 'iOS & Android', 'App Store Deployment', 'Push Notifications']
    },
    {
      id: 4,
      icon: '💡',
      iconBg: 'bg-yellow-500',
      title: translations.brandingPage,
      description: translations.brandingDesc,
      features: ['Logo Design', 'Brand Identity', 'Marketing Materials', 'Social Media']
    },
    {
      id: 5,
      icon: '🤖',
      iconBg: 'bg-pink-500',
      title: translations.aiMlPage,
      description: translations.aiMlDesc,
      features: ['Chatbots', 'Predictive Analytics', 'Computer Vision', 'NLP']
    },
    {
      id: 6,
      icon: '☁️',
      iconBg: 'bg-indigo-500',
      title: translations.devOpsPage,
      description: translations.devOpsDesc,
      features: ['AWS/Azure/GCP', 'Docker/Kubernetes', 'CI/CD', 'Monitoring']
    },
    {
      id: 7,
      icon: '💼',
      iconBg: 'bg-cyan-500',
      title: translations.consultingPage,
      description: translations.consultingDesc,
      features: ['Tech Strategy', 'System Architecture', 'Digital Transformation', 'Risk Assessment']
    },
    {
      id: 8,
      icon: '🔧',
      iconBg: 'bg-orange-500',
      title: translations.maintenancePage,
      description: translations.maintenanceDesc,
      features: ['Bug Fixing', 'Performance Optimization', 'Security Updates', '24/7 Support']
    }
  ]

  return (
    <section id="services" className="py-16 md:py-24 section-padding scroll-mt-24">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            {translations.ourServicespage}
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            {translations.firstPartOfBodySecondaryTextPage}
          </p>
        </div>

        {/* Список послуг */}
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
              
              <p className="text-white/70 mb-6">{service.description}</p>
              
              <div className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-brandCyan rounded-full"></div>
                    <span className="text-white/80 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button className="w-full py-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors duration-300 text-sm font-medium">
                {translations.learnMore}
              </button>
            </div>
          ))}
        </div>
        
        {/* Блок "Looking for more" + Our Process */}
        <div className="mt-16">
          <div className="custom-card p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {translations.lookingForMore}
                </h3>
                <p className="text-white/70 mb-6">{translations.contactDesc}</p>
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="btn-primary"
                >
                  {translations.getInTouch}
                </button>
              </div>
              
              <div className="bg-gradient-to-br from-brandCyan/20 to-purple-600/20 rounded-xl p-8">
                <h4 className="text-xl font-bold mb-4">{translations.ourProcess}</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center text-white font-bold">1</div>
                    <div>
                      <h5 className="font-bold">{translations.discoveryTitle}</h5>
                      <p className="text-white/60 text-sm">{translations.discoveryText}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center text-white font-bold">2</div>
                    <div>
                      <h5 className="font-bold">{translations.designTitle}</h5>
                      <p className="text-white/60 text-sm">{translations.designText}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center text-white font-bold">3</div>
                    <div>
                      <h5 className="font-bold">{translations.developmentTitle}</h5>
                      <p className="text-white/60 text-sm">{translations.developmentText}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center text-white font-bold">4</div>
                    <div>
                      <h5 className="font-bold">{translations.testingTitle}</h5>
                      <p className="text-white/60 text-sm">{translations.testingText}</p>
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
