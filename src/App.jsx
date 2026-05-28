import './App.css'

import { Header } from './components/landing/Header'
import { Hero } from './components/landing/Hero'
import { Method } from './components/landing/Method'
import { Results } from './components/landing/Results'
import { Plans } from './components/landing/Plans'
import { FAQ } from './components/landing/FAQ'
import { Footer } from './components/landing/Footer'
import { FloatingWhatsApp } from './components/ui/FloatingWhatsApp'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Method />
        <Results />
        <Plans />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

export default App
