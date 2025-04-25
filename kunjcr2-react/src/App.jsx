import { useState, useEffect } from 'react'
import Header from './components/Header'
import Experience from './components/Experience'
import Apps from './components/Apps'
import Hackathons from './components/Hackathons'
import Projects from './components/Projects'
import Learning from './components/Learning'
import Skills from './components/Skills'
import Certificates from './components/Certificates'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'

function App() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalScroll) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="font-poppins bg-black text-gray-300">
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div
          className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 z-50 bg-primary/80 hover:bg-primary text-white p-3 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 ${scrollProgress > 20 ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
      >
        <i className="fa-solid fa-arrow-up text-xl"></i>
      </button>

      <Header />

      <main className="container mx-auto px-4 py-16 space-y-16">
        <Experience />
        <div className="grid md:grid-cols-2 gap-8">
          <Apps />
          <Hackathons />
        </div>
        <Projects />
        <Learning />
        <Skills />
        <Certificates />
        <AboutMe />
      </main>

      <Footer />
    </div>
  )
}

export default App
