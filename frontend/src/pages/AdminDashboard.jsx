import { useEffect, useState } from "react";
import axios from "../api/axios";

export default function AdminDashboard() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get("/projects", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setProjects(res.data);
      } catch (error) {
        console.error("Failed to load projects", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <h2 style={{ padding: "2rem" }}>Loading projects...</h2>;
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Admin Dashboard</h1>

      {projects.length === 0 ? (
        <p>No projects found</p>
      ) : (
        <div style={{ display: "grid", gap: "1rem" }}>
          {projects.map((project) => (
            <div
              key={project._id}
              style={{
                padding: "1rem",
                borderRadius: "10px",
                background: "#111",
                color: "#fff"
              }}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <p>
                <strong>Status:</strong> {project.status}
              </p>

              <p>
                <strong>Progress:</strong> {project.progress}%
              </p>

              <p>
                <strong>Client:</strong>{" "}
                {project.client?.name || "N/A"}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
