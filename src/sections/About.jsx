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
                    Cuento además con experiencia práctica en <strong>Soporte Técnico TI</strong>, donde adquirí
                    bases sólidas en diagnóstico de hardware, mantenimiento preventivo/correctivo y configuración
                    de redes. Esta combinación me permite comprender el funcionamiento de los sistemas tanto a nivel
                    de software como de infraestructura.
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
                    <strong>Soporte TI</strong>
                    <span>Hardware · Redes · Diagnóstico</span>
                </Reveal>
                <Reveal className="highlight" delay={300}>
                    <strong>Clean Code</strong>
                    <span>Escalable y mantenible</span>
                </Reveal>
                <Reveal className="highlight" delay={400}>
                    <strong>Agile</strong>
                    <span>Scrum · Git · GitHub</span>
                </Reveal>
            </div>
        </section>
    );
}

export default About;
