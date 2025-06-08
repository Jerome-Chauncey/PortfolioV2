import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          <a href="#" className="logo">Jerome Chauncey</a>
          
          <button 
            className="menu-toggle" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
          
          <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <a href="#about">About</a>
            {/* <a href="#skills">Skills</a> */}
            <a href="#projects">Projects</a>
            <a href="#journey">Journey</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar