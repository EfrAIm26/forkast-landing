import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import './HowItWorks.css'

const HowItWorks = () => {
  const { t } = useTranslation()
  const [expandedStep, setExpandedStep] = useState<number | null>(null)

  const steps = [
    {
      number: "1",
      title: t('howItWorks.step1.title'),
      description: t('howItWorks.step1.description'),
      image: '/Forkastpaso1.png'
    },
    {
      number: "2",
      title: t('howItWorks.step2.title'),
      description: t('howItWorks.step2.description'),
      image: '/Forkastpaso2.png'
    },
    {
      number: "3",
      title: t('howItWorks.step3.title'),
      description: t('howItWorks.step3.description'),
      image: '/Forkastpaso3.png'
    }
  ]

  const toggleStep = (index: number) => {
    setExpandedStep(expandedStep === index ? null : index)
  }

  return (
    <section className="how-it-works section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header text-center"
        >
          <h2>{t('howItWorks.title')}</h2>
          <p className="section-subtitle">{t('howItWorks.subtitle')}</p>
        </motion.div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`step-card ${expandedStep === index ? 'expanded' : ''}`}
              onClick={() => toggleStep(index)}
              whileHover={{ scale: 1.03 }}
              style={{ cursor: 'pointer' }}
            >
              <div className="step-image-container">
                <img src={step.image} alt={step.title} className="step-image" />
                <div className="step-number">{step.number}</div>
              </div>
              
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
