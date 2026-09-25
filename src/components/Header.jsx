import { useState, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { useTheme } from '../hooks/useTheme';

const Header = () => {
  const { language, t, changeLanguage } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'nav_home' },
    { id: 'about', label: 'nav_about' },
    { id: 'skills', label: 'nav_skills' },
    { id: 'projects', label: 'nav_projects' },
    { id: 'services', label: 'nav_services' },
    { id: 'contact', label: 'nav_contact' },
  ];

  const languages = ['fr', 'en', 'es', 'ar'];

  return (
    <header className="header">
      <nav className="navbar container">
        <a href="#home" className="logo">
          BADARA<span>.</span>
        </a>
        <div className="nav-right">
          <div className="nav-menu" id="nav-menu">
            {navLinks.map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
              >
                {t(link.label)}
              </a>
            ))}
            <div className="desktop-language-switcher language-switcher">
              {languages.map(lang => (
                <button
                  key={lang}
                  className={`language-btn ${language === lang ? 'active' : ''}`}
                  onClick={() => changeLanguage(lang)}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
          <button
            className="theme-btn"
            id="theme-btn"
            onClick={toggleTheme}
            aria-label="Changer le thème"
          >
            <i className={`fa-solid ${isDark ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>
          <button
            className="nav-toggle"
            id="nav-toggle"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Ouvrir le menu"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      <div className={`nav-menu ${isMenuOpen ? 'show' : ''}`} id="nav-menu-mobile">
        <button
          className="nav-close"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Fermer le menu"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
        {navLinks.map(link => (
          <a
            key={`mobile-${link.id}`}
            href={`#${link.id}`}
            className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            {t(link.label)}
          </a>
        ))}
        <div className="mobile-language-label">Language / Langue</div>
        <div className="mobile-language-switcher language-switcher">
          {languages.map(lang => (
            <button
              key={`mobile-${lang}`}
              className={`language-btn ${language === lang ? 'active' : ''}`}
              onClick={() => changeLanguage(lang)}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
