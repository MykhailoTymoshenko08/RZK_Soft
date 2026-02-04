import { useLanguage } from '../contexts/LanguageContext'
import { useState } from 'react'

// icons
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaMapMarkerAlt,
  FaCheckCircle
} from 'react-icons/fa'

const Footer = () => {
  const { translations } = useLanguage()
  const currentYear = new Date().getFullYear()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null)

  const quickLinks = [
    { label: translations.homePage, href: "#home" },
    { label: translations.aboutUsPage, href: "#about" },
    { label: translations.servicesPage, href: "#services" },
    { label: translations.teamPage, href: "#team" }
  ]

  const servicesList = [
    translations.webDevelopmentPage,
    translations.designPage,
    translations.mobilePage,
    translations.brandingPage,
    translations.aiMlPage,
    translations.devOpsPage
  ].filter(service => service && service.trim() !== '');

  const contactInfo = [
    {
      icon: <FaPhoneAlt className="w-5 h-5" />,
      label: translations.phone || "Phone",
      value: "+38 066 585 5988",
      href: "tel:+380665855988"
    },
    {
      icon: <FaEnvelope className="w-5 h-5" />,
      label: translations.email || "Email",
      value: "rinzunakasoftofficial@gmail.com",
      href: "mailto:rinzunakasoftofficial@gmail.com"
    },
    {
      icon: <FaInstagram className="w-5 h-5" />,
      label: translations.instagram || "Instagram",
      value: "Rinzunaka_Misha",
      href: "https://instagram.com/rinzunaka_misha_._/"
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
    
      const response = await fetch('https://your-backend.com/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      
      if (!response.ok) throw new Error('Failed to send')
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      setTimeout(() => setSubmitStatus(null), 5000)
      
    } catch (error) {
      console.error('Error sending message:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer id="contact" className="footer">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Form */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-brandCyan/20 rounded-lg">
                <FaPaperPlane className="w-6 h-6 text-brandCyan" />
              </div>
              <h3 className="text-2xl font-bold">{translations.getInTouch}</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder={translations.yourName}
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-brandCyan transition-colors"
                  />
                  <div className="text-xs text-white/50 mt-1 ml-1">* {translations.required}</div>
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder={translations.yourEmail}
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-brandCyan transition-colors"
                  />
                  <div className="text-xs text-white/50 mt-1 ml-1">* {translations.required}</div>
                </div>
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder={translations.yourMessage}
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  required
                  className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-brandCyan transition-colors"
                ></textarea>
                <div className="text-xs text-white/50 mt-1 ml-1">* {translations.required}</div>
              </div>
              
              {/* status */}
              {submitStatus === 'success' && (
                <div className="p-3 bg-green-500/20 border border-green-500 rounded-lg flex items-center gap-2">
                  <FaCheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-400">{translations.messageSent || "Message sent successfully!"}</span>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-3 bg-red-500/20 border border-red-500 rounded-lg">
                  <span className="text-red-400">{translations.sendingError || "Error sending message. Please try again."}</span>
                </div>
              )}
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {translations.sending || "Sending..."}
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="w-4 h-4" />
                    {translations.sendMessage}
                  </>
                )}
              </button>
            </form>
          </div>

          {/* contact info */}
          <div>
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-brandCyan/20 rounded-lg">
                  <FaMapMarkerAlt className="w-6 h-6 text-brandCyan" />
                </div>
                <h3 className="text-2xl font-bold">{translations.contactUs}</h3>
              </div>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                  > 
                    <div className="text-brandCyan p-2 bg-white/10 rounded-lg group-hover:bg-brandCyan/20 transition-colors">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-white/80 group-hover:text-white">{info.label}</div>
                      <div className="text-white group-hover:text-brandCyan transition-colors">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">{translations.followUs}</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/MykhailoTymoshenko08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 hover:bg-brandCyan rounded-full flex items-center justify-center transition-colors duration-300 group"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-6 h-6 group-hover:text-white" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 hover:bg-brandCyan rounded-full flex items-center justify-center transition-colors duration-300 group"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-6 h-6 group-hover:text-white" />
                </a>
                <a
                  href="https://instagram.com/rinzunaka_misha_._/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 hover:bg-brandCyan rounded-full flex items-center justify-center transition-colors duration-300 group"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-6 h-6 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* lower */}
        <div className="border-t border-white/10 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                {/* logo text for image */}
                <img 
                  src="/images/logo.png" 
                  alt="RZK Soft Logo" 
                  className="h-12 w-auto" 
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = document.createElement('div');
                    fallback.className = 'w-12 h-12 gradient-bg rounded-lg flex items-center justify-center';
                    fallback.innerHTML = '<span class="font-bold text-white">RZK</span>';
                    target.parentNode?.appendChild(fallback);
                  }}
                />
                <div>
                  <h4 className="text-xl font-bold">RZK Soft</h4>
                  <p className="text-white/60 text-sm">Innovating Digital Solutions</p>
                </div>
              </div>
              <p className="text-white/70">{translations.footerDesc}</p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-4">{translations.quickLinks}</h4>
              <div className="space-y-2">
                {quickLinks.map((link, index) => (
                  <a 
                    key={index} 
                    href={link.href} 
                    className="block footer-link hover:text-brandCyan transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-4">{translations.servicesPage}</h4>
              <div className="space-y-2">
                {servicesList.map((service, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-brandCyan rounded-full"></div>
                    <span className="text-white/70">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/70 text-center md:text-left mb-4 md:mb-0">
              © {currentYear} RZK Soft. {translations.rights}
            </div>
            <div className="text-white/50 text-sm flex items-center gap-1">
              <span>{translations.builtWith}</span>
              <span className="text-brandCyan">❤</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer