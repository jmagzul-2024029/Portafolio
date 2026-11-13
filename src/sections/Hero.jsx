// src/sections/Hero.jsx
function Hero() {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-grid">
                <div className="hero-content">
                    <p className="greeting">
                        <span className="status-dot" aria-hidden="true" />
                        Disponible para nuevos proyectos
                    </p>
                    <h1 className="name">
                        Jorge <span className="gradient-text">Magzul</span>
                    </h1>
                    <h2 className="title">
                        Desarrollador de Software <span className="title-accent">Web &amp; Mobile</span>
                    </h2>
                    <p className="summary">
                        Especializado en el desarrollo de aplicaciones web y móviles. Me enfoco
                        en crear interfaces limpias e intuitivas en el frontend y servicios modulares y robustos en el backend.
                    </p>
                    <div className="hero-buttons">
                        <a href="#projects" className="btn btn-primary">
                            Ver Proyectos <span className="btn-arrow" aria-hidden="true">→</span>
                        </a>
                        <a href="/cv.pdf" download className="btn btn-secondary">
                            Descargar CV
                        </a>
                    </div>
                    <ul className="hero-meta">
                        <li><strong>Full Stack</strong>Web &amp; Mobile</li>
                        <li><strong>Guatemala</strong>Ciudad de Guatemala</li>
                        <li><strong>Stack</strong>React · Node.js · Spring Boot</li>
                    </ul>
                </div>

                <div className="hero-visual" aria-hidden="true">
                    <span className="float-chip chip-1">React</span>
                    <span className="float-chip chip-2">Node.js</span>
                    <span className="float-chip chip-3">Spring Boot</span>

                    <div className="code-window">
                        <div className="code-bar">
                            <span className="code-dot" />
                            <span className="code-dot" />
                            <span className="code-dot" />
                            <span className="code-file">developer.js</span>
                        </div>
                        <pre className="code-body"><code>
<span className="code-line"><span className="tok-key">const</span> <span className="tok-var">developer</span> <span className="tok-op">=</span> <span className="tok-brace">{'{'}</span></span>
<span className="code-line">{'  '}<span className="tok-prop">nombre</span><span className="tok-op">:</span> <span className="tok-str">'Jorge Magzul'</span><span className="tok-op">,</span></span>
<span className="code-line">{'  '}<span className="tok-prop">rol</span><span className="tok-op">:</span> <span className="tok-str">'Web &amp; Mobile'</span><span className="tok-op">,</span></span>
<span className="code-line">{'  '}<span className="tok-prop">stack</span><span className="tok-op">:</span> <span className="tok-brace">[</span><span className="tok-str">'React'</span><span className="tok-op">,</span> <span className="tok-str">'Node.js'</span><span className="tok-op">,</span> <span className="tok-str">'Spring Boot'</span><span className="tok-brace">]</span><span className="tok-op">,</span></span>
<span className="code-line">{'  '}<span className="tok-prop">enfoque</span><span className="tok-op">:</span> <span className="tok-str">'clean code + UX'</span><span className="tok-op">,</span></span>
<span className="code-line">{'  '}<span className="tok-prop">disponible</span><span className="tok-op">:</span> <span className="tok-key">true</span><span className="tok-op">,</span></span>
<span className="code-line"><span className="tok-brace">{'}'}</span><span className="tok-op">;</span></span>
<span className="code-line">{' '}</span>
<span className="code-line"><span className="tok-com">// construyendo experiencias</span></span>
<span className="code-line"><span className="tok-var">developer</span><span className="tok-op">.</span><span className="tok-prop">construir</span><span className="tok-brace">()</span><span className="tok-op">;</span><span className="tok-cursor" /></span>
</code></pre>
                    </div>
                </div>
            </div>

            <a href="#about" className="scroll-hint" aria-label="Bajar a la sección Sobre mí">
                <span aria-hidden="true" />
            </a>
        </section>
    );
}

export default Hero;
