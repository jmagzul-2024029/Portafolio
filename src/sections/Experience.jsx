// src/sections/Experience.jsx
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

function Experience() {
    const experiences = [
        {
            role: "Especialidad en Informática / Ciencias de la Computación",
            place: "Centro Educativo Técnico Laboral Kinal",
            period: "2024 - 2026",
            description: "Formación integral en desarrollo de software, arquitectura de aplicaciones web y móviles, bases de datos relacionales y metodologías de desarrollo."
        },
        {
            role: "Desarrollador Full Stack (Proyectos / Prácticas)",
            place: "Proyectos Personales y Académicos",
            period: "2025 - 2026",
            description: "Desarrollo y despliegue de aplicaciones web completas (SPA), APIs RESTful y soluciones móviles aplicando arquitecturas limpias y control de versiones."
        }
    ];

    return (
        <section id="experience" className="section">
            <SectionHeading
                index="03"
                eyebrow="Mi trayectoria"
                title="Experiencia &"
                highlight="educación"
                description="Formación y proyectos que han marcado mi camino como desarrollador."
            />

            <div className="timeline">
                {experiences.map((exp, index) => (
                    <Reveal key={exp.role} className="timeline-item" delay={index * 130}>
                        <span className="timeline-dot" aria-hidden="true" />
                        <div className="timeline-card">
                            <span className="timeline-period">{exp.period}</span>
                            <h3>{exp.role}</h3>
                            <h4>{exp.place}</h4>
                            <p>{exp.description}</p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}

export default Experience;
