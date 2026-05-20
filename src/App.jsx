import { Header } from './components/landing/Header'
import { Hero } from './components/landing/Hero'

import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  )
}

export default App
