// src/sections/Skills.jsx
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

function SkillIcon({ name }) {
    const common = {
        width: 22,
        height: 22,
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: 1.7,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        'aria-hidden': true,
    };

    if (name === 'frontend') {
        return (
            <svg {...common}>
                <rect x="2.5" y="4" width="19" height="13" rx="2.5" />
                <path d="M8 21h8M12 17v4M7 8.5l-2 2 2 2M17 8.5l2 2-2 2" />
            </svg>
        );
    }

    if (name === 'backend') {
        return (
            <svg {...common}>
                <ellipse cx="12" cy="5.5" rx="7.5" ry="3" />
                <path d="M4.5 5.5v6c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3v-6" />
                <path d="M4.5 11.5v6c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3v-6" />
            </svg>
        );
    }

    if (name === 'tools') {
        return (
            <svg {...common}>
                <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.3-.3-.3-2.3 2.6-2.6z" />
                <path d="M14 14l6 6" />
            </svg>
        );
    }

    return (
        <svg {...common}>
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3z" />
        </svg>
    );
}

function Skills() {
    const skillCategories = [
        {
            title: "Frontend & Mobile",
            icon: "frontend",
            accent: "#38bdf8",
            skills: ["React", "React Native", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"]
        },
        {
            title: "Backend & Bases de Datos",
            icon: "backend",
            accent: "#a78bfa",
            skills: ["Node.js", "Express", "Java (Spring Boot)", "C#", "PostgreSQL"]
        },
        {
            title: "Herramientas & Despliegue",
            icon: "tools",
            accent: "#34d399",
            skills: ["Git / GitHub", "Docker", "VS Code", "Vercel", "Render", "Vite"]
        },
        {
            title: "Idiomas",
            icon: "languages",
            accent: "#fbbf24",
            skills: ["Español (nativo)", "Maya Kaqchikel (nativo)", "Inglés (básico)"]
        }
    ];

    return (
        <section id="skills" className="section">
            <SectionHeading
                index="02"
                eyebrow="Mi caja de herramientas"
                title="Habilidades"
                highlight="técnicas"
                description="Tecnologías con las que construyo productos de principio a fin."
            />

            <div className="skills-grid">
                {skillCategories.map((category, index) => (
                    <Reveal
                        as="article"
                        key={category.title}
                        className="skill-card"
                        delay={index * 90}
                        style={{ '--card-accent': category.accent }}
                    >
                        <div className="skill-card-head">
                            <span className="skill-icon">
                                <SkillIcon name={category.icon} />
                            </span>
                            <h3>{category.title}</h3>
                        </div>
                        <ul>
                            {category.skills.map((skill) => (
                                <li key={skill}>{skill}</li>
                            ))}
                        </ul>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}

export default Skills;
