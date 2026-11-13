import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import Galaxy from './components/Galaxy';
import './App.css'

function App() {
  return (
    <div className="app-container">
      {/* Fondo galaxia animado */}
      <div className="galaxy-backdrop" aria-hidden="true">
        <Galaxy />
      </div>

      {/* Halos de color y malla sutil */}
      <div className="backdrop" aria-hidden="true">
        <span className="aurora aurora-1" />
        <span className="aurora aurora-2" />
        <span className="aurora aurora-3" />
        <span className="grid-mesh" />
      </div>

      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App
