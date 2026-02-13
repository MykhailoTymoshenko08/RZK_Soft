export interface NewsArticle {
  id: number;
  title: string;
  titleUk: string;
  titleEs: string;
  titleDe: string;
  titleNl: string;
  excerpt: string;
  excerptUk: string;
  excerptEs: string;
  excerptDe: string;
  excerptNl: string;
  content: string;
  contentUk: string;
  contentEs: string;
  contentDe: string;
  contentNl: string;
  date: string;
  author: string;
  category: string;
  categoryUk: string;
  categoryEs: string;
  categoryDe: string;
  categoryNl: string;
  image?: string;
  readTime: number; // in minutes
  tags: string[];
}

export const newsData: NewsArticle[] = [
  {
    "id": 4,
    "title": "AI Fusion Chat: Beyond a Single Model Approach",
    "titleUk": "AI Fusion Chat: поза межами підходу одного ШІ-моделі",
    "titleEs": "AI Fusion Chat: más allá del enfoque de un solo modelo",
    "titleDe": "AI Fusion Chat: Jenseits eines einzelnen Modellansatzes",
    "titleNl": "AI Fusion Chat: Verder dan een aanpak met één model",
    "excerpt": "Discover how our Multi-LLM Judge Aggregator eliminates bias and provides real-time, verified information.",
    "excerptUk": "Дізнайтеся, як наш агрегатор Multi-LLM Judge усуває упередженість і надає перевірену інформацію в режимі реального часу.",
    "excerptEs": "Descubra cómo nuestro agregador Multi-LLM Judge elimina los sesgos y proporciona información verificada en tiempo real.",
    "excerptDe": "Erfahren Sie, wie unser Multi-LLM Judge Aggregator Voreingenommenheit eliminiert und verifizierte Informationen in Echtzeit bereitstellt.",
    "excerptNl": "Ontdek hoe onze Multi-LLM Judge Aggregator vooroordelen elimineert en realtime, geverifieerde informatie biedt.",
    "content": "In the rapidly evolving world of artificial intelligence, relying on a single Large Language Model (LLM) can often lead to biased answers or 'hallucinations.' To solve this, RZK Soft developed the AI Fusion Chat—a sophisticated Multi-LLM Judge Aggregator. \n\nAt its core, the platform uses an 'LLM-as-a-Judge' architecture. When a user asks a question, multiple top-tier models process the query simultaneously. A separate, high-reasoning model then analyzes all responses, cross-referencing facts and selecting or synthesizing the most accurate answer. \n\nBut we didn't stop there. AI Fusion Chat is equipped with two powerful features: \n1. Advanced RAG (Retrieval-Augmented Generation): Users can upload complex PDF documents, and the system will index and search through them to provide answers strictly based on the provided files. \n2. Real-Time Web Integration: Through the Tavily Search API, the AI can 'browse' the live internet to verify facts or fetch the latest news that wasn't included in its training data. \n\nBuilt with Python, LangChain, and ChromaDB, this project serves as a foundation for how RZK Soft approaches business automation: by ensuring data accuracy and providing a transparent, multi-perspective AI experience.",
    "contentUk": "У світі штучного інтелекту, що стрімко розвивається, покладання на одну велику мовну модель (LLM) часто призводить до упереджених відповідей або 'галюцинацій'. Для вирішення цієї проблеми RZK Soft розробила AI Fusion Chat — складний агрегатор з архітектурою Multi-LLM Judge. \n\nВ основі платформи лежить принцип 'LLM-як-суддя'. Коли користувач ставить запитання, кілька топових моделей обробляють запит одночасно. Окрема модель з високим рівнем логічного мислення аналізує всі отримані відповіді, перевіряє факти та обирає або синтезує найбільш точний результат. \n\nАле ми пішли далі. AI Fusion Chat оснащений двома потужними функціями: \n1. Просунутий RAG (Retrieval-Augmented Generation): користувачі можуть завантажувати складні PDF-документи, а система індексує їх і проводить пошук, надаючи відповіді суворо на основі наданих файлів. \n2. Інтеграція з вебом у реальному часі: завдяки Tavily Search API, ШІ може 'переглядати' живий інтернет для перевірки фактів або пошуку останніх новин, яких не було в його навчальних даних. \n\nПобудований на Python, LangChain та ChromaDB, цей проєкт є фундаментом того, як RZK Soft підходить до автоматизації бізнесу: гарантуючи точність даних та забезпечуючи прозорий, багатогранний досвід роботи з ШІ.",
    "contentEs": "En el mundo de la inteligencia artificial, confiar en un solo modelo puede generar respuestas sesgadas. RZK Soft desarrolló AI Fusion Chat, un agregador Multi-LLM Judge que utiliza varios modelos simultáneamente. Un 'modelo juez' analiza las respuestas y selecciona la más precisa. Además, incluye RAG para procesar PDFs y búsqueda en tiempo real con la API de Tavily. Construido con Python y LangChain, este proyecto garantiza la precisión de los datos para las empresas.",
    "contentDe": "In der KI-Welt kann die Abhängigkeit von einem einzigen Modell zu voreingenommenen Antworten führen. RZK Soft hat den AI Fusion Chat entwickelt – einen Multi-LLM-Judge-Aggregator. Ein 'Richter-Modell' analysiert Antworten verschiedener KIs und wählt die genaueste aus. Mit RAG-Funktionen für PDFs und Echtzeit-Websuche via Tavily bietet das System höchste Datenpräzision. Dieses auf Python und LangChain basierende Projekt ist unser Standard für zuverlässige KI-Automatisierung.",
    "contentNl": "In de wereld van AI kan het vertrouwen op één model leiden tot onnauwkeurige antwoorden. RZK Soft heeft AI Fusion Chat ontwikkeld, een Multi-LLM Judge-aggregator. Een 'jurymodel' analyseert antwoorden van verschillende modellen en kiest de meest accurate. Het bevat ook RAG voor PDF-verwerking en realtime zoeken via de Tavily API. Dit project, gebouwd met Python en LangChain, vormt de basis voor hoe wij betrouwbare AI-oplossingen voor bedrijven bouwen.",
    "date": "2026-02-10",
    "author": "Mykhailo Tymoshenko",
    "category": "Case Studies",
    "categoryUk": "Кейси",
    "categoryEs": "Casos de estudio",
    "categoryDe": "Fallstudien",
    "categoryNl": "Casestudies",
    "image": "/images/news/imgId4.jpg",
    "readTime": 6,
    "tags": ["AI", "LLM", "RAG", "Python", "Innovation"]
  },
  {
    "id": 3,
    "title": "Understanding RAG: The Key to Smarter AI Agents",
    "titleUk": "Розуміння RAG: Ключ до розумніших AI-агентів",
    "titleEs": "Entendiendo RAG: La clave para agentes de IA más inteligentes",
    "titleDe": "RAG verstehen: Der Schlüssel zu klügeren KI-Agenten",
    "titleNl": "RAG begrijpen: de sleutel tot slimmere AI-agenten",
    "excerpt": "Learn how Retrieval-Augmented Generation allows AI to process your private data securely and accurately.",
    "excerptUk": "Дізнайтеся, як RAG дозволяє штучному інтелекту безпечно та точно обробляти ваші приватні дані.",
    "excerptEs": "Aprenda cómo la Generación Aumentada por Recuperación permite que la IA procese sus datos privados de forma segura.",
    "excerptDe": "Erfahren Sie, wie RAG es der KI ermöglicht, Ihre privaten Daten sicher und präzise zu verarbeiten.",
    "excerptNl": "Leer hoe Retrieval-Augmented Generation AI in staat stelt uw privégegevens veilig en nauwkeurig te verwerken.",
    "content": "Why do standard LLMs sometimes hallucinate? The answer is a lack of context. Retrieval-Augmented Generation (RAG) solves this by connecting the AI to a specific database (like your PDFs or company docs). Instead of relying only on pre-trained knowledge, the AI 'looks up' relevant info first. At RZK Soft, we use this tech in our Fusion Chat to provide high-precision answers based on real-time data.",
    "contentUk": "Чому стандартні LLM інколи 'галюцинують'? Відповідь — брак контексту. RAG вирішує це, підключаючи AI до конкретної бази даних (наприклад, ваших PDF або документів компанії). Замість того, щоб покладатися лише на заздалегідь навчені знання, AI спочатку 'шукає' потрібну інформацію. В RZK Soft ми використовуємо цю технологію в нашому Fusion Chat для надання високоточних відповідей на основі реальних даних.",
    "contentEs": "¿Por qué los LLM estándar a veces alucinan? La respuesta es la falta de contexto. RAG soluciona esto conectando la IA a una base de datos específica. En RZK Soft, utilizamos esta tecnología en nuestro Fusion Chat para proporcionar respuestas de alta precisión basadas en datos en tiempo real.",
    "contentDe": "Warum halluzinieren Standard-LLMs manchmal? Die Antwort ist mangelnder Kontext. RAG löst dies, indem es die KI mit einer spezifischen Datenbank verbindet. Bei RZK Soft nutzen wir diese Technologie in unserem Fusion Chat, um hochpräzise Antworten basierend auf Echtzeitdaten zu liefern.",
    "contentNl": "Waarom hallucineren standaard LLM's soms? Het antwoord is een gebrek aan context. RAG lost dit op door de AI te verbinden met een specifieke database. Bij RZK Soft gebruiken we deze technologie in onze Fusion Chat om uiterst nauwkeurige antwoorden te geven op basis van realtime gegevens.",
    "date": "2026-02-07",
    "author": "Mykhailo Tymoshenko",
    "category": "Tutorials",
    "categoryUk": "Навчальні матеріали",
    "categoryEs": "Tutoriales",
    "categoryDe": "Tutorials",
    "categoryNl": "Tutorials",
    "image": "/images/news/img_id3.png",
    "readTime": 4,
    "tags": ["AI", "RAG", "LLM", "Guide", "Software Development"]
  },
  {
    "id": 2,
    "title": "Major Update: News Section & Content Refresh",
    "titleUk": "Велике оновлення: розділ новин та оновлення контенту",
    "titleEs": "Gran actualización: sección de noticias y actualización de contenido",
    "titleDe": "Großes Update: News-Bereich & Inhaltsaktualisierung",
    "titleNl": "Grote update: Nieuwssectie & Content-update",
    "excerpt": "On February 7, we launched our News hub, updated core texts, and improved multi-language support.",
    "excerptUk": "7 лютого ми запустили хаб новин, оновили основні тексти та покращили багатомовну підтримку.",
    "excerptEs": "El 7 de febrero lanzamos nuestro centro de noticias, actualizamos los textos principales y mejoramos el soporte multilingüe.",
    "excerptDe": "Am 7. Februar haben wir unser News-Hub gestartet, die Kerntexte aktualisiert und die mehrsprachige Unterstützung verbessert.",
    "excerptNl": "Op 7 februari lanceerden we onze nieuwshub, werkten we de kernteksten bij en verbeterden we de meertalige ondersteuning.",
    "content": "Progress never stops. On February 7, 2026, we officially added the 'News' section to keep our community updated. We also refined our landing page copy to better reflect our boutique agency model and expanded translations across several sections. We are just a few steps away from the 'ideal' version of our platform, ensuring every visitor gets a seamless, localized experience.",
    "contentUk": "Прогрес не зупиняється. 7 лютого 2026 року ми офіційно додали розділ 'Новини', щоб тримати нашу спільноту в курсі подій. Ми також вдосконалили тексти головної сторінки, щоб краще відобразити нашу модель бутік-агенції, та розширили переклади у кількох розділах. Ми лише в кількох кроках від 'ідеальної' версії нашої платформи, що забезпечить кожному відвідувачу бездоганний локалізований досвід.",
    "contentEs": "El progreso nunca se detiene. El 7 de febrero de 2026, agregamos oficialmente la sección de 'Noticias'. También refinamos los textos de nuestra página de inicio para reflejar mejor nuestro modelo de agencia boutique y ampliamos las traducciones en varias secciones. Estamos a solo unos pasos de la versión 'ideal' de nuestra plataforma.",
    "contentDe": "Der Fortschritt steht nie still. Am 7. Februar 2026 haben wir offiziell den Bereich 'News' hinzugefügt. Wir haben auch die Texte unserer Landingpage verfeinert, um unser Boutique-Agenturmodell besser widerzuspiegeln, und die Übersetzungen in mehreren Abschnitten erweitert. Wir sind nur noch wenige Schritte von der 'idealen' Version unserer Plattform entfernt.",
    "contentNl": "De vooruitgang stopt nooit. Op 7 februari 2026 hebben we officieel de sectie 'Nieuws' toegevoegd. We hebben ook de teksten op onze landingspagina verfijnd om ons boutique-bureaumodel beter te weerspiegelen en de vertalingen in verschillende secties uitgebreid. We zijn nog maar een paar stappen verwijderd van de 'ideale' versie van ons platform.",
    "date": "2026-02-07",
    "author": "Mykhailo Tymoshenko",
    "category": "Company News",
    "categoryUk": "Новини компанії",
    "categoryEs": "Noticias de la empresa",
    "categoryDe": "Unternehmensnachrichten",
    "categoryNl": "Bedrijfsnieuws",
    "image": "/images/news/update-v1-5.jpg",
    "readTime": 2,
    "tags": ["Update", "UI/UX", "Localization", "Milestone"]
  },
  {
    "id": 1,
    "title": "RZK Soft Goes Live: Our Digital Journey Begins",
    "titleUk": "RZK Soft виходить у мережу: початок нашого цифрового шляху",
    "titleEs": "RZK Soft entra en línea: comienza nuestro viaje digital",
    "titleDe": "RZK Soft geht online: Unsere digitale Reise beginnt",
    "titleNl": "RZK Soft gaat live: Onze digitale reis begint",
    "excerpt": "From local build to global deployment—RZK Soft is officially online. Learn about our mission and future plans.",
    "excerptUk": "Від локальної збірки до глобального релізу — RZK Soft офіційно в мережі. Дізнайтеся про нашу місію та плани на майбутнє.",
    "excerptEs": "Desde la construcción local hasta el despliegue global: RZK Soft está oficialmente en línea. Conozca nuestra misión y planes futuros.",
    "excerptDe": "Vom lokalen Build bis zum globalen Deployment – RZK Soft ist offiziell online. Erfahren Sie mehr über unsere Mission und Zukunftspläne.",
    "excerptNl": "Van lokale build tot wereldwijde implementatie - RZK Soft is officieel online. Lees meer over onze missie en toekomstplannen.",
    "content": "On February 4, 2026, the alpha version of RZK Soft was born. Just 24 hours later, on February 5, we successfully deployed to GitHub and Vercel. RZK Soft isn't just another agency; it's a dynamic collective of engineers and designers. Our goal is to provide high-end, specialized tech solutions—from AI and deep-tech to intuitive UI/UX—without the corporate bloat. In the coming months, we plan to expand our portfolio, showcase our Multi-LLM projects, and continue building specialized tools that solve real problems.",
    "contentUk": "4 лютого 2026 року народилася альфа-версія сайту RZK Soft. Всього через 24 години, 5 лютого, ми успішно захостили його на GitHub та Vercel. RZK Soft — це не просто чергова агенція; це динамічне об'єднання інженерів та дизайнерів. Наша мета — надавати висококласні спеціалізовані технічні рішення (від AI та deep-tech до інтуїтивного UI/UX) без зайвої бюрократії. У найближчі місяці ми плануємо розширити портфоліо, презентувати наші Multi-LLM проєкти та продовжити створення інструментів для вирішення реальних задач.",
    "contentEs": "El 4 de febrero de 2026 nació la versión alfa de RZK Soft. Solo 24 horas después, el 5 de febrero, realizamos el despliegue con éxito en GitHub y Vercel. RZK Soft no es solo otra agencia; es un colectivo dinámico de ingenieros y diseñadores. Nuestro objetivo es proporcionar soluciones tecnológicas especializadas de alta gama, desde IA y tecnología profunda hasta una interfaz de usuario intuitiva, sin la hinchazón corporativa. En los próximos meses, planeamos ampliar nuestro portafolio, mostrar nuestros proyectos Multi-LLM y continuar construyendo herramientas especializadas que resuelvan problemas reales.",
    "contentDe": "Am 4. Februar 2026 wurde die Alpha-Version von RZK Soft geboren. Nur 24 Stunden später, am 5. Februar, haben wir erfolgreich auf GitHub und Vercel deployed. RZK Soft ist nicht nur eine weitere Agentur; es ist ein dynamisches Kollektiv von Ingenieuren und Designern. Unser Ziel ist es, hochwertige, spezialisierte Technologielösungen anzubieten – von KI und Deep-Tech bis hin zu intuitiven UI/UX – ohne den unnötigen Ballast großer Konzerne. In den kommenden Monaten planen wir, unser Portfolio zu erweitern, unsere Multi-LLM-Projekte vorzustellen und weiterhin spezialisierte Tools zu entwickeln, die echte Probleme lösen.",
    "contentNl": "Op 4 februari 2026 zag de alfa-versie van RZK Soft het levenslicht. Slechts 24 uur later, op 5 februari, zijn we succesvol geïmplementeerd op GitHub en Vercel. RZK Soft is niet zomaar een bureau; het is een dynamisch collectief van ingenieurs en ontwerpers. Ons doel is om hoogwaardige, gespecialiseerde technologische oplossingen te bieden - van AI en deep-tech tot intuïtieve UI/UX - zonder de zakelijke rompslomp. In de komende maanden zijn we van plan ons portfolio uit te breiden, onze Multi-LLM-projecten te presenteren en door te gaan met het bouwen van gespecialiseerde tools die echte problemen oplossen.",
    "date": "2026-02-05",
    "author": "Mykhailo Tymoshenko",
    "category": "Company News",
    "categoryUk": "Новини компанії",
    "categoryEs": "Noticias de la empresa",
    "categoryDe": "Unternehmensnachrichten",
    "categoryNl": "Bedrijfsnieuws",
    "image": "/images/news/Logo_union.png",
    "readTime": 3,
    "tags": ["Launch", "Vercel", "GitHub", "Milestone", "Development"]
  }
];