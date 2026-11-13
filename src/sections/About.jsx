// src/sections/About.jsx
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

function About() {
    return (
        <section id="about" className="section">
            <SectionHeading
                index="01"
                eyebrow="Conóceme"
                title="Sobre"
                highlight="mí"
                description="Un poco de quién soy, cómo trabajo y lo que me motiva a seguir creando."
            />

            <Reveal className="about-content">
                <p>
                    Soy un apasionado del desarrollo de software con experiencia construyendo aplicaciones
                    de extremo a extremo <strong>(Full Stack)</strong>. Me motiva resolver problemas reales mediante
                    código limpio, eficiente y escalable.
                </p>
                <p>
                    Disfruto trabajar en entornos colaborativos utilizando metodologías ágiles <strong>(Scrum)</strong> y
                    manteniendo un flujo de trabajo organizado mediante <strong>Git y GitHub</strong>. Siempre estoy buscando
                    aprender nuevas tecnologías y perfeccionar mis habilidades.
                </p>
            </Reveal>

            <div className="about-highlights">
                <Reveal className="highlight" delay={100}>
                    <strong>Full Stack</strong>
                    <span>Web &amp; Mobile</span>
                </Reveal>
                <Reveal className="highlight" delay={200}>
                    <strong>Clean Code</strong>
                    <span>Escalable y mantenible</span>
                </Reveal>
                <Reveal className="highlight" delay={300}>
                    <strong>Agile</strong>
                    <span>Scrum · Git · GitHub</span>
                </Reveal>
            </div>
        </section>
    );
}

export default About;
