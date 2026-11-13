// src/components/ProjectCard.jsx
function ProjectCard({ title, description, techs, github, demo, index = 0 }) {
    return (
        <article className="project-card">
            <div className="project-top">
                <span className="project-number">PROYECTO {String(index + 1).padStart(2, '0')}</span>
                <span className="project-arrow" aria-hidden="true">↗</span>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <ul className="tech-tags" aria-label="Tecnologías">
                {techs.map((tech) => (
                    <li key={tech} className="tag">{tech}</li>
                ))}
            </ul>
            <div className="project-links">
                <a href={github} target="_blank" rel="noopener noreferrer">
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12 .5A11.5 11.5 0 0 0 .5 12.3c0 5.2 3.3 9.6 7.9 11.1.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.4-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a10.9 10.9 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.2 0 4.6-2.7 5.6-5.3 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6a11.6 11.6 0 0 0 7.9-11.1A11.5 11.5 0 0 0 12 .5Z" />
                    </svg>
                    GitHub
                </a>
                {demo && demo !== "#" && (
                    <a href={demo} target="_blank" rel="noopener noreferrer">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M14 3h7v7M21 3l-9 9" />
                            <path d="M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6" />
                        </svg>
                        Demo en Vivo
                    </a>
                )}
            </div>
        </article>
    );
}

export default ProjectCard;
