// src/components/Navbar.js 
// UPDATED: Changed resume button link to resume.html

'use client'; // This component now uses client-side state

import Link from 'next/link'; 
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <header>
      <nav className={isMobileMenuOpen ? 'nav-open' : ''}>
        <div className="logo">Vibhu</div>
        <button 
          className="hamburger-menu" 
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </button>
        <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <li><a href="#hero" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a></li>
          <li><a href="#experience" onClick={() => setIsMobileMenuOpen(false)}>Experience</a></li>
          <li><a href="#work" onClick={() => setIsMobileMenuOpen(false)}>Work</a></li>
          <li><a href="#tech-stack" onClick={() => setIsMobileMenuOpen(false)}>Tech Stack</a></li> 
          <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
          <li>
            {/* UPDATED href to point to resume.html in the public folder */}
            <a href="/resume.html" target="_blank" rel="noopener noreferrer" className="resume-btn" onClick={() => setIsMobileMenuOpen(false)}>
              My Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}