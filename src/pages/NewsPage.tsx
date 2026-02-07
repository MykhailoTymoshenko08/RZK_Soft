import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { newsData } from '../data/newsData'

const NewsPage = () => {
  const { translations, language } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    { id: 'all', label: translations.allNews },
    { id: 'company', label: translations.companyNews },
    { id: 'technology', label: translations.technologyNews },
    { id: 'team', label: translations.teamUpdates },
    { id: 'tutorial', label: translations.tutorials },
    { id: 'case', label: translations.caseStudies },
    { id: 'events', label: translations.events }
  ]

  const getLocalizedText = (article: any, field: string) => {
    const langField = `${field}${language === 'uk' ? 'Uk' : language === 'es' ? 'Es' : language === 'de' ? 'De' : language === 'nl' ? 'Nl' : ''}`
    return article[langField] || article[field]
  }

  const getLocalizedCategory = (article: any) => {
    const langField = `category${language === 'uk' ? 'Uk' : language === 'es' ? 'Es' : language === 'de' ? 'De' : language === 'nl' ? 'Nl' : ''}`
    return article[langField] || article.category
  }

  const filteredNews = newsData.filter(article => {
    const matchesCategory = selectedCategory === 'all' || 
      article.category.toLowerCase().includes(selectedCategory)
    
    const matchesSearch = searchQuery === '' || 
      getLocalizedText(article, 'title').toLowerCase().includes(searchQuery.toLowerCase()) ||
      getLocalizedText(article, 'excerpt').toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    
    return matchesCategory && matchesSearch
  })

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString(language === 'uk' ? 'uk-UA' : 
                                  language === 'es' ? 'es-ES' : 
                                  language === 'de' ? 'de-DE' : 
                                  language === 'nl' ? 'nl-NL' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <section className="py-16 md:py-24 section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            {translations.newsPage}
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
            {translations.newsPageDesc}
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={translations.searchNews}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-brandCyan transition-colors"
              />
              <svg className="absolute right-4 top-3.5 w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-brandCyan text-white'
                    : 'bg-white/10 text-white/80 hover:bg-white/20'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {filteredNews.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-5xl mb-4">📰</div>
            <h3 className="text-2xl font-bold mb-4">{translations.noNewsFound}</h3>
            <p className="text-white/70 mb-6">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setSelectedCategory('all')
                setSearchQuery('')
              }}
              className="btn-primary"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <>
            {/* News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {filteredNews.map((article) => (
                <div key={article.id} className="custom-card p-6 hover-lift group">
                  {/* Image */}
                  <div className="aspect-video bg-gradient-to-br from-brandCyan/20 to-purple-600/20 rounded-lg mb-4 overflow-hidden">
                    {article.image ? (
                      <img 
                        src={article.image} 
                        alt={getLocalizedText(article, 'title')}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.style.display = 'none'
                          const parent = target.parentElement
                          if (parent) {
                            parent.className = 'aspect-video bg-gradient-to-br from-brandCyan to-purple-600 rounded-lg mb-4 flex items-center justify-center'
                            parent.innerHTML = '<span class="text-4xl">📰</span>'
                          }
                        }}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-brandCyan to-purple-600 flex items-center justify-center">
                        <span className="text-4xl">📰</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Category & Date */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-brandCyan text-sm font-medium">
                      {getLocalizedCategory(article)}
                    </span>
                    <span className="text-white/50 text-sm">
                      {formatDate(article.date)}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 line-clamp-2">
                    {getLocalizedText(article, 'title')}
                  </h3>
                  
                  {/* Excerpt */}
                  <p className="text-white/70 mb-4 line-clamp-3">
                    {getLocalizedText(article, 'excerpt')}
                  </p>
                  
                  {/* Meta Info */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-brandCyan/20 rounded-full flex items-center justify-center">
                        <span className="text-xs">👤</span>
                      </div>
                      <span className="text-white/60 text-sm">{article.author}</span>
                    </div>
                    <div className="text-white/50 text-sm">
                      {article.readTime} {translations.readTime}
                    </div>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white/5 rounded-full text-xs text-white/70">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Read More Button - Тепер це Link */}
                  <Link
                    to={`/news/${article.id}`}
                    className="inline-flex items-center gap-2 text-brandCyan hover:text-cyan-400 font-medium group/readmore"
                  >
                    {translations.readMore}
                    <svg className="w-4 h-4 transition-transform group-hover/readmore:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>

            {/* Show All News Button */}
            <div className="text-center">
              <button className="btn-secondary">
                {translations.viewAllNews}
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default NewsPage