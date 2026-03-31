import { useState, useEffect, useRef } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ['home', 'about', 'features', 'courses', 'contact'];
      const scrollY = window.scrollY + 100;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && scrollY >= el.offsetTop && scrollY < el.offsetTop + el.offsetHeight) {
          setActiveSection(id);
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header id="navbar" className={scrolled ? 'scrolled' : ''}>
      <nav className="container nav-inner">
        <a href="#home" className="logo" onClick={closeMenu}>
          <span className="logo-icon">M</span>
          <span className="logo-text">Methodological <em>Coaching</em></span>
        </a>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {['about', 'features', 'courses', 'contact'].map(id => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`nav-link ${activeSection === id ? 'active' : ''}`}
                onClick={closeMenu}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="btn btn-primary btn-sm" onClick={closeMenu}>
              Enroll Now
            </a>
          </li>
        </ul>
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>
    </header>
  );
}
