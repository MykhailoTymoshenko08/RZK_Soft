import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Team from './components/Team'
import Footer from './components/Footer'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-brandDark flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-brandCyan border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white/60">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-brandDark text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Team />
      </main>
      <Footer />
    </div>
  )
}

export default App