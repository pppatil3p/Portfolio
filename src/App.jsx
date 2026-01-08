import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import Services from "./sections/Services"
import Resume from "./sections/Resume"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Resume />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
