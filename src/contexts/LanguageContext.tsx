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
    
    companyTagline: 'Innovating Digital Solutions',
    freePartLine1: 'Flexible Software ',
    freePartLine2: 'Solutions for Modern Needs',
    weArePart: 'We are RZK Soft, a flexible collective of developers and designers. We don\'t just assign \"anyone\" to your project — we bring together the specific experts needed to build your unique solution',
    hireUsPart: 'Hire us',
    firstPartOfBodySecondaryTextPage: 'Our company specializes in providing high-quality software development and design services.',
    ourServicespage: 'Our Services',
    webDevelopmentPage: 'Web Development',
    designPage: 'UI/UX Design',
    mobilePage: 'Mobile Development',
    brandingPage: 'Branding',
    aiMlPage: "AI & Machine Learning",
    devOpsPage: "DevOps & Cloud",
    consultingPage: "Tech Consulting",
    maintenancePage: 'Maintenance & Support',
    viewFullProfile: 'View Full Profile',
    techStack: 'Tech Stack',
    projects: 'Projects',
    support: 'Support',
    satisfaction: 'Satisfaction', 
    yearsExperience: 'Years of Experience',
    diplomasAwards: 'Diplomas & Awards',
    viewCertificate: 'View Certificate',
    viewOnGitHub: 'View on GitHub',
    quickLinks: 'Quick Links',
    contactUs: 'Contact Us',
    followUs: 'Follow Us',
    // about
    aboutUsPage: "About Us",
    aboutText: "RZK Soft operates as a Dynamic Expert Collective. Instead of maintaining a rigid, generalist staff, we curate a flexible squad of top-tier specialists for every project. Whether you need an AI architect, a mobile virtuoso, or a game design visionary, we bring the exact expertise required to your table.",
    missionTitle: "Our Mission",
    missionText: "To build impactful digital products by matching specialized expertise with unique business challenges.",
    visionTitle: "Our Vision",
    visionText: "To be the most reliable, expert-driven collective for building high-performance digital solutions without the overhead of a traditional agency.",
    valuesTitle: "Our Values",
    valuesText: "Quality, Innovation, Integrity, and Client Success are at the core of everything we do.",

    // services  our process
    ourProcess: "Our Process",
    discoveryTitle: "Discovery & Planning",
    discoveryText: "Understand requirements and create roadmap",
    designTitle: "Design & Prototyping",
    designText: "Create wireframes and design prototypes",
    developmentTitle: "Development",
    developmentText: "Code implementation with agile methodology",
    testingTitle: "Testing & Deployment",
    testingText: "Quality assurance and production launch",
    // about  why choose
    whyChooseTitle: "Why Choose RZK Soft?",
    whyChoose1: "Hand-picked specialist teams",
    whyChoose2: "Flexible on-demand scaling",
    whyChoose3: "Advanced AI & deep-tech focus",
    whyChoose4: "Intuitive design for complex systems",
    whyChoose5: "Direct developer-to-client contact",

    // services  looking for more
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
    sending: "Sending...",


    newsPage: 'News',
    newsPageDesc: 'Stay updated with the latest news, announcements, and updates from RZK Soft.',
    readMore: 'Read More',
    backToNews: 'Back to News',
    publishedDate: 'Published',
    readTime: 'min read',
    by: 'By',
    category: 'Category',
    tags: 'Tags',
    allNews: 'All News',
    companyNews: 'Company News',
    technologyNews: 'Technology',
    teamUpdates: 'Team',
    tutorials: 'Tutorials',
    caseStudies: 'Case Studies',
    events: 'Events',
    filterByCategory: 'Filter by Category',
    searchNews: 'Search news...',
    noNewsFound: 'No news articles found.',
    shareArticle: 'Share Article',
    relatedArticles: 'Related Articles',
    viewAllNews: 'View All News'
    
  },
  uk: {
    homePage: 'Головна',
    servicesPage: 'Послуги',
    teamPage: 'Наша команда',
    contactPage: 'Контакти',
    newsPage: 'Новини',

    companyTagline: 'Інноваційні цифрові рішення',
    freePartLine1: 'Гнучкі програмні ',
    freePartLine2: 'рішення для сучасних потреб',
    weArePart: 'Ми — RZK Soft, гнучкий колектив розробників та дизайнерів. Ми не просто призначаємо «будь-кого» на ваш проект — ми збираємо саме тих експертів, які потрібні для створення вашого унікального рішення.',
    hireUsPart: 'Замовити',
    firstPartOfBodySecondaryTextPage: 'Наша компанія спеціалізується на наданні високоякісних послуг з розробки програмного забезпечення та дизайну.',
    ourServicespage: 'Наші послуги',
    webDevelopmentPage: 'Веб-розробка',
    designPage: 'UI/UX Дизайн',
    mobilePage: 'Мобільна розробка',
    brandingPage: 'Брендинг',
    aiMlPage: "AI та Машинне навчання",
    devOpsPage: "DevOps & Хмара",
    consultingPage: "Технологічний консалтинг",
    maintenancePage: 'Підтримка та обслуговування',
    viewFullProfile: 'Переглянути профіль',
    techStack: 'Технології',
    projects: 'Проекти',
    support: 'Підтримка',
    satisfaction: 'Задоволеність',
    yearsExperience: 'Років досвіду',
    diplomasAwards: 'Дипломи та нагороди',
    viewCertificate: 'Переглянути сертифікат',
    viewOnGitHub: 'Переглянути на GitHub',
    quickLinks: 'Швидкі посилання',
    contactUs: "Зв'язатися з нами",
    followUs: 'Слідкуйте за нами',

    // About
    aboutUsPage: "Про нас",
    aboutText: "RZK Soft працює як Динамічний Експертний Колектив. Замість того, щоб утримувати жорсткий штат генералістів, ми формуємо гнучкі групи топових спеціалістів під кожен проект. Потрібен архітектор ШІ, віртуоз мобільної розробки чи візіонер геймдизайну — ми надамо саме ту експертизу, яка потрібна.",
    missionTitle: "Наша місія",
    missionText: "Створювати значущі цифрові продукти, поєднуючи спеціалізовану експертизу з унікальними бізнес-викликами.",
    visionTitle: "Наше бачення",
    visionText: "Бути найнадійнішим, експертно-орієнтованим колективом для створення високопродуктивних цифрових рішень без накладних витрат традиційної агенції.",
    valuesTitle: "Наші цінності",
    valuesText: "Якість, інновації, чесність та успіх клієнта — основа всього, що ми робимо.",

    // Services & Our Process
    ourProcess: "Наш процес",
    discoveryTitle: "Аналіз & Планування",
    discoveryText: "Розуміння вимог та створення дорожньої карти",
    designTitle: "Дизайн & Прототипування",
    designText: "Створення варфреймів та дизайн-прототипів",
    developmentTitle: "Розробка",
    developmentText: "Кодова реалізація за методологією Agile",
    testingTitle: "Тестування & Запуск",
    testingText: "Контроль якості та запуск у продакшн",

    // About & Why Choose
    whyChooseTitle: "Чому обирають RZK Soft?",
    whyChoose1: "Команди спеціалістів, відібрані вручну",
    whyChoose2: "Гнучке масштабування за потреби",
    whyChoose3: "Фокус на AI та глибоких технологіях",
    whyChoose4: "Інтуїтивний дизайн для складних систем",
    whyChoose5: "Прямий контакт розробник-клієнт",

    // Services & Looking for more
    lookingForMore: "Шукаєте щось конкретне?",
    contactDesc: "Ми також спеціалізуємося на індивідуальних рішеннях. Зв'яжіться з нами, щоб обговорити ваші конкретні вимоги.",
    getInTouch: "Зв'язатися",

    // Team
    meetOurTeam: "Наша команда",
    meetOurTeamDesc: "Наша талановита команда розробників, дизайнерів та стратегів, які працюють разом, щоб досягти виняткових результатів.",
    filterAll: "Всі",
    filterDevelopers: "Розробники",
    filterDesigners: "Дизайнери",
    filterManagement: "Менеджмент",
    viewAllTeam: "Вся команда",

    // Footer
    rights: "Всі права захищені",
    footerDesc: "Створюємо виняткові рішення в розробці ПЗ та дизайні з використанням передових технологій та творчої експертизи.",
    builtWith: "Зроблено з ❤️ на React, TypeScript & Tailwind CSS",

    // Contact Form
    required: "Обов'язково",
    messageSent: "Повідомлення успішно відправлено!",
    sendingError: "Помилка відправлення. Будь ласка, спробуйте ще раз.",
    sending: "Надсилається...",

    // News
    newsPageDesc: 'Будьте в курсі останніх новин, анонсів та оновлень від RZK Soft.',
    readMore: 'Читати далі',
    backToNews: 'Назад до новин',
    publishedDate: 'Опубліковано',
    readTime: 'хв читання',
    by: 'Автор',
    category: 'Категорія',
    tags: 'Теги',
    allNews: 'Всі новини',
    companyNews: 'Новини компанії',
    technologyNews: 'Технології',
    teamUpdates: 'Команда',
    tutorials: 'Туторіали',
    caseStudies: 'Кейси',
    events: 'Події',
    filterByCategory: 'Фільтр за категорією',
    searchNews: 'Пошук новин...',
    noNewsFound: 'Новини не знайдено.',
    shareArticle: 'Поділитися статтею',
    relatedArticles: 'Схожі статті',
    viewAllNews: 'Всі новини'
  },
  es: {
    homePage: 'Inicio',
    servicesPage: 'Servicios',
    teamPage: 'Nuestro Equipo',
    contactPage: 'Contacto',
    newsPage: 'Noticias',

    companyTagline: 'Innovando en Soluciones Digitales',
    freePartLine1: 'Software Flexible ',
    freePartLine2: 'para Necesidades Modernas',
    weArePart: 'Somos RZK Soft, un colectivo flexible de desarrolladores y diseñadores. No asignamos a "cualquiera" a tu proyecto — reunimos a los expertos específicos necesarios para construir tu solución única.',
    hireUsPart: 'Contrátanos',
    firstPartOfBodySecondaryTextPage: 'Nuestra empresa se especializa en proporcionar servicios de desarrollo de software y diseño de alta calidad.',
    ourServicespage: 'Nuestros Servicios',
    webDevelopmentPage: 'Desarrollo Web',
    designPage: 'Diseño UI/UX',
    mobilePage: 'Desarrollo Móvil',
    brandingPage: 'Branding',
    aiMlPage: "IA & Aprendizaje Automático",
    devOpsPage: "DevOps & Cloud",
    consultingPage: "Consultoría Técnica",
    maintenancePage: 'Mantenimiento & Soporte',
    viewFullProfile: 'Ver Perfil Completo',
    techStack: 'Tecnologías',
    projects: 'Proyectos',
    support: 'Soporte',
    satisfaction: 'Satisfacción',
    yearsExperience: 'Años de Experiencia',
    diplomasAwards: 'Diplomas & Premios',
    viewCertificate: 'Ver Certificado',
    viewOnGitHub: 'Ver en GitHub',
    quickLinks: 'Enlaces Rápidos',
    contactUs: "Contáctanos",
    followUs: 'Síguenos',

    // About
    aboutUsPage: "Nosotros",
    aboutText: "RZK Soft opera como un Colectivo Dinámico de Expertos. En lugar de mantener un equipo rígido y generalista, seleccionamos un grupo flexible de especialistas de primer nivel para cada proyecto. Ya necesites un arquitecto de IA, un virtuoso del móvil o un visionario del diseño de juegos, aportamos la experiencia exacta que requieres.",
    missionTitle: "Nuestra Misión",
    missionText: "Construir productos digitales impactantes combinando experiencia especializada con desafíos empresariales únicos.",
    visionTitle: "Nuestra Visión",
    visionText: "Ser el colectivo más confiable y guiado por expertos para construir soluciones digitales de alto rendimiento sin la sobrecarga de una agencia tradicional.",
    valuesTitle: "Nuestros Valores",
    valuesText: "Calidad, Innovación, Integridad y Éxito del Cliente son el núcleo de todo lo que hacemos.",

    // Services & Our Process
    ourProcess: "Nuestro Proceso",
    discoveryTitle: "Descubrimiento & Planificación",
    discoveryText: "Comprender requisitos y crear hoja de ruta",
    designTitle: "Diseño & Prototipado",
    designText: "Crear wireframes y prototipos de diseño",
    developmentTitle: "Desarrollo",
    developmentText: "Implementación de código con metodología ágil",
    testingTitle: "Pruebas & Despliegue",
    testingText: "Control de calidad y lanzamiento a producción",

    // About & Why Choose
    whyChooseTitle: "¿Por qué elegir RZK Soft?",
    whyChoose1: "Equipos de especialistas seleccionados a mano",
    whyChoose2: "Escalado flexible bajo demanda",
    whyChoose3: "Enfoque avanzado en IA y deep-tech",
    whyChoose4: "Diseño intuitivo para sistemas complejos",
    whyChoose5: "Contacto directo desarrollador-cliente",

    // Services & Looking for more
    lookingForMore: "¿Buscas algo específico?",
    contactDesc: "También nos especializamos en soluciones personalizadas. Contáctanos para discutir tus requisitos específicos.",
    getInTouch: "Ponerse en contacto",

    // Team
    meetOurTeam: "Conoce a nuestro equipo",
    meetOurTeamDesc: "Nuestro talentoso equipo de desarrolladores, diseñadores y estrategas trabajando juntos para ofrecer resultados excepcionales.",
    filterAll: "Todos",
    filterDevelopers: "Desarrolladores",
    filterDesigners: "Diseñadores",
    filterManagement: "Gestión",
    viewAllTeam: "Ver equipo completo",

    // Footer
    rights: "Todos los derechos reservados",
    footerDesc: "Ofrecemos soluciones excepcionales de desarrollo de software y diseño con tecnología de vanguardia y experiencia creativa.",
    builtWith: "Construido con ❤️ usando React, TypeScript & Tailwind CSS",

    // Contact Form
    required: "Requerido",
    messageSent: "¡Mensaje enviado con éxito!",
    sendingError: "Error al enviar el mensaje. Por favor, inténtalo de nuevo.",
    sending: "Enviando...",

    // News
    newsPageDesc: 'Mantente actualizado con las últimas noticias, anuncios y actualizaciones de RZK Soft.',
    readMore: 'Leer más',
    backToNews: 'Volver a Noticias',
    publishedDate: 'Publicado',
    readTime: 'min de lectura',
    by: 'Por',
    category: 'Categoría',
    tags: 'Etiquetas',
    allNews: 'Todas las noticias',
    companyNews: 'Noticias de la empresa',
    technologyNews: 'Tecnología',
    teamUpdates: 'Equipo',
    tutorials: 'Tutoriales',
    caseStudies: 'Casos de estudio',
    events: 'Eventos',
    filterByCategory: 'Filtrar por categoría',
    searchNews: 'Buscar noticias...',
    noNewsFound: 'No se encontraron artículos de noticias.',
    shareArticle: 'Compartir artículo',
    relatedArticles: 'Artículos relacionados',
    viewAllNews: 'Ver todas las noticias'
  },
  de: {
    homePage: 'Startseite',
    servicesPage: 'Leistungen',
    teamPage: 'Unser Team',
    contactPage: 'Kontakt',
    newsPage: 'Neuigkeiten',

    companyTagline: 'Innovative digitale Lösungen',
    freePartLine1: 'Flexible Software-',
    freePartLine2: 'Lösungen für moderne Anforderungen',
    weArePart: 'Wir sind RZK Soft, ein flexibles Kollektiv von Entwicklern und Designern. Wir weisen Ihrem Projekt nicht einfach "irgendjemanden" zu – wir bringen die spezifischen Experten zusammen, die benötigt werden, um Ihre einzigartige Lösung zu erstellen.',
    hireUsPart: 'Uns beauftragen',
    firstPartOfBodySecondaryTextPage: 'Unser Unternehmen ist spezialisiert auf die Bereitstellung hochwertiger Dienstleistungen in den Bereichen Softwareentwicklung und Design.',
    ourServicespage: 'Unsere Leistungen',
    webDevelopmentPage: 'Webentwicklung',
    designPage: 'UI/UX Design',
    mobilePage: 'Mobile Entwicklung',
    brandingPage: 'Branding',
    aiMlPage: "KI & Maschinelles Lernen",
    devOpsPage: "DevOps & Cloud",
    consultingPage: "Technische Beratung",
    maintenancePage: 'Wartung & Support',
    viewFullProfile: 'Vollständiges Profil ansehen',
    techStack: 'Tech Stack',
    projects: 'Projekte',
    support: 'Support',
    satisfaction: 'Zufriedenheit',
    yearsExperience: 'Jahre Erfahrung',
    diplomasAwards: 'Diplome & Auszeichnungen',
    viewCertificate: 'Zertifikat ansehen',
    viewOnGitHub: 'Auf GitHub ansehen',
    quickLinks: 'Quick Links',
    contactUs: "Kontaktieren Sie uns",
    followUs: 'Folgen Sie uns',

    // About
    aboutUsPage: "Über uns",
    aboutText: "RZK Soft agiert als ein Dynamisches Expertenkollektiv. Anstatt einen starren, generalistischen Stab zu unterhalten, stellen wir für jedes Projekt ein flexibles Team aus Top-Spezialisten zusammen. Ob Sie einen KI-Architekten, einen Mobile-Virtuosen oder einen visionären Spieldesigner benötigen – wir bringen genau die erforderliche Expertise an Ihren Tisch.",
    missionTitle: "Unsere Mission",
    missionText: "Wirksame digitale Produkte zu entwickeln, indem wir spezialisiertes Fachwissen mit einzigartigen geschäftlichen Herausforderungen verbinden.",
    visionTitle: "Unsere Vision",
    visionText: "Das zuverlässigste, expertengeführte Kollektiv für den Aufbau leistungsstarker digitaler Lösungen zu sein – ohne den Overhead einer traditionellen Agentur.",
    valuesTitle: "Unsere Werte",
    valuesText: "Qualität, Innovation, Integrität und Kundenerfolg stehen im Mittelpunkt all unserer Tätigkeiten.",

    // Services & Our Process
    ourProcess: "Unser Prozess",
    discoveryTitle: "Analyse & Planung",
    discoveryText: "Anforderungen verstehen und Roadmap erstellen",
    designTitle: "Design & Prototyping",
    designText: "Wireframes und Design-Prototypen erstellen",
    developmentTitle: "Entwicklung",
    developmentText: "Code-Implementierung mit agiler Methodik",
    testingTitle: "Testing & Deployment",
    testingText: "Qualitätssicherung und Produktionsstart",

    // About & Why Choose
    whyChooseTitle: "Warum RZK Soft wählen?",
    whyChoose1: "Handverlesene Spezialistenteams",
    whyChoose2: "Flexibles On-Demand-Scaling",
    whyChoose3: "Fokus auf fortschrittliche KI & Deep-Tech",
    whyChoose4: "Intuitives Design für komplexe Systeme",
    whyChoose5: "Direkter Entwickler-Kunde-Kontakt",

    // Services & Looking for more
    lookingForMore: "Suchen Sie etwas Bestimmtes?",
    contactDesc: "Wir sind auch auf individuelle Lösungen spezialisiert. Kontaktieren Sie uns, um Ihre spezifischen Anforderungen zu besprechen.",
    getInTouch: "Kontakt aufnehmen",

    // Team
    meetOurTeam: "Unser Team",
    meetOurTeamDesc: "Unser talentiertes Team aus Entwicklern, Designern und Strategen arbeitet zusammen, um außergewöhnliche Ergebnisse zu liefern.",
    filterAll: "Alle",
    filterDevelopers: "Entwickler",
    filterDesigners: "Designer",
    filterManagement: "Management",
    viewAllTeam: "Gesamtes Team ansehen",

    // Footer
    rights: "Alle Rechte vorbehalten",
    footerDesc: "Wir liefern außergewöhnliche Softwareentwicklungs- und Designlösungen mit modernster Technologie und kreativer Expertise.",
    builtWith: "Gebaut mit ❤️ mit React, TypeScript & Tailwind CSS",

    // Contact Form
    required: "Erforderlich",
    messageSent: "Nachricht erfolgreich gesendet!",
    sendingError: "Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut.",
    sending: "Wird gesendet...",

    // News
    newsPageDesc: 'Bleiben Sie auf dem Laufenden mit den neuesten Nachrichten, Ankündigungen und Updates von RZK Soft.',
    readMore: 'Weiterlesen',
    backToNews: 'Zurück zu den Neuigkeiten',
    publishedDate: 'Veröffentlicht',
    readTime: 'Min. Lesezeit',
    by: 'Von',
    category: 'Kategorie',
    tags: 'Tags',
    allNews: 'Alle Neuigkeiten',
    companyNews: 'Firmennachrichten',
    technologyNews: 'Technologie',
    teamUpdates: 'Team',
    tutorials: 'Tutorials',
    caseStudies: 'Fallstudien',
    events: 'Events',
    filterByCategory: 'Nach Kategorie filtern',
    searchNews: 'Nachrichten suchen...',
    noNewsFound: 'Keine Nachrichten gefunden.',
    shareArticle: 'Artikel teilen',
    relatedArticles: 'Ähnliche Artikel',
    viewAllNews: 'Alle Neuigkeiten ansehen'
  },
  nl: {
    homePage: 'Home',
    servicesPage: 'Diensten',
    teamPage: 'Ons Team',
    contactPage: 'Contact',
    newsPage: 'Nieuws',

    companyTagline: 'Digitale oplossingen innoveren',
    freePartLine1: 'Flexibele software',
    freePartLine2: 'oplossingen voor moderne behoeften',
    weArePart: 'Wij zijn RZK Soft, een flexibele groep ontwikkelaars en ontwerpers. We wijzen niet zomaar "iemand" toe aan uw project — we brengen de specifieke experts samen die nodig zijn om uw unieke oplossing te bouwen.',
    hireUsPart: 'Huur ons in',
    firstPartOfBodySecondaryTextPage: 'Ons bedrijf is gespecialiseerd in het leveren van hoogwaardige diensten voor softwareontwikkeling en design.',
    ourServicespage: 'Onze Diensten',
    webDevelopmentPage: 'Webontwikkeling',
    designPage: 'UI/UX Ontwerp',
    mobilePage: 'Mobiele Ontwikkeling',
    brandingPage: 'Branding',
    aiMlPage: "AI & Machine Learning",
    devOpsPage: "DevOps & Cloud",
    consultingPage: "Tech Consultancy",
    maintenancePage: 'Onderhoud & Ondersteuning',
    viewFullProfile: 'Volledig profiel bekijken',
    techStack: 'Tech Stack',
    projects: 'Projecten',
    support: 'Ondersteuning',
    satisfaction: 'Tevredenheid',
    yearsExperience: 'Jaar ervaring',
    diplomasAwards: 'Diplomas & Prijzen',
    viewCertificate: 'Certificaat bekijken',
    viewOnGitHub: 'Bekijk op GitHub',
    quickLinks: 'Snelle links',
    contactUs: "Neem contact op",
    followUs: 'Volg ons',

    // About
    aboutUsPage: "Over ons",
    aboutText: "RZK Soft opereert als een Dynamisch Expert Collectief. In plaats van een starre, generalistische staf te onderhouden, stellen we voor elk project een flexibel team van top specialisten samen. Of u nu een AI-architect, een mobiele virtuoos of een visionair gamedesigner nodig heeft – wij brengen de exact benodigde expertise aan tafel.",
    missionTitle: "Onze Missie",
    missionText: "Impactvolle digitale producten bouwen door gespecialiseerde expertise te koppelen aan unieke bedrijfsuitdagingen.",
    visionTitle: "Onze Visie",
    visionText: "Het meest betrouwbare, expert-gedreven collectief zijn voor het bouwen van hoogwaardige digitale oplossingen zonder de overhead van een traditioneel bureau.",
    valuesTitle: "Onze Waarden",
    valuesText: "Kwaliteit, innovatie, integriteit en klantsucces staan centraal in alles wat we doen.",

    // Services & Our Process
    ourProcess: "Ons Proces",
    discoveryTitle: "Onderzoek & Planning",
    discoveryText: "Vereisten begrijpen en roadmap maken",
    designTitle: "Ontwerp & Prototyping",
    designText: "Wireframes en ontwerpprototypes maken",
    developmentTitle: "Ontwikkeling",
    developmentText: "Code-implementatie met agile methodologie",
    testingTitle: "Testen & Implementatie",
    testingText: "Kwaliteitsborging en productielancering",

    // About & Why Choose
    whyChooseTitle: "Waarom kiezen voor RZK Soft?",
    whyChoose1: "Handgeplukte specialistenteams",
    whyChoose2: "Flexibele schaling op aanvraag",
    whyChoose3: "Focus op geavanceerde AI & deep-tech",
    whyChoose4: "Intuïtief ontwerp voor complexe systemen",
    whyChoose5: "Direct contact tussen ontwikkelaar en klant",

    // Services & Looking for more
    lookingForMore: "Zoekt u iets specifieks?",
    contactDesc: "We zijn ook gespecialiseerd in maatwerkoplossingen. Neem contact op om uw specifieke wensen te bespreken.",
    getInTouch: "Neem contact op",

    // Team
    meetOurTeam: "Ons Team",
    meetOurTeamDesc: "Ons getalenteerde team van ontwikkelaars, ontwerpers en strategen werkt samen om buitengewone resultaten te leveren.",
    filterAll: "Alle",
    filterDevelopers: "Ontwikkelaars",
    filterDesigners: "Ontwerpers",
    filterManagement: "Management",
    viewAllTeam: "Volledig team bekijken",

    // Footer
    rights: "Alle rechten voorbehouden",
    footerDesc: "We leveren uitzonderlijke softwareontwikkelings- en designoplossingen met geavanceerde technologie en creatieve expertise.",
    builtWith: "Gebouwd met ❤️ met React, TypeScript & Tailwind CSS",

    // Contact Form
    required: "Verplicht",
    messageSent: "Bericht succesvol verzonden!",
    sendingError: "Fout bij verzenden bericht. Probeer het opnieuw.",
    sending: "Verzenden...",

    // News
    newsPageDesc: 'Blijf op de hoogte van het laatste nieuws, aankondigingen en updates van RZK Soft.',
    readMore: 'Lees Meer',
    backToNews: 'Terug naar Nieuws',
    publishedDate: 'Gepubliceerd',
    readTime: 'min. leestijd',
    by: 'Door',
    category: 'Categorie',
    tags: 'Tags',
    allNews: 'Al het nieuws',
    companyNews: 'Bedrijfsnieuws',
    technologyNews: 'Technologie',
    teamUpdates: 'Team',
    tutorials: 'Tutorials',
    caseStudies: 'Casestudy\'s',
    events: 'Evenementen',
    filterByCategory: 'Filteren op categorie',
    searchNews: 'Zoek nieuws...',
    noNewsFound: 'Geen nieuwsberichten gevonden.',
    shareArticle: 'Deel artikel',
    relatedArticles: 'Gerelateerde artikelen',
    viewAllNews: 'Bekijk al het nieuws'
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
