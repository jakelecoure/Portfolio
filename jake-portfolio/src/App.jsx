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
      <div className="
        min-h-screen font-body
        dark:bg-[#0a0a0a] dark:text-[#e5e5e5]
        bg-white text-[#111]
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
