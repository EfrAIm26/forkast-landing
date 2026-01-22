import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import './Solutions.css'

const Solutions = () => {
  const { t } = useTranslation()

  const solutions = [
    {
      title: t('solutions.emailMarketing.title'),
      description: t('solutions.emailMarketing.description'),
      features: t('solutions.emailMarketing.features', { returnObjects: true }) as string[],
      roi: t('solutions.emailMarketing.roi'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: t('solutions.stands.title'),
      description: t('solutions.stands.description'),
      features: t('solutions.stands.features', { returnObjects: true }) as string[],
      roi: t('solutions.stands.roi'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: t('solutions.digitalPresence.title'),
      description: t('solutions.digitalPresence.description'),
      features: t('solutions.digitalPresence.features', { returnObjects: true }) as string[],
      roi: t('solutions.digitalPresence.roi'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: t('solutions.pricingOptimization.title'),
      description: t('solutions.pricingOptimization.description'),
      features: t('solutions.pricingOptimization.features', { returnObjects: true }) as string[],
      roi: t('solutions.pricingOptimization.roi'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    }
  ]

  return (
    <div className="solutions-page">
      <div className="solutions-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="solutions-hero-content"
          >
            <h1>{t('solutions.title')}</h1>
            <p>{t('solutions.subtitle')}</p>
          </motion.div>
        </div>
      </div>

      <div className="solutions-content section">
        <div className="container">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`solution-card ${index % 2 === 1 ? 'solution-card-reverse' : ''}`}
            >
              <div className="solution-icon-container">
                <div className="solution-icon">{solution.icon}</div>
              </div>
              
              <div className="solution-details">
                <h2>{solution.title}</h2>
                <p className="solution-description">{solution.description}</p>
                
                <ul className="solution-features">
                  {solution.features.map((feature, idx) => (
                    <li key={idx}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Solutions
