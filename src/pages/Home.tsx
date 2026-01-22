import Hero from '../components/sections/Hero'
import HowItWorks from '../components/sections/HowItWorks'
import TrustedBy from '../components/sections/TrustedBy'
import Features from '../components/sections/Features'
import Testimonials from '../components/sections/Testimonials'
import CTA from '../components/sections/CTA'

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <HowItWorks />
      <TrustedBy />
      <Features />
      <Testimonials />
      <CTA />
    </div>
  )
}

export default Home
