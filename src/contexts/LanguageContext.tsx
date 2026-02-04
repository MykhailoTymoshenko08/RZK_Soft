import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'uk' | 'es' | 'de' | 'nl';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: Record<string, string>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// all translations
const allTranslations: Record<Language, Record<string, string>> = {
  en: {
    homePage: 'Home',
    servicesPage: 'Services',
    teamPage: 'Our Team',
    contactPage: 'Contact',
    freePartLine1: 'Freelance Software',
    freePartLine2: 'Development & Design',
    weArePart: 'We are RZK Soft, a team of skilled programmers and designers ready to deliver top-notch solutions',
    hireUsPart: 'Hire us',
    firstPartOfBodySecondaryTextPage: 'Our company specializes in providing high-quality software development and design services.',
    ourServicespage: 'Our Services',
    webDevelopmentPage: 'Web Development',
    designPage: 'UI/UX Design',
    mobilePage: 'Mobile Development',
    brandingPage: 'Branding',
    viewFullProfile: 'View Full Profile',
    techStack: 'Tech Stack',
    projects: 'Projects',
    diplomasAwards: 'Diplomas & Awards',
    viewCertificate: 'View Certificate',
    viewOnGitHub: 'View on GitHub',
    quickLinks: 'Quick Links',
    contactUs: 'Contact Us',
    followUs: 'Follow Us',
    // About
    aboutUsPage: "About Us",
    aboutText: "RZK Soft is a dynamic software development agency specializing in creating custom solutions for businesses of all sizes. With expertise in modern technologies and a passion for innovation, we transform ideas into powerful digital experiences.",
    missionTitle: "Our Mission",
    missionText: "To deliver innovative software solutions that empower businesses and individuals to achieve their goals through cutting-edge technology.",
    visionTitle: "Our Vision",
    visionText: "To become a leading global provider of software development services, known for excellence, innovation, and client satisfaction.",
    valuesTitle: "Our Values",
    valuesText: "Quality, Innovation, Integrity, and Client Success are at the core of everything we do.",

    // Services  Our Process
    ourProcess: "Our Process",
    discoveryTitle: "Discovery & Planning",
    discoveryText: "Understand requirements and create roadmap",
    designTitle: "Design & Prototyping",
    designText: "Create wireframes and design prototypes",
    developmentTitle: "Development",
    developmentText: "Code implementation with agile methodology",
    testingTitle: "Testing & Deployment",
    testingText: "Quality assurance and production launch",
    // About – Why Choose
    whyChooseTitle: "Why Choose RZK Soft?",
    whyChoose1: "Expert team with diverse skill sets",
    whyChoose2: "Cutting-edge technology stack",
    whyChoose3: "Agile development methodology",
    whyChoose4: "Transparent communication",
    whyChoose5: "Competitive pricing",

    // Services – Looking for more
    lookingForMore: "Looking for something specific?",
    contactDesc: "We also specialize in custom solutions. Contact us to discuss your specific requirements.",
    getInTouch: "Get in Touch",

    meetOurTeam: "Meet Our Team",
    meetOurTeamDesc: "Our talented team of developers, designers, and strategists working together to deliver exceptional results.",
    
    rights: "All rights reserved",
    footerDesc: "Delivering exceptional software development and design solutions with cutting-edge technology and creative expertise.",
    builtWith: "Built with ❤️ using React, TypeScript & Tailwind CSS",

    filterAll: "All",
    filterDevelopers: "Developers",
    filterDesigners: "Designers",
    filterManagement: "Management",
    viewAllTeam: "View Full Team",

    required: "Required",
    messageSent: "Message sent successfully!",
    sendingError: "Error sending message. Please try again.",
    sending: "Sending..."

    
  },
  uk: {
    homePage: 'Головна',
    aboutUsPage: 'Про нас',
    servicesPage: 'Послуги',
    teamPage: 'Наша команда',
    contactPage: 'Контакти',
    freePartLine1: 'Фріланс Розробка',
    freePartLine2: 'ПО та Дизайн',
    weArePart: 'Ми RZK Soft, команда досвідчених програмістів та дизайнерів',
    hireUsPart: 'Найняти нас',
    firstPartOfBodySecondaryTextPage: 'Наша компанія спеціалізується на наданні високоякісних послуг',
    ourServicespage: 'Наші послуги',
    webDevelopmentPage: 'Веб-розробка',
    designPage: 'UI/UX Дизайн',
    mobilePage: 'Мобільна розробка',
    brandingPage: 'Брендинг',
    viewFullProfile: 'Переглянути профіль',
    techStack: 'Технології',
    projects: 'Проєкти',
    diplomasAwards: 'Дипломи та нагороди',
    viewCertificate: 'Переглянути сертифікат',
    viewOnGitHub: 'Переглянути на GitHub',
    quickLinks: 'Швидкі посилання',
    contactUs: 'Контакти',

    followUs: 'Слідкуйте за нами',
    aboutText: "RZK Soft - це динамічна агенція з розробки програмного забезпечення, яка спеціалізується на створенні індивідуальних рішень для бізнесів будь-якого розміру. Маючи експертизу в сучасних технологіях та пристрасть до інновацій, ми перетворюємо ідеї на потужні цифрові досвіди.",
    missionTitle: "Наша Місія",
    missionText: "Надавати інноваційні програмні рішення, які дозволяють бізнесам та приватним особам досягати своїх цілей за допомогою передових технологій.",
    visionTitle: "Наше Бачення",
    visionText: "Стати провідним глобальним постачальником послуг з розробки програмного забезпечення, відомим завдяки якості, інноваціям та задоволенню клієнтів.",
    valuesTitle: "Наші Цінності",
    valuesText: "Якість, Інновації, Чесність та Успіх клієнта знаходяться в основі всього, що ми робимо.",

    ourProcess: "Наш процес",
    discoveryTitle: "Дослідження та Планування",
    discoveryText: "Збір вимог та створення дорожньої карти",
    designTitle: "Дизайн та Прототипування",
    designText: "Створення вайрфреймів та прототипів",
    developmentTitle: "Розробка",
    developmentText: "Реалізація коду за гнучкою методологією",
    testingTitle: "Тестування та Розгортання",
    testingText: "Забезпечення якості та запуск у продакшн",

    whyChooseTitle: "Чому обрати RZK Soft?",
    whyChoose1: "Експертна команда з різноманітними навичками",
    whyChoose2: "Передовий технологічний стек",
    whyChoose3: "Гнучка методологія розробки",
    whyChoose4: "Прозора комунікація",
    whyChoose5: "Конкурентні ціни",

    lookingForMore: "Шукаєте щось конкретне?",
    contactDesc: "Ми також спеціалізуємося на індивідуальних рішеннях. Зв'яжіться з нами, щоб обговорити ваші конкретні вимоги.",
    getInTouch: "Зв'яжіться з нами",

    meetOurTeam: "Наша команда",
    meetOurTeamDesc: "Наша талановита команда розробників, дизайнерів та стратегів працює разом, щоб досягати виняткових результатів.",
    rights: "Всі права захищені",
    footerDesc: "Ми надаємо виняткові рішення з розробки програмного забезпечення та дизайну, використовуючи передові технології та креативний підхід.",
    builtWith: "Створено з ❤️ за допомогою React, TypeScript та Tailwind CSS",

    filterAll: "Всі",
    filterDevelopers: "Розробники",
    filterDesigners: "Дизайнери",
    filterManagement: "Менеджмент",
    viewAllTeam: "Переглянути всю команду",
  },
  es: {
    homePage: 'Inicio',
    aboutUsPage: 'Sobre nosotros',
    servicesPage: 'Servicios',
    teamPage: 'Nuestro equipo',
    contactPage: 'Contacto',
    freePartLine1: 'Desarrollo Freelance',
    freePartLine2: 'Software y Diseño',
    weArePart: 'Somos RZK Soft, un equipo de programadores y diseñadores listos para ofrecer soluciones de primera calidad',
    hireUsPart: 'Contrátanos',
    firstPartOfBodySecondaryTextPage: 'Nuestra empresa se especializa en ofrecer servicios de desarrollo y diseño de software de alta calidad.',
    ourServicespage: 'Nuestros servicios',
    webDevelopmentPage: 'Desarrollo web',
    designPage: 'Diseño UI/UX',
    mobilePage: 'Desarrollo móvil',
    brandingPage: 'Branding',
    viewFullProfile: 'Ver perfil completo',
    techStack: 'Tecnologías',
    projects: 'Proyectos',
    diplomasAwards: 'Diplomas y premios',
    viewCertificate: 'Ver certificado',
    viewOnGitHub: 'Ver en GitHub',
    quickLinks: 'Enlaces rápidos',
    contactUs: 'Contáctanos',
    followUs: 'Síguenos',

    aboutText: "RZK Soft es una agencia dinámica de desarrollo de software especializada en crear soluciones personalizadas para empresas de todos los tamaños. Con experiencia en tecnologías modernas y pasión por la innovación, transformamos ideas en poderosas experiencias digitales.",
    missionTitle: "Nuestra Misión",
    missionText: "Entregar soluciones de software innovadoras que empoderen a empresas e individuos para alcanzar sus objetivos a través de tecnología de vanguardia.",
    visionTitle: "Nuestra Visión",
    visionText: "Convertirnos en un proveedor global líder de servicios de desarrollo de software, conocido por la excelencia, innovación y satisfacción del cliente.",
    valuesTitle: "Nuestros Valores",
    valuesText: "Calidad, Innovación, Integridad y Éxito del Cliente están en el centro de todo lo que hacemos.",

    ourProcess: "Nuestro Proceso",
    discoveryTitle: "Descubrimiento y Planificación",
    discoveryText: "Comprender requisitos y crear hoja de ruta",
    designTitle: "Diseño y Prototipado",
    designText: "Crear wireframes y prototipos de diseño",
    developmentTitle: "Desarrollo",
    developmentText: "Implementación de código con metodología ágil",
    testingTitle: "Pruebas y Despliegue",
    testingText: "Garantía de calidad y lanzamiento en producción",

    whyChooseTitle: "¿Por qué elegir RZK Soft?",
    whyChoose1: "Equipo experto con diversas habilidades",
    whyChoose2: "Stack tecnológico de vanguardia",
    whyChoose3: "Metodología ágil de desarrollo",
    whyChoose4: "Comunicación transparente",
    whyChoose5: "Precios competitivos",

    lookingForMore: "¿Buscas algo específico?",
    contactDesc: "También nos especializamos en soluciones personalizadas. Contáctanos para discutir tus requisitos específicos.",
    getInTouch: "Ponte en Contacto",

    meetOurTeam: "Conoce a Nuestro Equipo",
    meetOurTeamDesc: "Nuestro talentoso equipo de desarrolladores, diseñadores y estrategas trabaja en conjunto para ofrecer resultados excepcionales.",
    rights: "Todos los derechos reservados",
    footerDesc: "Ofrecemos soluciones excepcionales de desarrollo de software y diseño con tecnología de vanguardia y experiencia creativa.",
    builtWith: "Construido con ❤️ usando React, TypeScript y Tailwind CSS",

    filterAll: "Todos",
    filterDevelopers: "Desarrolladores",
    filterDesigners: "Diseñadores",
    filterManagement: "Gestión",
    viewAllTeam: "Ver Todo el Equipo",

    required: "Obligatorio",
    messageSent: "¡Mensaje enviado con éxito!",
    sendingError: "Error al enviar el mensaje. Por favor, inténtalo de nuevo.",
    sending: "Enviando..."
  },
  de: {
    homePage: 'Startseite',
    aboutUsPage: 'Über uns',
    servicesPage: 'Dienstleistungen',
    teamPage: 'Unser Team',
    contactPage: 'Kontakt',
    freePartLine1: 'Freelance Software',
    freePartLine2: 'Entwicklung & Design',
    weArePart: 'Wir sind RZK Soft, ein Team erfahrener Programmierer und Designer, bereit erstklassige Lösungen zu liefern',
    hireUsPart: 'Engagieren Sie uns',
    firstPartOfBodySecondaryTextPage: 'Unser Unternehmen ist auf hochwertige Softwareentwicklung und Design spezialisiert.',
    ourServicespage: 'Unsere Dienstleistungen',
    webDevelopmentPage: 'Webentwicklung',
    designPage: 'UI/UX Design',
    mobilePage: 'Mobile Entwicklung',
    brandingPage: 'Branding',
    viewFullProfile: 'Vollständiges Profil ansehen',
    techStack: 'Technologien',
    projects: 'Projekte',
    diplomasAwards: 'Diplome & Auszeichnungen',
    viewCertificate: 'Zertifikat ansehen',
    viewOnGitHub: 'Auf GitHub ansehen',
    quickLinks: 'Schnellzugriff',
    contactUs: 'Kontaktieren Sie uns',
    followUs: 'Folgen Sie uns',

    aboutText: "RZK Soft ist eine dynamische Softwareentwicklungsagentur, die sich auf maßgeschneiderte Lösungen für Unternehmen jeder Größe spezialisiert hat. Mit Expertise in modernen Technologien und Leidenschaft für Innovation verwandeln wir Ideen in kraftvolle digitale Erlebnisse.",
    missionTitle: "Unsere Mission",
    missionText: "Innovative Softwarelösungen zu liefern, die Unternehmen und Einzelpersonen befähigen, ihre Ziele durch modernste Technologie zu erreichen.",
    visionTitle: "Unsere Vision",
    visionText: "Ein führender globaler Anbieter von Softwareentwicklungsdiensten zu werden, bekannt für Exzellenz, Innovation und Kundenzufriedenheit.",
    valuesTitle: "Unsere Werte",
    valuesText: "Qualität, Innovation, Integrität und Kundenerfolg stehen im Mittelpunkt all unseres Handelns.",

    ourProcess: "Unser Prozess",
    discoveryTitle: "Entdeckung & Planung",
    discoveryText: "Anforderungen verstehen und Fahrplan erstellen",
    designTitle: "Design & Prototyping",
    designText: "Wireframes und Designprototypen erstellen",
    developmentTitle: "Entwicklung",
    developmentText: "Code-Implementierung mit agiler Methodik",
    testingTitle: "Testen & Bereitstellung",
    testingText: "Qualitätssicherung und Produktionsstart",

    whyChooseTitle: "Warum RZK Soft wählen?",
    whyChoose1: "Experten-Team mit vielfältigen Fähigkeiten",
    whyChoose2: "Modernster Technologie-Stack",
    whyChoose3: "Agile Entwicklungsmethodik",
    whyChoose4: "Transparente Kommunikation",
    whyChoose5: "Wettbewerbsfähige Preise",

    lookingForMore: "Suchen Sie etwas Bestimmtes?",
    contactDesc: "Wir spezialisieren uns auch auf maßgeschneiderte Lösungen. Kontaktieren Sie uns, um Ihre spezifischen Anforderungen zu besprechen.",
    getInTouch: "Kontakt Aufnehmen",

    meetOurTeam: "Unser Team",
    meetOurTeamDesc: "Unser talentiertes Team aus Entwicklern, Designern und Strategen arbeitet zusammen, um außergewöhnliche Ergebnisse zu liefern.",
    rights: "Alle Rechte vorbehalten",
    footerDesc: "Wir liefern herausragende Softwareentwicklungs- und Designlösungen mit modernster Technologie und kreativer Expertise.",
    builtWith: "Erstellt mit ❤️ unter Verwendung von React, TypeScript & Tailwind CSS",

    filterAll: "Alle",
    filterDevelopers: "Entwickler",
    filterDesigners: "Designer",
    filterManagement: "Management",
    viewAllTeam: "Ganzes Team Anzeigen",

    required: "Erforderlich",
    messageSent: "Nachricht erfolgreich gesendet!",
    sendingError: "Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut.",
    sending: "Wird gesendet..."
  },
  nl: {
    homePage: 'Home',
    aboutUsPage: 'Over ons',
    servicesPage: 'Diensten',
    teamPage: 'Ons team',
    contactPage: 'Contact',
    freePartLine1: 'Freelance Software',
    freePartLine2: 'Ontwikkeling & Design',
    weArePart: 'Wij zijn RZK Soft, een team van ervaren programmeurs en ontwerpers klaar om hoogwaardige oplossingen te leveren',
    hireUsPart: 'Huur ons in',
    firstPartOfBodySecondaryTextPage: 'Ons bedrijf is gespecialiseerd in hoogwaardige softwareontwikkeling en design.',
    ourServicespage: 'Onze diensten',
    webDevelopmentPage: 'Webontwikkeling',
    designPage: 'UI/UX Design',
    mobilePage: 'Mobiele ontwikkeling',
    brandingPage: 'Branding',
    viewFullProfile: 'Volledig profiel bekijken',
    techStack: 'Technologieën',
    projects: 'Projecten',
    diplomasAwards: 'Diploma’s & onderscheidingen',
    viewCertificate: 'Certificaat bekijken',
    viewOnGitHub: 'Bekijk op GitHub',
    quickLinks: 'Snelle links',
    contactUs: 'Neem contact op',
    followUs: 'Volg ons',

    aboutText: "RZK Soft is een dynamisch softwareontwikkelingsbureau gespecialiseerd in het creëren van op maat gemaakte oplossingen voor bedrijven van elke omvang. Met expertise in moderne technologieën en een passie voor innovatie transformeren we ideeën in krachtige digitale ervaringen.",
    missionTitle: "Onze Missie",
    missionText: "Innovatieve softwareoplossingen leveren die bedrijven en individuen in staat stellen hun doelen te bereiken via geavanceerde technologie.",
    visionTitle: "Onze Visie",
    visionText: "Een toonaangevende wereldwijde aanbieder van softwareontwikkelingsdiensten worden, bekend om uitmuntendheid, innovatie en klanttevredenheid.",
    valuesTitle: "Onze Waarden",
    valuesText: "Kwaliteit, Innovatie, Integriteit en Klantsucces staan centraal in alles wat we doen.",

    ourProcess: "Ons Proces",
    discoveryTitle: "Ontdekking & Planning",
    discoveryText: "Begrijp vereisten en maak roadmap",
    designTitle: "Ontwerp & Prototyping",
    designText: "Wireframes en ontwerp-prototypes maken",
    developmentTitle: "Ontwikkeling",
    developmentText: "Code implementatie met agile methodologie",
    testingTitle: "Testen & Implementatie",
    testingText: "Kwaliteitsborging en productie lancering",

    whyChooseTitle: "Waarom kiezen voor RZK Soft?",
    whyChoose1: "Expertteam met diverse vaardigheden",
    whyChoose2: "Geavanceerde technologiestack",
    whyChoose3: "Agile ontwikkelingsmethodologie",
    whyChoose4: "Transparante communicatie",
    whyChoose5: "Concurrerende prijzen",

    lookingForMore: "Zoekt u iets specifieks?",
    contactDesc: "We specialiseren ons ook in maatwerkoplossingen. Neem contact met ons op om uw specifieke vereisten te bespreken.",
    getInTouch: "Neem Contact Op",

    meetOurTeam: "Ons Team",
    meetOurTeamDesc: "Ons getalenteerde team van ontwikkelaars, ontwerpers en strategen werkt samen om uitzonderlijke resultaten te leveren.",
    rights: "Alle rechten voorbehouden",
    footerDesc: "Wij leveren uitzonderlijke softwareontwikkelings- en designoplossingen met geavanceerde technologie en creatieve expertise.",
    builtWith: "Gebouwd met ❤️ met React, TypeScript & Tailwind CSS",

    filterAll: "Alle",
    filterDevelopers: "Ontwikkelaars",
    filterDesigners: "Ontwerpers",
    filterManagement: "Management",
    viewAllTeam: "Volledig Team Bekijken",

    required: "Vereist",
    messageSent: "Bericht succesvol verzonden!",
    sendingError: "Fout bij verzenden van bericht. Probeer het opnieuw.",
    sending: "Verzenden..."
  }
};


export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('selectedLang') as Language;
    return saved || 'en';
  });

  useEffect(() => {
    localStorage.setItem('selectedLang', language);
  }, [language]);

  const translations = allTranslations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
