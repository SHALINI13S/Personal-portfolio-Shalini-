import { useEffect, useState } from "react";
import "./Projects.css";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | success | error

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch(`${API_URL}/projects`);
        if (!res.ok) throw new Error("Request failed");
        const json = await res.json();
        setProjects(json.data || []);
        setStatus("success");
      } catch (err) {
        console.error("Failed to load projects:", err);
        setStatus("error");
      }
    }

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-heading">Projects</h2>

        {status === "loading" && (
          <p>Loading projects from the database...</p>
        )}

        {status === "error" && (
          <p>
            Couldn't load projects right now. Please make sure the backend
            API and database are running.
          </p>
        )}

        {status === "success" && projects.length === 0 && (
          <p>No projects found yet.</p>
        )}

        {status === "success" &&
          projects.map((project) => (
            <article key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              <div className="project-tags">
                {project.technologies.map((tech) => (
                  <span key={tech} className="project-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <h4 className="project-features-title">Features</h4>
              <ul className="project-features">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </article>
          ))}
      </div>
    </section>
  );
}

export default Projects;
