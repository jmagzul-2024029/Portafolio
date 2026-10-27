// src/sections/Hero.jsx
function Hero() {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-content">
                <p className="greeting">Hola, mi nombre es</p>
                <h1 className="name">Jorge Magzul</h1>
                <h2 className="title">Desarrollador de Software / Web & Mobile</h2>
                <p className="summary">
                    Especializado en el desarrollo de aplicaciones web y móviles. Me enfoco
                    en crear interfaces limpias e intuitivas en el frontend y servicios modulares y robustos en el backend.
                </p>
                <div className="hero-buttons">
                    <a href="#projects" className="btn btn-primary">Ver Proyectos</a>
                    <a href="/cv.pdf" download className="btn btn-secondary">Descargar CV</a>
                </div>
            </div>
        </section>
    );
}

export default Hero;