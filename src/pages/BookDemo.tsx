import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import './BookDemo.css'

const BookDemo = () => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    businessType: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Demo form submitted:', formData)
    alert('¡Gracias! Nos pondremos en contacto pronto para agendar tu demo.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const team = [
    {
      name: t('bookDemo.team.gonzalo.name'),
      role: t('bookDemo.team.gonzalo.role'),
      bio: t('bookDemo.team.gonzalo.bio'),
      image: '/Gonzalomesia.jpg'
    },
    {
      name: t('bookDemo.team.mohit.name'),
      role: t('bookDemo.team.mohit.role'),
      bio: t('bookDemo.team.mohit.bio'),
      image: '/MohitBalani.jpg'
    },
    {
      name: t('bookDemo.team.joseph.name'),
      role: t('bookDemo.team.joseph.role'),
      bio: t('bookDemo.team.joseph.bio'),
      image: '/JosephSaavedra.jpg'
    },
    {
      name: t('bookDemo.team.efraim.name'),
      role: t('bookDemo.team.efraim.role'),
      bio: t('bookDemo.team.efraim.bio'),
      image: '/efraimrodriguez.jpg'
    }
  ]

  return (
    <div className="book-demo-page">
      <div className="book-demo-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="book-demo-hero-content"
          >
            <h1>{t('bookDemo.title')}</h1>
            <p>{t('bookDemo.subtitle')}</p>
          </motion.div>
        </div>
      </div>

      <section className="team-section section">
        <div className="container">
          <div className="team-grid">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="team-card"
              >
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="demo-form-section section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="demo-form-container"
          >
            <div className="demo-form-header">
              <h2>{t('bookDemo.formTitle')}</h2>
              <p>{t('bookDemo.formSubtitle')}</p>
            </div>

            <form className="demo-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>{t('bookDemo.firstName')}</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>{t('bookDemo.lastName')}</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>{t('bookDemo.email')}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>{t('bookDemo.company')}</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>{t('bookDemo.phone')}</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>{t('bookDemo.businessType')}</label>
                <select
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  required
                >
                  <option value="">{t('bookDemo.businessType')}</option>
                  <option value="single">{t('bookDemo.businessTypes.singleLocation')}</option>
                  <option value="chain">{t('bookDemo.businessTypes.chain')}</option>
                  <option value="franchise">{t('bookDemo.businessTypes.franchise')}</option>
                  <option value="group">{t('bookDemo.businessTypes.group')}</option>
                  <option value="other">{t('bookDemo.businessTypes.other')}</option>
                </select>
              </div>

              <div className="form-group">
                <label>{t('bookDemo.message')}</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                />
              </div>

              <button type="submit" className="btn-submit-demo">
                {t('bookDemo.submit')}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default BookDemo
