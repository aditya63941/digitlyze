import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  const closeMenu = () => setOpen(false);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    closeMenu();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* LOGO */}
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          Digit<span>lyze</span>
        </Link>

        {/* NAV LINKS */}
        <div className={`nav-links ${open ? "active" : ""}`}>
          {/* PUBLIC */}
          {!token && (
            <>
              <a href="#services" onClick={closeMenu}>Services</a>
              <a href="#projects" onClick={closeMenu}>Projects</a>
              <a href="#contact" onClick={closeMenu}>Contact</a>

              <Link to="/login" onClick={closeMenu}>Login</Link>
              {/* <Link to="/register" onClick={closeMenu}>Register</Link> */}
            </>
          )}

          {/* AUTHENTICATED */}
          {token && (
            <>
              {user?.role === "client" && (
                <Link to="/dashboard" onClick={closeMenu}>Dashboard</Link>
              )}

              {user?.role === "admin" && (
                <>
                  <Link to="/admin" onClick={closeMenu}>Admin</Link>
                  <Link to="/admin/projects" onClick={closeMenu}>Projects</Link>
                  <Link to="/admin/contacts" onClick={closeMenu}>Contacts</Link>
                </>
              )}

              {/* LOGOUT ALWAYS */}
              <button className="nav-btn" onClick={logout}>
                Logout
              </button>
            </>
          )}
        </div>

        {/* HAMBURGER */}
        <div className="hamburger" onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
