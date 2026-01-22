import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import './CTA.css'

const CTA = () => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implementar envío de formulario
    console.log('Form submitted:', formData)
    alert('¡Gracias! Nos pondremos en contacto pronto.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="cta section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="cta-content"
        >
          <div className="cta-text">
            <h2>{t('cta.title')}</h2>
            <p>{t('cta.subtitle')}</p>
          </div>

          <form className="cta-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder={t('bookDemo.firstName')}
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder={t('bookDemo.email')}
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="company"
              placeholder={t('bookDemo.company')}
              value={formData.company}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder={t('bookDemo.message')}
              value={formData.message}
              onChange={handleChange}
              rows={4}
            />
            <button type="submit" className="btn-submit">
              {t('cta.button')}
            </button>
            <p className="form-note">{t('cta.noCredit')}</p>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
