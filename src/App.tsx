import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Solutions from './pages/Solutions'
import BookDemo from './pages/BookDemo'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/book-demo" element={<BookDemo />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
