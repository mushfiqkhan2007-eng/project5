import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechnologiesSection from './components/TechnologiesSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <TechnologiesSection />
      <Footer />
      <ToastContainer position="top-right" autoClose={2500} />
    </div>
  )
}
