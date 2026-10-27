// src/components/Header.jsx
function Header() {
    return (
        <header className="header">
            <div className="logo">
                <a href="#hero">&lt;JorgeMagzul /&gt;</a>
            </div>
            <nav className="nav-links">
                <a href="#about">Sobre mí</a>
                <a href="#skills">Habilidades</a>
                <a href="#experience">Experiencia</a>
                <a href="#projects">Proyectos</a>
                <a href="#contact">Contacto</a>
            </nav>
        </header>
    );
}

export default Header;