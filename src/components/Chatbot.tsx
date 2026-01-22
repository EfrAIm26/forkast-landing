import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import './Chatbot.css'

interface Message {
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

const Chatbot = () => {
  const { i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [hasGreeted, setHasGreeted] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    // Saludo automático al abrir el chat por primera vez
    if (isOpen && !hasGreeted) {
      const greeting = i18n.language === 'es' 
        ? "¡Hola! Soy Eva, tu asistente virtual de Forkast. 😊 Estoy aquí para ayudarte a conocer nuestros servicios de optimización de revenue para restaurantes. ¿En qué puedo ayudarte hoy?"
        : "Hello! I'm Eva, your Forkast virtual assistant. 😊 I'm here to help you learn about our revenue optimization services for restaurants. How can I help you today?"
      
      setMessages([{
        role: 'assistant',
        content: greeting,
        timestamp: new Date()
      }])
      setHasGreeted(true)
    }
  }, [isOpen, hasGreeted, i18n.language])

  const systemPrompt = i18n.language === 'es' ? `Eres Eva, la asistente virtual de ventas de Forkast. Forkast es una plataforma de optimización de revenue para restaurantes en LATAM.

Tu personalidad:
- Amable, profesional y entusiasta
- Experta en tecnología para restaurantes
- Orientada a ventas pero no agresiva
- Empática con los desafíos de los dueños de restaurantes

Información de Forkast que debes conocer:

SERVICIOS PRINCIPALES:

1. Email Marketing y DAAS
- Servicio completo de email marketing y Data-as-a-Service
- Campañas personalizadas automatizadas
- Segmentación avanzada de clientes
- A/B testing y optimización continua
- Gestión completa de base de datos

2. Venta de Stands para Promoción y Fidelización
- Stands personalizados para eventos gastronómicos
- Estrategia de promoción y fidelización
- Materiales de marketing incluidos
- Ubicaciones premium en eventos
- Análisis de impacto y engagement

3. Optimización de Presencia Digital
- Maximiza visibilidad en plataformas (Rappi, Uber Eats, PedidosYa, OpenTable)
- Optimización de perfiles
- Gestión de menús y fotografía profesional
- Estrategias de promociones
- Monitoreo de competencia

4. Software de Optimización de Precios
- Análisis predictivo y seguimiento de competidores
- Ajuste automático de precios
- Análisis de elasticidad de precios
- Dashboard multi-ubicación
- Forecasting de demanda

EQUIPO:
- Gonzalo Mesía (Co-Founder): Founder E-Box Holdings, estratega de e-commerce
- Mohit Balani (Co-Founder): Ex-Rappi, Ex-BCP, experto en suscripciones digitales
- Joseph Saavedra (Advisor, CTO): Founder Infinite Objects, +15 años en software

CONTACTO:
- Email: efraim@forkast.me
- Sitio web: forkast.me

Tu objetivo es:
1. Responder preguntas sobre Forkast y sus servicios
2. Calificar leads (preguntar tipo de negocio, número de ubicaciones)
3. Agendar demos cuando el cliente muestre interés
4. Resolver objeciones y dudas

Responde de forma concisa (2-3 oraciones máximo), profesional y siempre busca avanzar la conversación hacia una demo.` 
: `You are Eva, Forkast's virtual sales assistant. Forkast is a revenue optimization platform for restaurants in LATAM.

Your personality:
- Friendly, professional, and enthusiastic
- Expert in restaurant technology
- Sales-oriented but not aggressive
- Empathetic to restaurant owners' challenges

Forkast Information:

MAIN SERVICES:

1. Email Marketing & DAAS
- Complete email marketing and Data-as-a-Service
- Automated personalized campaigns
- Advanced customer segmentation
- A/B testing and continuous optimization
- Complete database management

2. Stand Sales for Promotion & Customer Loyalty
- Customized stands for food events
- Promotion and loyalty strategy
- Marketing materials included
- Premium event locations
- Impact and engagement analysis

3. Digital Presence Optimization
- Maximize visibility on platforms (Rappi, Uber Eats, PedidosYa, OpenTable)
- Profile optimization
- Professional menu and photography management
- Promotion strategies
- Competition monitoring

4. Pricing Optimization Software
- Predictive analysis and competitor tracking
- Automatic price adjustment
- Price elasticity analysis
- Multi-location dashboard
- Demand forecasting

TEAM:
- Gonzalo Mesía (Co-Founder): E-Box Holdings Founder, e-commerce strategist
- Mohit Balani (Co-Founder): Ex-Rappi, Ex-BCP, digital subscriptions expert
- Joseph Saavedra (Advisor, CTO): Infinite Objects Founder, +15 years in software

CONTACT:
- Email: efraim@forkast.me
- Website: forkast.me

Your goal is to:
1. Answer questions about Forkast and its services
2. Qualify leads (ask about business type, number of locations)
3. Schedule demos when client shows interest
4. Handle objections and questions

Respond concisely (2-3 sentences max), professionally, and always move the conversation toward a demo.`

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return

    const userMessage: Message = {
      role: 'user',
      content: inputValue,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsLoading(true)

    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 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',
          'HTTP-Referer': window.location.origin,
          'X-Title': 'Forkast Chatbot'
        },
        body: JSON.stringify({
          model: 'google/gemini-3-flash-preview',
          messages: [
            { role: 'system', content: systemPrompt },
            ...messages.map(m => ({ role: m.role, content: m.content })),
            { role: 'user', content: inputValue }
          ],
          temperature: 0.7,
          max_tokens: 500
        })
      })

      if (!response.ok) {
        throw new Error('Failed to get response')
      }

      const data = await response.json()
      const assistantMessage: Message = {
        role: 'assistant',
        content: data.choices[0].message.content,
        timestamp: new Date()
      }

      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      console.error('Error sending message:', error)
      const errorMessage: Message = {
        role: 'assistant',
        content: i18n.language === 'es' 
          ? 'Lo siento, tuve un problema al procesar tu mensaje. ¿Podrías intentarlo de nuevo?' 
          : 'Sorry, I had an issue processing your message. Could you try again?',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      {/* Botón flotante */}
      <button 
        className={`chatbot-toggle ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle chatbot"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {/* Ventana del chatbot */}
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="chatbot-agent">
              <img src="/eva-avatar.jpg" alt="Eva" className="agent-avatar" />
              <div className="agent-info">
                <h4>Eva</h4>
                <p className="agent-status">
                  <span className="status-dot"></span>
                  {i18n.language === 'es' ? 'En línea' : 'Online'}
                </p>
              </div>
            </div>
            <button 
              className="close-chat"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.role}`}>
                {message.role === 'assistant' && (
                  <img src="/eva-avatar.jpg" alt="Eva" className="message-avatar" />
                )}
                <div className="message-content">
                  <p>{message.content}</p>
                  <span className="message-time">
                    {message.timestamp.toLocaleTimeString(i18n.language === 'es' ? 'es-ES' : 'en-US', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </span>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="message assistant">
                <img src="/eva-avatar.jpg" alt="Eva" className="message-avatar" />
                <div className="message-content typing">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-input">
            <input
              type="text"
              placeholder={i18n.language === 'es' ? 'Escribe tu mensaje...' : 'Type your message...'}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isLoading}
            />
            <button 
              onClick={sendMessage}
              disabled={!inputValue.trim() || isLoading}
              aria-label="Send message"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </div>

          <div className="chatbot-footer">
            <span>Powered by Forkast</span>
          </div>
        </div>
      )}
    </>
  )
}

export default Chatbot
