import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import './Hero.css'

const Hero = () => {
  const { t } = useTranslation()

  const scrollToDemo = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    })
  }

  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text"
        >
          <img src="/logo-circle-inverted.png" alt="Forkast" className="hero-logo" />
          
          <h1>
            {t('hero.title')}<br />
            {t('hero.subtitle')}
          </h1>
          
          <p className="hero-description">
            {t('hero.description')}
          </p>
          
          <button className="btn-cta" onClick={scrollToDemo}>
            {t('hero.cta')}
            <svg className="arrow-down" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
