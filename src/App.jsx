import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'

function App() {
  return (
    <div className="bg-military text-white scroll-smooth">
      <Navbar />
      <main className="space-y-32">
        <HeroSection />
        <About/>
        <Skills/>
        <Projects/>
      </main>
      
    </div>
  )
}

export default App
