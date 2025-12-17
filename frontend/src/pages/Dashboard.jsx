import { useEffect, useState } from "react";
import axios from "../api/axios";
import "./Dashboard.css";

export default function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMyProjects();
  }, []);

  const fetchMyProjects = async () => {
    try {
      const res = await axios.get("/projects");
      setProjects(res.data);
    } catch (err) {
      alert("Failed to load projects");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboard">
      <h2>📊 My Projects</h2>

      {loading ? (
        <p>Loading your projects...</p>
      ) : projects.length === 0 ? (
        <p>No projects assigned yet.</p>
      ) : (
        <div className="dashboard-grid">
          {projects.map((p) => (
            <div key={p._id} className="dashboard-card">
              <h3>{p.title}</h3>
              <p>{p.description}</p>

              <div className="meta">
                <span>Service: {p.service}</span>
                <span>Status: {p.status}</span>
                <span>Assigned To: {p.assignedTo}</span>
              </div>

              <div className="progress">
                <div
                  className="progress-bar"
                  style={{ width: `${p.progress}%` }}
                />
              </div>

              <small>{p.progress}% completed</small>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
