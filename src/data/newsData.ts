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
    "id": 7,
    "title": "Investing in Our Team: Courses & Internships Funded by RZK Soft",
    "titleUk": "Інвестиції в команду: курси та стажування за рахунок RZK Soft",
    "titleEs": "Invirtiendo en nuestro equipo: cursos y pasantías financiados por RZK Soft",
    "titleDe": "In unser Team investieren: Kurse & Praktika finanziert von RZK Soft",
    "titleNl": "Investeren in ons team: cursussen en stages gefinancierd door RZK Soft",
    "excerpt": "A portion of RZK Soft's accumulated funds will now go directly toward courses, certifications, and internships for our team members.",
    "excerptUk": "Частина накопичених коштів RZK Soft тепер спрямовується безпосередньо на курси, сертифікації та стажування для членів команди.",
    "excerptEs": "Una parte de los fondos acumulados de RZK Soft se destinará directamente a cursos, certificaciones y pasantías para los miembros del equipo.",
    "excerptDe": "Ein Teil der angesammelten Mittel von RZK Soft wird nun direkt für Kurse, Zertifizierungen und Praktika für unsere Teammitglieder verwendet.",
    "excerptNl": "Een deel van de geaccumuleerde middelen van RZK Soft gaat nu rechtstreeks naar cursussen, certificeringen en stages voor onze teamleden.",
    "content": "A company is only as strong as the people in it — and we intend to back that up with action.\n\nStarting now, RZK Soft will allocate a share of its accumulated funds specifically toward the professional development of our team. This means covering the cost of online courses, technical certifications, and paid internship opportunities for team members who want to grow.\n\nThis isn't a bonus program or a one-time gesture. It's a structural commitment: the company reinvests in the people who build it.\n\nIn practice, this includes:\n\n• Covering or co-funding courses on platforms like Coursera, Udemy, Mimo, and others — across any field relevant to the team member's role.\n\n• Supporting certification exams — from ISTQB to AWS to Google Cloud and beyond.\n\n• Funding internship placements for junior and intern-level members who want hands-on experience outside of RZK Soft projects.\n\nWe're a small team, and we know that every person's growth directly shapes what we can build together. This decision reflects what kind of company we want to be — one where showing up and putting in the work actually means something.\n\nMore details on how to apply for development funding will be shared internally with team members directly.",
    "contentUk": "Компанія настільки сильна, наскільки сильні люди в ній — і ми маємо намір підкріпити це діями.\n\nВідтепер RZK Soft виділятиме частину накопичених коштів саме на професійний розвиток команди. Це означає покриття витрат на онлайн-курси, технічні сертифікації та оплачувані стажування для членів команди, які хочуть рости.\n\nЦе не бонусна програма і не разовий жест. Це структурне зобов'язання: компанія реінвестує в людей, які її будують.\n\nНа практиці це включає:\n\n• Покриття або часткове фінансування курсів на платформах Coursera, Udemy, Mimo та інших — у будь-якій галузі, яка стосується ролі учасника.\n\n• Підтримку іспитів на сертифікацію — від ISTQB до AWS та Google Cloud і далі.\n\n• Фінансування стажувань для junior та intern-рівнів, які хочуть отримати практичний досвід поза проєктами RZK Soft.\n\nМи невелика команда, і ми розуміємо, що зростання кожної людини безпосередньо формує те, що ми можемо побудувати разом. Це рішення відображає, якою компанією ми хочемо бути — такою, де праця та залученість дійсно щось означають.\n\nДетальніша інформація про те, як подати заявку на фінансування розвитку, буде передана членам команди напряму.",
    "contentEs": "Una empresa es tan fuerte como las personas que la integran — y tenemos la intención de respaldarlo con acciones.\n\nA partir de ahora, RZK Soft destinará una parte de sus fondos acumulados al desarrollo profesional del equipo. Esto incluye cubrir el costo de cursos en línea, certificaciones técnicas y oportunidades de prácticas remuneradas.\n\nEsto no es un programa de bonificaciones ni un gesto puntual. Es un compromiso estructural: la empresa reinvierte en las personas que la construyen.\n\nEn la práctica, esto incluye cursos en Coursera, Udemy, Mimo y otras plataformas; exámenes de certificación como ISTQB, AWS o Google Cloud; y prácticas remuneradas para miembros junior e intern. Los detalles sobre cómo solicitar financiamiento se compartirán internamente.",
    "contentDe": "Ein Unternehmen ist nur so stark wie die Menschen darin — und wir beabsichtigen, das durch Taten zu untermauern.\n\nAb sofort wird RZK Soft einen Teil seiner angesammelten Mittel für die berufliche Weiterentwicklung des Teams einsetzen. Dies umfasst die Finanzierung von Online-Kursen auf Plattformen wie Coursera, Udemy und Mimo, Zertifizierungsprüfungen wie ISTQB, AWS oder Google Cloud sowie bezahlte Praktika für Junior- und Intern-Mitglieder.\n\nDies ist kein Bonusprogramm, sondern eine strukturelle Verpflichtung: Das Unternehmen reinvestiert in die Menschen, die es aufbauen. Weitere Details zur Beantragung von Entwicklungsförderung werden intern an die Teammitglieder weitergegeben.",
    "contentNl": "Een bedrijf is zo sterk als de mensen erin — en we zijn van plan dat met daden te ondersteunen.\n\nVanaf nu zal RZK Soft een deel van zijn geaccumuleerde middelen specifiek toewijzen aan de professionele ontwikkeling van het team. Dit omvat het bekostigen van online cursussen op platforms zoals Coursera, Udemy en Mimo, certificeringsexamens zoals ISTQB, AWS of Google Cloud, en betaalde stages voor junior- en intern-leden.\n\nDit is geen bonusprogramma maar een structurele toezegging: het bedrijf herbelegt in de mensen die het opbouwen. Meer details over hoe je ontwikkelingsfinanciering kunt aanvragen, worden intern rechtstreeks met teamleden gedeeld.",
    "date": "2026-03-06",
    "author": "Mykhailo Tymoshenko",
    "category": "Company News",
    "categoryUk": "Новини компанії",
    "categoryEs": "Noticias de la empresa",
    "categoryDe": "Unternehmensnachrichten",
    "categoryNl": "Bedrijfsnieuws",
    "image": "/images/news/img-id7.png",
    "readTime": 3,
    "tags": ["Team", "Growth", "Education", "Company News", "Milestone"]
  },
  {
    "id": 6,
    "title": "Team Restructuring: A Deliberate Step Forward",
    "titleUk": "Реструктуризація команди: свідомий крок вперед",
    "titleEs": "Reestructuración del equipo: un paso deliberado hacia adelante",
    "titleDe": "Team-Umstrukturierung: Ein bewusster Schritt nach vorne",
    "titleNl": "Teamherstructurering: een bewuste stap vooruit",
    "excerpt": "Following a leadership decision, five members have left the team. We welcome Volodymyr Lavrientiev and Olexii Tymoshenko as RZK Soft moves forward with focus and clarity.",
    "excerptUk": "За рішенням керівництва п'ять учасників покинули команду. Ми вітаємо Volodymyr Lavrientiev та Olexii Tymoshenko, поки RZK Soft рухається вперед з чіткістю та фокусом.",
    "excerptEs": "Tras una decisión de liderazgo, cinco miembros han dejado el equipo. Damos la bienvenida a Volodymyr Lavrientiev y Olexii Tymoshenko mientras RZK Soft avanza con enfoque y claridad.",
    "excerptDe": "Nach einer Führungsentscheidung haben fünf Mitglieder das Team verlassen. Wir begrüßen Volodymyr Lavrientiev und Olexii Tymoshenko, während RZK Soft fokussiert und klar voranschreitet.",
    "excerptNl": "Na een beslissing van het management hebben vijf leden het team verlaten. We verwelkomen Volodymyr Lavrientiev en Olexii Tymoshenko terwijl RZK Soft gefocust en doelgericht vooruitgaat.",
    "content": "Some changes are necessary, even when they're not easy.\n\nFollowing internal discussions at the leadership level, RZK Soft has made the decision to part ways with five team members — Hiro Tanaka, Anastasiya Kovalenko, Sofiya Shapialevich, Katherina Bondar, and Katherina Beregova. We want to be clear that this was a company decision — it wasn't something any of them initiated, and we think they deserve to have that said openly.\n\nWe're grateful for the time and effort each of them put into the project. This wasn't an easy call, and it wasn't made lightly. Sometimes a company needs to make hard decisions to move in the right direction — not because something went wrong, but simply because it has to.\n\nStanding still was never an option for us.\n\nAt the same time, we're happy to officially welcome two new members:\n\n• Volodymyr Lavrientiev joins as Lead Mobile Developer, bringing hands-on experience with Flutter, Jetpack Compose, React Native, and a track record of shipping polished cross-platform apps.\n\n• Olexii Tymoshenko joins as Intern, bringing early-stage hardware and software skills — from Microcontroller Design and Assembly to Kotlin and Java.\n\nWe move forward as a leaner, more focused team — and we're confident this is the right step for where RZK Soft is headed.",
    "contentUk": "Деякі зміни необхідні, навіть якщо вони нелегкі.\n\nПісля внутрішніх обговорень на рівні керівництва RZK Soft прийняла рішення розійтися з п'ятьма учасниками команди — Hiro Tanaka, Anastasiya Kovalenko, Sofiya Shapialevich, Katherina Bondar та Katherina Beregova. Ми хочемо чітко сказати: це було рішення компанії — не щось, що хтось із них ініціював, і вони заслуговують на те, щоб це було сказано відкрито.\n\nМи вдячні за час і зусилля, які кожен із них вклав у проєкт. Це не було легким рішенням, і його не прийняли похапцем. Іноді компанії потрібно робити складні кроки, щоб рухатися в правильному напрямку — не тому що щось пішло не так, а просто тому що так треба.\n\nСтояти на місці для нас ніколи не було варіантом.\n\nРазом з тим ми раді офіційно привітати двох нових учасників:\n\n• Volodymyr Lavrientiev приєднується як Lead Mobile Developer з практичним досвідом у Flutter, Jetpack Compose, React Native та послужним списком готових кросплатформних застосунків.\n\n• Olexii Tymoshenko приєднується як Intern з навичками на стику заліза та програмування — від проєктування мікроконтролерів та Assembly до Kotlin і Java.\n\nМи рухаємось вперед як більш компактна та сфокусована команда — і впевнені, що це правильний крок для того, куди прямує RZK Soft.",
    "contentEs": "Algunos cambios son necesarios, aunque no sean fáciles.\n\nTras discusiones internas a nivel de liderazgo, RZK Soft tomó la decisión de separarse de cinco miembros del equipo — Hiro Tanaka, Anastasiya Kovalenko, Sofiya Shapialevich, Katherina Bondar y Katherina Beregova. Queremos dejar claro que fue una decisión de la empresa — no algo que ninguno de ellos iniciara — y creemos que merecen que eso se diga abiertamente.\n\nEstamos agradecidos por el tiempo y esfuerzo que cada uno dedicó al proyecto. A veces una empresa necesita tomar decisiones difíciles para avanzar en la dirección correcta — no porque algo saliera mal, sino simplemente porque es necesario.\n\nDamos la bienvenida a Volodymyr Lavrientiev como Lead Mobile Developer y a Olexii Tymoshenko como Intern. Avanzamos como un equipo más enfocado hacia lo que RZK Soft construirá a continuación.",
    "contentDe": "Manche Veränderungen sind notwendig, auch wenn sie nicht einfach sind.\n\nNach internen Gesprächen auf Führungsebene hat RZK Soft die Entscheidung getroffen, sich von fünf Teammitgliedern zu trennen — Hiro Tanaka, Anastasiya Kovalenko, Sofiya Shapialevich, Katherina Bondar und Katherina Beregova. Wir möchten klarstellen, dass dies eine Unternehmensentscheidung war — nichts, was einer von ihnen angestoßen hätte — und wir glauben, dass sie es verdienen, dass das offen gesagt wird.\n\nWir sind dankbar für die Zeit und den Einsatz, den jede und jeder in das Projekt gesteckt hat. Manchmal muss ein Unternehmen schwierige Entscheidungen treffen, um in die richtige Richtung zu gehen — nicht weil etwas schiefgelaufen ist, sondern einfach weil es so sein muss.\n\nWir begrüßen Volodymyr Lavrientiev als Lead Mobile Developer und Olexii Tymoshenko als Intern und gehen als fokussierteres Team voran.",
    "contentNl": "Sommige veranderingen zijn noodzakelijk, ook al zijn ze niet gemakkelijk.\n\nNa interne besprekingen op leiderschapsniveau heeft RZK Soft de beslissing genomen om afscheid te nemen van vijf teamleden — Hiro Tanaka, Anastasiya Kovalenko, Sofiya Shapialevich, Katherina Bondar en Katherina Beregova. We willen duidelijk maken dat dit een bedrijfsbeslissing was — niet iets dat door een van hen werd geïnitieerd — en we vinden dat ze het verdienen dat dit openlijk gezegd wordt.\n\nWe zijn dankbaar voor de tijd en inzet die ieder van hen in het project heeft gestoken. Soms moet een bedrijf moeilijke beslissingen nemen om de juiste richting in te slaan — niet omdat er iets fout ging, maar simpelweg omdat het zo moet zijn.\n\nWe verwelkomen Volodymyr Lavrientiev als Lead Mobile Developer en Olexii Tymoshenko als Intern, en gaan vooruit als een meer gefocust team.",
    "date": "2026-03-06",
    "author": "Mykhailo Tymoshenko",
    "category": "Company News",
    "categoryUk": "Новини компанії",
    "categoryEs": "Noticias de la empresa",
    "categoryDe": "Unternehmensnachrichten",
    "categoryNl": "Bedrijfsnieuws",
    "image": "/images/news/img-id6.png",
    "readTime": 3,
    "tags": ["Team", "Milestone", "Update", "Company News"]
  },
  {
    "id": 5,
    "title": "Team Page Update: Smarter Skill Categories & New Sections",
    "titleUk": "Оновлення сторінки команди: розумніші категорії скілів та нові розділи",
    "titleEs": "Actualización de la página del equipo: categorías de habilidades más inteligentes y nuevas secciones",
    "titleDe": "Team-Seite aktualisiert: Intelligentere Skill-Kategorien & neue Abschnitte",
    "titleNl": "Team pagina update: slimmere vaardighedencategorieën en nieuwe secties",
    "excerpt": "We redesigned how team skills are organized — 14 categories, smarter sorting, and proper CS Fundamentals section now live.",
    "excerptUk": "Ми переробили організацію скілів команди — 14 категорій, розумніше сортування та окремий розділ CS Fundamentals вже доступні.",
    "excerptEs": "Rediseñamos cómo se organizan las habilidades del equipo: 14 categorías, una clasificación más inteligente y una sección de Fundamentos de CS ya disponible.",
    "excerptDe": "Wir haben die Organisation der Team-Skills überarbeitet – 14 Kategorien, intelligentere Sortierung und ein eigener CS-Grundlagen-Bereich sind jetzt live.",
    "excerptNl": "We hebben de organisatie van teamvaardigheden opnieuw ontworpen — 14 categorieën, slimmere sortering en een aparte CS Fundamenten-sectie zijn nu live.",
    "content": "We've just shipped a significant update to the Team section of the RZK Soft website. Previously, every team member's skills were grouped into just 4 generic buckets. As our team grew and diversified, this no longer made sense — a Game Designer and a Data Engineer shouldn't share the same 'Other' pile.\n\nHere's what changed:\n\n• 14 skill categories — Programming Languages, CS Fundamentals, AI & Machine Learning, Web Development, Mobile Development, Databases, DevOps & Infrastructure, Data Engineering, QA & Testing, Game Development, Design & UX, Management & Tools, Soft Skills, and Languages.\n\n• CS Fundamentals is now its own section — OOP, Clean Architecture, Analysis of Algorithms, Discrete Mathematics, Design Patterns, and Refactoring no longer get buried under 'Programming Languages.' Theory deserves its own spotlight.\n\n• Priority-based ordering — categories appear in order of relevance for an IT company. Programming Languages and CS Fundamentals come first; human languages and soft skills come last.\n\n• Bug fixes in the sorting logic — the old implementation matched on the single letter 'c', causing skills like 'React', 'Machine Learning', and 'Docker' to incorrectly fall into the Programming Languages bucket. All edge cases have been resolved with precise keyword matching.\n\n• Fixed a duplicate ID in team data — two members shared id: 7, which could cause subtle rendering issues in React.\n\nAs always, all updates are fully translated across English, Ukrainian, Spanish, German, and Dutch.",
    "contentUk": "Ми щойно випустили значне оновлення розділу Команда на сайті RZK Soft. Раніше скіли кожного члена команди групувалися лише в 4 загальні категорії. З ростом та диверсифікацією команди це перестало мати сенс — Game Designer та Data Engineer не мають ділити одну купу 'Інше'.\n\nОсь що змінилось:\n\n• 14 категорій скілів — Мови програмування, Основи CS, AI та машинне навчання, Веб-розробка, Мобільна розробка, Бази даних, DevOps та інфраструктура, Data Engineering, QA та тестування, Розробка ігор, Дизайн та UX, Менеджмент та інструменти, Soft Skills та Мови.\n\n• Основи CS — окремий розділ. OOP, Чиста архітектура, Аналіз алгоритмів, Дискретна математика та Рефакторинг більше не губляться серед мов програмування. Теорія заслуговує на власне місце.\n\n• Сортування за пріоритетом — категорії відображаються в порядку релевантності для IT-компанії. Мови програмування та основи CS — першими, людські мови та soft skills — в кінці.\n\n• Виправлення багів у логіці сортування — стара реалізація матчила на окрему літеру 'c', через що 'React', 'Machine Learning' та 'Docker' потрапляли до категорії Мов програмування. Всі крайні випадки вирішені через точне порівняння ключових слів.\n\n• Виправлено дублікат ID у даних команди — два учасники мали id: 7, що могло спричиняти проблеми з рендерингом у React.\n\nЯк завжди, всі оновлення повністю перекладені англійською, українською, іспанською, німецькою та нідерландською.",
    "contentEs": "Acabamos de lanzar una actualización importante en la sección Equipo del sitio web de RZK Soft. Antes, las habilidades de cada miembro del equipo se agrupaban en solo 4 categorías genéricas. A medida que nuestro equipo creció y se diversificó, esto dejó de tener sentido.\n\nNovedades:\n\n• 14 categorías de habilidades — Lenguajes de Programación, Fundamentos de CS, IA y Machine Learning, Desarrollo Web, Desarrollo Móvil, Bases de Datos, DevOps, Ingeniería de Datos, QA y Testing, Desarrollo de Juegos, Diseño y UX, Gestión y Herramientas, Habilidades Blandas e Idiomas.\n\n• Fundamentos de CS es ahora su propia sección — POO, Arquitectura Limpia, Análisis de Algoritmos y Patrones de Diseño ya no quedan enterrados bajo 'Lenguajes de Programación'.\n\n• Ordenamiento por prioridad — las categorías aparecen en orden de relevancia para una empresa de IT.\n\n• Corrección de errores en la lógica de clasificación y un ID duplicado en los datos del equipo.",
    "contentDe": "Wir haben gerade ein bedeutendes Update für den Team-Bereich der RZK Soft Website veröffentlicht. Früher wurden die Fähigkeiten jedes Teammitglieds in nur 4 generische Kategorien eingeteilt. Mit dem Wachstum unseres Teams ergab das keinen Sinn mehr.\n\nWas sich geändert hat:\n\n• 14 Skill-Kategorien — Programmiersprachen, CS-Grundlagen, KI & Machine Learning, Webentwicklung, Mobile Entwicklung, Datenbanken, DevOps & Infrastruktur, Dateningenieurwesen, QA & Testing, Spieleentwicklung, Design & UX, Management & Tools, Soziale Kompetenzen und Sprachen.\n\n• CS-Grundlagen ist jetzt ein eigener Abschnitt — OOP, Clean Architecture, Algorithmen-Analyse und Design Patterns gehen nicht mehr in 'Programmiersprachen' unter.\n\n• Prioritätsbasierte Sortierung — Kategorien erscheinen in der Reihenfolge ihrer Relevanz für ein IT-Unternehmen.\n\n• Fehlerbehebungen in der Sortierlogik und ein doppelter ID-Eintrag in den Teamdaten wurden behoben.",
    "contentNl": "We hebben zojuist een belangrijke update uitgebracht voor de Team-sectie van de RZK Soft website. Vroeger werden de vaardigheden van elk teamlid ingedeeld in slechts 4 generieke categorieën. Naarmate ons team groeide en diversifieerde, had dit geen zin meer.\n\nWat er veranderd is:\n\n• 14 vaardighedencategorieën — Programmeertalen, CS Fundamenten, AI & Machine Learning, Webontwikkeling, Mobiele Ontwikkeling, Databases, DevOps & Infrastructuur, Data Engineering, QA & Testing, Game Ontwikkeling, Design & UX, Beheer & Tools, Zachte Vaardigheden en Talen.\n\n• CS Fundamenten is nu een eigen sectie — OOP, Clean Architecture, Algoritme-analyse en Ontwerppatronen verdwijnen niet langer onder 'Programmeertalen'.\n\n• Prioriteitsgebaseerde sortering — categorieën verschijnen in volgorde van relevantie voor een IT-bedrijf.\n\n• Bugfixes in de sorteerlogica en een dubbele ID in de teamgegevens zijn opgelost.",
    "date": "2026-03-04",
    "author": "Mykhailo Tymoshenko",
    "category": "Company News",
    "categoryUk": "Новини компанії",
    "categoryEs": "Noticias de la empresa",
    "categoryDe": "Unternehmensnachrichten",
    "categoryNl": "Bedrijfsnieuws",
    "image": "/images/news/img-id5.png",
    "readTime": 3,
    "tags": ["Update", "Team", "UI/UX", "Milestone", "Website"]
  },
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
    "date": "2026-02-14",
    "author": "Mykhailo Tymoshenko",
    "category": "Case Studies",
    "categoryUk": "Кейси",
    "categoryEs": "Casos de estudio",
    "categoryDe": "Fallstudien",
    "categoryNl": "Casestudies",
    "image": "/images/news/imgId4.png",
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