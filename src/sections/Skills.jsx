// src/sections/Skills.jsx
function Skills() {
    const skillCategories = [
        {
            title: "Frontend & Mobile",
            skills: ["React", "React Native", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"]
        },
        {
            title: "Backend & Bases de Datos",
            skills: ["Node.js", "Express", "Java (Spring Boot)", "C#", "PostgreSQL"]
        },
        {
            title: "Herramientas & Herramientas de Despliegue",
            skills: ["Git / GitHub", "Docker", "VS Code", "Vercel", "Render", "Vite"]
        }
    ];

    return (
        <section id="skills" className="section">
            <h2>Habilidades Técnicas</h2>
            <div className="skills-grid">
                {skillCategories.map((category, index) => (
                    <div key={index} className="skill-card">
                        <h3>{category.title}</h3>
                        <ul>
                            {category.skills.map((skill, idx) => (
                                <li key={idx}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;