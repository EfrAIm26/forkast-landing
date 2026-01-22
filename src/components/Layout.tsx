import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import Chatbot from './Chatbot'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
      <Footer />
      <Chatbot />
    </div>
  )
}

export default Layout
