import "./Skills.css";

const skills = [
  { name: "Python", note: "Core language" },
  { name: "Java", note: "Core language" },
  { name: "C++", note: "Core language" },
  { name: "HTML", note: "Basic" },
  { name: "JavaScript", note: "Basic" },
  { name: "MS Word", note: "Documentation" },
  { name: "MS Excel", note: "Spreadsheets" },
  { name: "PowerPoint", note: "Presentations" },
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-heading">Skills</h2>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-card">
              <h3>{skill.name}</h3>
              <p>{skill.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
