// src/sections/Projects.jsx
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
            description: "Aplicación orientada a la gestión de cuentas, transacciones y control de usuarios.",
            techs: ["Java", "Spring Boot", "PostgreSQL"],
            github: "https://github.com/ocumatz-2021660/Sistema_Bancario.git",
            demo: "#"
        }
    ];

    return (
        <section id="projects" className="section">
            <h2>Proyectos Destacados</h2>
            <div className="projects-grid">
                {projectsList.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="tech-tags">
                            {project.techs.map((tech, idx) => (
                                <span key={idx} className="tag">{tech}</span>
                            ))}
                        </div>
                        <div className="project-links">
                            <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                            {project.demo !== "#" && (
                                <a href={project.demo} target="_blank" rel="noopener noreferrer">Demo en Vivo</a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;