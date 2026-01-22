import { useTranslation } from 'react-i18next'
import './Footer.css'

const Footer = () => {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src="/logo-circle-inverted.png" alt="Forkast Logo" />
            <span>Forkast</span>
          </div>
          <p className="footer-tagline">
            {t('footer.tagline')}
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>{t('footer.product')}</h4>
            <ul>
              <li><a href="/solutions">{t('footer.features')}</a></li>
              <li><a href="/solutions">{t('footer.pricing')}</a></li>
              <li><a href="/solutions">{t('footer.integrations')}</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>{t('footer.company')}</h4>
            <ul>
              <li><a href="/book-demo">{t('footer.about')}</a></li>
              <li><a href="#">{t('footer.blog')}</a></li>
              <li><a href="#">{t('footer.careers')}</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>{t('footer.legal')}</h4>
            <ul>
              <li><a href="#">{t('footer.privacy')}</a></li>
              <li><a href="#">{t('footer.terms')}</a></li>
              <li><a href="#">{t('footer.cookies')}</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>{t('footer.contact')}</h4>
            <ul>
              <li><a href="mailto:efraim@forkast.me">efraim@forkast.me</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} Forkast. {t('footer.rights')}.</p>
      </div>
    </footer>
  )
}

export default Footer
