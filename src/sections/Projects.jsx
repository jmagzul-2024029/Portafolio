// src/sections/Projects.jsx
import ProjectCard from '../components/ProjectCard';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

function Projects() {
    const projectsList = [
        {
            title: "L'ESSENCE DE FRANCE",
            description: "Aplicación e-commerce Full Stack para la gestión y venta de perfumería.",
            techs: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "Render", "Vercel"],
            github: "https://github.com/jmagzul-2024029/Perfume-store-web.git",
            demo: "https://perfume-store-web-jm.vercel.app/"
        },
        {
            title: "Sistema de Gestión Bancaria",
            description: "Proyecto colaborativo en equipo para la gestión de cuentas, transacciones y control de usuarios.",
            techs: ["Java", "Spring Boot", "PostgreSQL"],
            github: "https://github.com/ocumatz-2021660/Sistema_Bancario.git",
            demo: "#"
        }
    ];

    return (
        <section id="projects" className="section">
            <SectionHeading
                index="04"
                eyebrow="Trabajo reciente"
                title="Proyectos"
                highlight="destacados"
                description="Una selección de aplicaciones que he diseñado y desarrollado."
            />

            <div className="projects-grid">
                {projectsList.map((project, index) => (
                    <Reveal key={project.title} delay={index * 120}>
                        <ProjectCard {...project} index={index} />
                    </Reveal>
                ))}
            </div>
        </section>
    );
}

export default Projects;
