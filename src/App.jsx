import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
// import Education from './components/Education'
// import Skills from './components/Skills'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Journey from './components/Journey'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="app">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main>
        <Hero />
        <About />
        {/* <Education /> */}
        {/* <Skills /> */}
        <TechStack />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App