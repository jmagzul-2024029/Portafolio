// src/sections/Contact.jsx
function Contact() {
    return (
        <section id="contact" className="section">
            <h2>Contacto</h2>
            <p>¿Tienes una propuesta o quieres colaborar en un proyecto? ¡Hablemos!</p>

            <div className="contact-container">
                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="Tu Nombre" required />
                    <input type="email" placeholder="Tu Correo Electrónico" required />
                    <textarea placeholder="Tu Mensaje" rows="5" required></textarea>
                    <button type="submit" className="btn btn-primary">Enviar Mensaje</button>
                </form>

                <div className="contact-info">
                    <p><strong>Ubicación:</strong> Guatemala City, Guatemala</p>
                    <p><strong>Email:</strong> jorgemagzul10@gmail.com</p>
                    <div className="social-links">
                        <a href="https://github.com/jmagzul-2024029" target="_blank" rel="noreferrer">GitHub</a>
                        <a href="https://www.linkedin.com/in/jorge-magzul-953925423/" target="_blank" rel="noreferrer">LinkedIn</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;