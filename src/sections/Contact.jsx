// src/sections/Contact.jsx
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

const EMAIL = "jorgemagzul10@gmail.com";

function Contact() {
    // Sin backend: abre el cliente de correo con el mensaje ya redactado
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const subject = encodeURIComponent(`Contacto desde tu portafolio — ${data.get('name')}`);
        const body = encodeURIComponent(`${data.get('message')}\n\nDe: ${data.get('name')} (${data.get('email')})`);
        window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    };

    return (
        <section id="contact" className="section">
            <SectionHeading
                index="05"
                eyebrow="Hablemos"
                title="Trabajemos"
                highlight="juntos"
                description="¿Tienes una propuesta o quieres colaborar en un proyecto? ¡Hablemos!"
            />

            <div className="contact-container">
                <Reveal as="form" className="contact-form reveal-left" onSubmit={handleSubmit}>
                    <label className="sr-only" htmlFor="name">Tu nombre</label>
                    <input id="name" name="name" type="text" placeholder="Tu Nombre" autoComplete="name" required />
                    <label className="sr-only" htmlFor="email">Tu correo electrónico</label>
                    <input id="email" name="email" type="email" placeholder="Tu Correo Electrónico" autoComplete="email" required />
                    <label className="sr-only" htmlFor="message">Tu mensaje</label>
                    <textarea id="message" name="message" placeholder="Tu Mensaje" rows="5" required />
                    <button type="submit" className="btn btn-primary">
                        Enviar Mensaje <span className="btn-arrow" aria-hidden="true">→</span>
                    </button>
                    <p className="form-note">Se abrirá tu cliente de correo con el mensaje listo para enviar.</p>
                </Reveal>

                <div className="contact-info">
                    <Reveal className="contact-card" delay={100}>
                        <span className="contact-icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 10c0 5.5-8 12-8 12S4 15.5 4 10a8 8 0 1 1 16 0Z" />
                                <circle cx="12" cy="10" r="2.6" />
                            </svg>
                        </span>
                        <div>
                            <span className="contact-label">Ubicación</span>
                            <p>Guatemala City, Guatemala</p>
                        </div>
                    </Reveal>

                    <Reveal className="contact-card" delay={200}>
                        <span className="contact-icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="5" width="18" height="14" rx="2.5" />
                                <path d="m3.5 7 8.5 6 8.5-6" />
                            </svg>
                        </span>
                        <div>
                            <span className="contact-label">Email</span>
                            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                        </div>
                    </Reveal>

                    <Reveal className="contact-card" delay={300}>
                        <span className="contact-icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="9" />
                                <path d="M12 7v5l3.5 2" />
                            </svg>
                        </span>
                        <div>
                            <span className="contact-label">Disponibilidad</span>
                            <p>Abierto a prácticas y proyectos freelance</p>
                        </div>
                    </Reveal>

                    <Reveal className="social-links" delay={400}>
                        <a className="social-link" href="https://github.com/jmagzul-2024029" target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M12 .5A11.5 11.5 0 0 0 .5 12.3c0 5.2 3.3 9.6 7.9 11.1.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.4-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a10.9 10.9 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.2 0 4.6-2.7 5.6-5.3 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6a11.6 11.6 0 0 0 7.9-11.1A11.5 11.5 0 0 0 12 .5Z" />
                            </svg>
                            GitHub
                        </a>
                        <a className="social-link" href="https://www.linkedin.com/in/jorge-magzul-953925423/" target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4V21H3V9.5Zm7 0h3.8v1.6h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.5 4.7 5.9V21h-4v-5.3c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V21h-4V9.5Z" />
                            </svg>
                            LinkedIn
                        </a>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

export default Contact;
