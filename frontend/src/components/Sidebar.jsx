import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Digitlyze</h2>

      <nav>
        <Link to="/admin">Dashboard</Link>
        <Link to="/admin/projects">Projects</Link>
        <Link to="/admin/contacts">Contacts</Link>
      </nav>
    </aside>
  );
}
