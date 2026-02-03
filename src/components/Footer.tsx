import { useState, useEffect } from 'react'

const Footer = () => {
  const [language, setLanguage] = useState('en')

  useEffect(() => {
    const savedLang = localStorage.getItem('selectedLang')
    if (savedLang) setLanguage(savedLang)
  }, [])

  const translations = {
    en: {
      quickLinks: "Quick Links",
      services: "Services",
      contactUs: "Contact Us",
      followUs: "Follow Us",
      rights: "All rights reserved",
      phone: "Phone",
      email: "Email",
      instagram: "Instagram",
      getInTouch: "Get in Touch",
      sendMessage: "Send Message",
      yourName: "Your Name",
      yourEmail: "Your Email",
      yourMessage: "Your Message"
    },
    uk: {
      quickLinks: "Швидкі посилання",
      services: "Послуги",
      contactUs: "Контакти",
      followUs: "Слідкуйте за нами",
      rights: "Всі права захищені",
      phone: "Телефон",
      email: "Електронна пошта",
      instagram: "Instagram",
      getInTouch: "Зв'яжіться з нами",
      sendMessage: "Надіслати повідомлення",
      yourName: "Ваше ім'я",
      yourEmail: "Ваш email",
      yourMessage: "Ваше повідомлення"
    },
    es: {
      quickLinks: "Enlaces Rápidos",
      services: "Servicios",
      contactUs: "Contáctanos",
      followUs: "Síguenos",
      rights: "Todos los derechos reservados",
      phone: "Teléfono",
      email: "Correo Electrónico",
      instagram: "Instagram",
      getInTouch: "Ponte en Contacto",
      sendMessage: "Enviar Mensaje",
      yourName: "Tu Nombre",
      yourEmail: "Tu Correo",
      yourMessage: "Tu Mensaje"
    },
    de: {
      quickLinks: "Schnellzugriff",
      services: "Dienstleistungen",
      contactUs: "Kontakt",
      followUs: "Folgen Sie uns",
      rights: "Alle Rechte vorbehalten",
      phone: "Telefon",
      email: "E-Mail",
      instagram: "Instagram",
      getInTouch: "Kontakt Aufnehmen",
      sendMessage: "Nachricht Senden",
      yourName: "Ihr Name",
      yourEmail: "Ihre E-Mail",
      yourMessage: "Ihre Nachricht"
    },
    nl: {
      quickLinks: "Snelle Links",
      services: "Diensten",
      contactUs: "Contacteer Ons",
      followUs: "Volg Ons",
      rights: "Alle rechten voorbehouden",
      phone: "Telefoon",
      email: "E-mail",
      instagram: "Instagram",
      getInTouch: "Neem Contact Op",
      sendMessage: "Bericht Verzenden",
      yourName: "Uw Naam",
      yourEmail: "Uw E-mail",
      yourMessage: "Uw Bericht"
    }
  }

  const currentTranslations = (translations as any)[language] || translations.en

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Our Team", href: "#team" }
  ]

  const servicesList = [
    "Web Development",
    "UI/UX Design",
    "Mobile Development",
    "Branding",
    "AI/ML Solutions",
    "DevOps & Cloud"
  ]

  const contactInfo = [
    {
      icon: "📱",
      label: currentTranslations.phone,
      value: "+38 066 585 5988",
      href: "tel:+380665855988"
    },
    {
      icon: "📧",
      label: currentTranslations.email,
      value: "rinzunakasoftofficial@gmail.com",
      href: "mailto:rinzunakasoftofficial@gmail.com"
    },
    {
      icon: "📸",
      label: currentTranslations.instagram,
      value: "Rinzunaka_Misha",
      href: "https://instagram.com/rinzunaka_misha_._/"
    }
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="footer">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold mb-6">{currentTranslations.getInTouch}</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder={currentTranslations.yourName}
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-brandCyan transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder={currentTranslations.yourEmail}
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-brandCyan transition-colors"
                  />
                </div>
              </div>
              <div>
                <textarea
                  placeholder={currentTranslations.yourMessage}
                  rows={4}
                  className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-brandCyan transition-colors"
                ></textarea>
              </div>
              <button className="btn-primary">
                {currentTranslations.sendMessage}
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6">{currentTranslations.contactUs}</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                  >
                    <div className="text-2xl">{info.icon}</div>
                    <div>
                      <div className="font-medium text-white/80 group-hover:text-white">{info.label}</div>
                      <div className="text-white group-hover:text-brandCyan">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">{currentTranslations.followUs}</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/MykhailoTymoshenko08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 hover:bg-brandCyan rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 hover:bg-brandCyan rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://instagram.com/rinzunaka_misha_._/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 hover:bg-brandCyan rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">RZK Soft</h4>
              <p className="text-white/70">
                Delivering exceptional software development and design solutions with cutting-edge technology and creative expertise.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-4">{currentTranslations.quickLinks}</h4>
              <div className="space-y-2">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block footer-link"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-4">{currentTranslations.services}</h4>
              <div className="space-y-2">
                {servicesList.map((service, index) => (
                  <span key={index} className="block text-white/70">
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/70 text-center md:text-left mb-4 md:mb-0">
              © {currentYear} RZK Soft. {currentTranslations.rights}
            </div>
            
            <div className="text-white/50 text-sm">
              Built with ❤️ using React, TypeScript & Tailwind CSS
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer