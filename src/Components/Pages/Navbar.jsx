// Navbar.jsx
import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'
import logo from '../Logos/ResicodeLogo.png'
import '../Style/Navbar.css'; // Import external CSS

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const closeMenu = () => {
    setIsOpen(false)
  }

  // Handle scroll effect - Navbar becomes transparent when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)  // Transparent when scrolled
      } else {
        setScrolled(false) // Solid black when at top
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    // { path: '/portfolio', label: 'Portfolio' },
    { path: '/contact', label: 'Contact' }
  ]

  const isActive = (path) => location.pathname === path

  // WhatsApp contact number
  const whatsappNumber = "+919529468439"
  const whatsappMessage = "Hello! I'm interested in your services. Can you please provide more information?"
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <div>
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo - Left Aligned */}
            <Link to="/" className="flex-shrink-0 z-10" onClick={closeMenu}>
              <div className="logo-container">
                <img 
                  src={logo} 
                  className="logo-image" 
                  alt="Resicode Logo" 
                />
              </div>
            </Link>

            {/* Centered Navigation Links - Desktop */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <div className="nav-links-container">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
                    onClick={closeMenu}
                  >
                    {link.label}
                    {isActive(link.path) && (
                      <span className="nav-active-dot"></span>
                    )}
                  </Link>
                ))}
              </div>
            </div>

            {/* Careers Button - Desktop */}
            <div className="hidden lg:block">
              <Link to="/careers" onClick={closeMenu}>
                <button className="careers-btn">
                  <svg className="careers-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  Careers
                </button>
              </Link>
            </div>

            {/* Hamburger Menu Button (Mobile) */}
            <div className="lg:hidden flex items-center">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="mobile-menu-btn"
                aria-label="Toggle menu"
              >
                <svg className={`menu-icon ${isOpen ? 'open' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
            <div className="mobile-menu-inner">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`mobile-nav-link ${isActive(link.path) ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  {link.label}
                  {isActive(link.path) && (
                    <span className="mobile-active-dot"></span>
                  )}
                </Link>
              ))}
              
              {/* Careers Button - Mobile */}
              <Link to="/careers" onClick={closeMenu}>
                <button className="mobile-careers-btn">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  Careers
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Spacer to prevent content from being hidden behind fixed navbar */}
      <div className="nav-spacer"></div>

      {/* Floating WhatsApp Icon */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <div className="whatsapp-icon-wrapper">
          <FaWhatsapp className="whatsapp-icon" />
          <span className="whatsapp-tooltip">Chat with us!</span>
        </div>
        <div className="whatsapp-ripple"></div>
        <div className="whatsapp-ripple delay-1"></div>
        <div className="whatsapp-ripple delay-2"></div>
      </a>
    </div>
  )
}

export default Navbar