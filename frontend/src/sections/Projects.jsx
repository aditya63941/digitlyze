import "../styles/projects.css";

const projects = [
  {
    title: "Digitlyze – Client Management System",
    description:
      "A full-stack MERN SaaS platform with authentication, admin dashboard, client project tracking, contact management, and role-based access.",
    tech: ["React", "Node.js", "MongoDB", "JWT"],
    category: "Web Development",
    status: "In Progress",
  },
  {
    title: "Profile Monitoring System (AI/ML)",
    description:
      "An AI-based system that analyzes student profiles and suggests career paths using ML models and performance data.",
    tech: ["Python", "ML", "TensorFlow", "Scikit-learn"],
    category: "AI / Machine Learning",
    status: "Completed",
  },
  {
    title: "Mental Health Detection using NLP",
    description:
      "Detects mental health indicators from social media posts using NLP techniques like TF-IDF, Word2Vec, CNN, and XGBoost.",
    tech: ["Python", "NLP", "CNN", "XGBoost"],
    category: "AI / NLP",
    status: "Completed",
  },
  {
    title: "Child Labor & Food Management System",
    description:
      "A web-based system for NGOs to manage child labor cases and food distribution records efficiently.",
    tech: ["HTML", "CSS", "JavaScript", "MySQL"],
    category: "Social Impact System",
    status: "Completed",
  },
  {
    title: "Netflix Clone (Frontend)",
    description:
      "A Netflix-style frontend UI built during internship, focusing on responsive layouts and modern UI components.",
    tech: ["React", "CSS"],
    category: "Frontend Development",
    status: "Completed",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-header">
          <h2>Projects</h2>
          <p>Academic, internship, and real-world projects I’ve built</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-header">
                <span
                  className={`status ${
                    project.status === "Completed"
                      ? "completed"
                      : "inprogress"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <h3>{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>

              <div className="project-footer">
                <span className="category">{project.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
