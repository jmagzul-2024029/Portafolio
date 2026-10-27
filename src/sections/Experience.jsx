// src/sections/Experience.jsx
function Experience() {
    const experiences = [
        {
            role: "Especialidad en Informática / Ciencias de la Computación",
            place: "Centro Educativo Técnico Laboral Kinal",
            period: "2024 - Presente",
            description: "Formación integral en desarrollo de software, arquitectura de aplicaciones web y móviles, bases de datos relacionales y metodologías de desarrollo."
        },
        {
            role: "Desarrollador Full Stack (Proyectos / Prácticas)",
            place: "Proyectos Personales y Académicos",
            period: "2025 - Presente",
            description: "Desarrollo y despliegue de aplicaciones web completas (SPA), APIs RESTful y soluciones móviles aplicando arquitecturas limpias y control de versiones."
        }
    ];

    return (
        <section id="experience" className="section">
            <h2>Experiencia y Educación</h2>
            <div className="timeline">
                {experiences.map((exp, index) => (
                    <div key={index} className="timeline-item">
                        <h3>{exp.role}</h3>
                        <h4>{exp.place} — <span>{exp.period}</span></h4>
                        <p>{exp.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Experience;