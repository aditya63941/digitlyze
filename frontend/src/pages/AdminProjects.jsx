import { useEffect, useState } from "react";
import axios from "../api/axios";
import "./AdminProjects.css";

export default function AdminProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [savingId, setSavingId] = useState(null);

  const [form, setForm] = useState({
    title: "",
    description: "",
    service: "Web Development",
    status: "Pending",
    progress: 0,
  });

  /* =============================
     FETCH PROJECTS
  ============================== */
  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await axios.get("/projects");
      setProjects(res.data);
    } catch (error) {
      alert("Failed to load projects");
    } finally {
      setLoading(false);
    }
  };

  /* =============================
     CREATE PROJECT
  ============================== */
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/projects", form);
      setForm({
        title: "",
        description: "",
        service: "Web Development",
        status: "Pending",
        progress: 0,
      });
      fetchProjects();
    } catch {
      alert("Error creating project");
    }
  };

  /* =============================
     UPDATE PROJECT (ADMIN)
  ============================== */
  const updateProject = async (id, data) => {
    setSavingId(id);
    try {
      await axios.patch(`/projects/${id}`, data);
      fetchProjects();
    } catch {
      alert("Failed to update project");
    } finally {
      setSavingId(null);
    }
  };

  /* =============================
     UI
  ============================== */
  return (
    <div className="admin-projects">
      <h2>📁 Admin Projects</h2>

      {/* CREATE PROJECT */}
      <form className="project-form" onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Project Title"
          value={form.title}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Project Description"
          value={form.description}
          onChange={handleChange}
          required
        />

        <select name="service" value={form.service} onChange={handleChange}>
          <option>Web Development</option>
          <option>Web Design</option>
          <option>SEO</option>
          <option>Digital Marketing</option>
          <option>Social Media Marketing</option>
          <option>Data Entry</option>
        </select>

        <select name="status" value={form.status} onChange={handleChange}>
          <option>Pending</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>

        <input
          type="number"
          name="progress"
          min="0"
          max="100"
          value={form.progress}
          onChange={handleChange}
        />

        <button type="submit">➕ Add Project</button>
      </form>

      {/* PROJECT LIST */}
      {loading ? (
        <p>Loading projects...</p>
      ) : projects.length === 0 ? (
        <p>No projects found.</p>
      ) : (
        <div className="project-list">
          {projects.map((p) => (
            <div className="project-card" key={p._id}>
              <h4>{p.title}</h4>
              <p>{p.description}</p>

              <label>Status</label>
              <select
                value={p.status}
                onChange={(e) =>
                  updateProject(p._id, {
                    status: e.target.value,
                    progress: p.progress,
                    assignedTo: p.assignedTo,
                  })
                }
              >
                <option>Pending</option>
                <option>In Progress</option>
                <option>Completed</option>
              </select>

              <label>Progress (%)</label>
              <input
                type="number"
                min="0"
                max="100"
                value={p.progress}
                onChange={(e) =>
                  updateProject(p._id, {
                    status: p.status,
                    progress: Number(e.target.value),
                    assignedTo: p.assignedTo,
                  })
                }
              />

              <label>Assigned To</label>
              <input
                value={p.assignedTo || ""}
                onChange={(e) =>
                  updateProject(p._id, {
                    status: p.status,
                    progress: p.progress,
                    assignedTo: e.target.value,
                  })
                }
              />

              {savingId === p._id && (
                <small className="saving">Saving...</small>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
