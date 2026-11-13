// src/components/Header.jsx
import { useEffect, useState } from 'react';

const links = [
    ['#about', 'Sobre mí'],
    ['#skills', 'Habilidades'],
    ['#experience', 'Experiencia'],
    ['#projects', 'Proyectos'],
    ['#contact', 'Contacto'],
];

function Header() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [progress, setProgress] = useState(0);
    const [active, setActive] = useState('');
    const close = () => setOpen(false);

    useEffect(() => {
        const onScroll = () => {
            const doc = document.documentElement;
            const max = doc.scrollHeight - window.innerHeight;
            setProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
        };
    }, []);

    useEffect(() => {
        const sections = links
            .map(([href]) => document.getElementById(href.slice(1)))
            .filter(Boolean);

        if (!sections.length || !('IntersectionObserver' in window)) return undefined;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id);
                });
            },
            { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    return (
        <header className={`header${scrolled ? ' scrolled' : ''}`}>
            <div className="header-inner">
                <div className="logo">
                    <a href="#hero" onClick={close} aria-label="Ir al inicio">
                        <span className="logo-badge" aria-hidden="true">JM</span>
                        <span className="logo-text">&lt;JorgeMagzul /&gt;</span>
                    </a>
                </div>
                <button
                    type="button"
                    className="menu-toggle"
                    aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
                    aria-expanded={open}
                    aria-controls="main-nav"
                    onClick={() => setOpen(!open)}
                >
                    {open ? '✕' : '☰'}
                </button>
                <nav id="main-nav" className={`nav-links${open ? ' open' : ''}`} aria-label="Principal">
                    {links.map(([href, label]) => (
                        <a
                            key={href}
                            href={href}
                            onClick={close}
                            className={active === href.slice(1) ? 'active' : undefined}
                            aria-current={active === href.slice(1) ? 'true' : undefined}
                        >
                            {label}
                        </a>
                    ))}
                    <a href="#contact" className="nav-cta" onClick={close}>
                        Hablemos <span aria-hidden="true">→</span>
                    </a>
                </nav>
            </div>
            <span className="scroll-progress" style={{ width: `${progress}%` }} aria-hidden="true" />
        </header>
    );
}

export default Header;
