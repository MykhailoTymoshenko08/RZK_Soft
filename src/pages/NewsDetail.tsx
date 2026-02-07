import { useParams, Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { newsData } from '../data/newsData'

const NewsDetail = () => {
  const { id } = useParams()
  const { translations, language } = useLanguage()

  // Знайти статтю за ID
  const article = newsData.find(item => item.id === Number(id))

  const getLocalizedText = (field: string) => {
    if (!article) return ''
    const langField = `${field}${language === 'uk' ? 'Uk' : language === 'es' ? 'Es' : language === 'de' ? 'De' : language === 'nl' ? 'Nl' : ''}`
    return article[langField as keyof typeof article] || article[field as keyof typeof article]
  }

  const getLocalizedCategory = () => {
    if (!article) return ''
    const langField = `category${language === 'uk' ? 'Uk' : language === 'es' ? 'Es' : language === 'de' ? 'De' : language === 'nl' ? 'Nl' : ''}`
    return article[langField as keyof typeof article] || article.category
  }

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

  // Знайти пов'язані статті (інші статті з такими ж тегами або категорією)
  const relatedArticles = article 
    ? newsData
        .filter(item => 
          item.id !== article.id && 
          (item.category === article.category || 
           item.tags.some(tag => article.tags.includes(tag)))
        )
        .slice(0, 3)
    : []

  if (!article) {
    return (
      <section className="py-16 md:py-24 section-padding">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="text-7xl mb-6">😕</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="text-white/70 mb-8">
            The news article you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/news" className="btn-primary">
            {translations.backToNews}
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 md:py-24 section-padding">
      <div className="container mx-auto max-w-4xl">
        {/* Back Button */}
        <div className="mb-8">
          <Link to="/news" className="inline-flex items-center gap-2 text-brandCyan hover:text-cyan-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {translations.backToNews}
          </Link>
        </div>

        <article className="custom-card p-6 md:p-8">
          {/* Category & Date */}
          <div className="flex items-center justify-between mb-6">
            <span className="px-4 py-1.5 bg-brandCyan/20 text-brandCyan rounded-full text-sm font-medium">
              {getLocalizedCategory()}
            </span>
            <span className="text-white/50 text-sm">
              {formatDate(article.date)}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {getLocalizedText('title')}
          </h1>

          {/* Meta Info */}
          <div className="flex items-center gap-4 text-white/60 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brandCyan/20 rounded-full flex items-center justify-center">
                <span className="text-sm">👤</span>
              </div>
              <span>{translations.by} {article.author}</span>
            </div>
            <span>•</span>
            <span>{article.readTime} {translations.readTime}</span>
          </div>

          {/* Featured Image */}
          <div className="aspect-video bg-gradient-to-br from-brandCyan/20 to-purple-600/20 rounded-xl mb-8 overflow-hidden">
            {article.image ? (
              <img 
                src={article.image} 
                alt={getLocalizedText('title')}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  const parent = target.parentElement
                  if (parent) {
                    parent.className = 'aspect-video bg-gradient-to-br from-brandCyan to-purple-600 rounded-xl mb-8 flex items-center justify-center'
                    parent.innerHTML = '<span class="text-6xl">📰</span>'
                  }
                }}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-brandCyan to-purple-600 flex items-center justify-center">
                <span className="text-6xl">📰</span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="text-white/80 space-y-4 mb-8">
              {getLocalizedText('content').split('\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Callout Box */}
            <div className="bg-white/5 border-l-4 border-brandCyan p-6 my-8 rounded-r-lg">
              <p className="text-white/80 italic text-lg">
                "RZK Soft is committed to delivering cutting-edge solutions and keeping our clients updated with the latest industry trends."
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <h3 className="text-lg font-bold mb-4">{translations.tags}</h3>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag, idx) => (
                <span key={idx} className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Share Buttons */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <h3 className="text-lg font-bold mb-4">{translations.shareArticle}</h3>
            <div className="flex gap-4">
              <button className="p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                </svg>
              </button>
              <button className="p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"/>
                </svg>
              </button>
              <button className="p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </button>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 gradient-text">
              {translations.relatedArticles}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((related) => (
                <Link
                  key={related.id}
                  to={`/news/${related.id}`}
                  className="custom-card p-5 hover-lift group"
                >
                  <h3 className="font-bold mb-2 line-clamp-2 group-hover:text-brandCyan transition-colors">
                    {related[`title${language === 'uk' ? 'Uk' : language === 'es' ? 'Es' : language === 'de' ? 'De' : language === 'nl' ? 'Nl' : ''}` as keyof typeof related] || related.title}
                  </h3>
                  <p className="text-white/60 text-sm mb-3 line-clamp-2">
                    {related[`excerpt${language === 'uk' ? 'Uk' : language === 'es' ? 'Es' : language === 'de' ? 'De' : language === 'nl' ? 'Nl' : ''}` as keyof typeof related] || related.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-white/40">
                    <span>{formatDate(related.date)}</span>
                    <span className="flex items-center gap-1">
                      {translations.readMore}
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default NewsDetail