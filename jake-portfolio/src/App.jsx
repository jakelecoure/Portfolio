import { ThemeProvider } from './context/ThemeContext'
import Navbar     from './components/Navbar'
import Hero       from './components/Hero'
import About      from './components/About'
import Projects   from './components/Projects'
import Experience from './components/Experience'
import Contact    from './components/Contact'
import Footer     from './components/Footer'

export default function App() {
  return (
    <ThemeProvider>
      {/* noise grain overlay — purely cosmetic */}
      <div className="noise-overlay" aria-hidden="true" />

      <div className="
        min-h-screen font-body
        bg-dark-bg text-[#e8e8f0]
        dark:bg-dark-bg dark:text-[#e8e8f0]
        bg-light-bg text-[#1a202c]
        transition-colors duration-300
      ">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
