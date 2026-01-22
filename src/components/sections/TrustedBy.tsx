import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import './TrustedBy.css'

const TrustedBy = () => {
  const { t } = useTranslation()

  const clients = [
    {
      name: "Helados de Lima",
      logo: "/heladodelima_logo.png"
    },
    {
      name: "Pan Sal Aire",
      logo: "/pansalaire_logo.png"
    },
    {
      name: "Café Cotidiano",
      logo: "/cafecotidiano_logo.png"
    }
  ]

  return (
    <section className="trusted-by section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2>{t('trustedBy.title')}</h2>
          
          <div className="clients-grid">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="client-logo"
              >
                <img src={client.logo} alt={client.name} />
                <p>{client.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TrustedBy
