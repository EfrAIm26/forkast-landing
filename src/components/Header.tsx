import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './Header.css'

const Header = () => {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : ''
  }

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <img src="/logo-circle.png" alt="Forkast Logo" />
          <span>Forkast</span>
        </Link>

        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <Link to="/" className={`nav-link ${isActive('/')}`}>
            {t('nav.home')}
          </Link>
          <Link to="/solutions" className={`nav-link ${isActive('/solutions')}`}>
            {t('nav.solutions')}
          </Link>
          <Link to="/book-demo" className={`nav-link ${isActive('/book-demo')}`}>
            {t('nav.bookDemo')}
          </Link>
        </nav>

        <div className="header-actions">
          <div className="language-switcher">
            <button
              className={i18n.language === 'es' ? 'active' : ''}
              onClick={() => changeLanguage('es')}
            >
              ES
            </button>
            <span className="divider">/</span>
            <button
              className={i18n.language === 'en' ? 'active' : ''}
              onClick={() => changeLanguage('en')}
            >
              EN
            </button>
          </div>
          <a href="https://app.forkast.me" className="btn-login" target="_blank" rel="noopener noreferrer">
            {t('nav.login')}
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
