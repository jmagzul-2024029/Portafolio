import { useState } from 'react'
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
      {/* Wrapper para fijarlo al fondo */}
      <div className="galaxy-container">
        <Galaxy />
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
