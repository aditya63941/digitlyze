import "../styles/hero.css";
import me from "../assets/me.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        {/* LEFT CONTENT */}
        <div className="hero-content">
          <span className="hero-badge">🚀 Full Stack MERN Developer</span>

          <h1>
            Building <span>modern digital</span> solutions <br />
            for your business
          </h1>

          <p>
            I design and develop high-performance websites, dashboards, and
            digital solutions using modern technologies like React, Node.js,
            MongoDB, and cloud platforms.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Hire Me
            </a>
            <a href="#projects" className="btn btn-outline">
              View Projects
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-image">
          <div className="image-wrapper">
            <img src={me} alt="Aditya Yadav" />
          </div>
        </div>
      </div>
    </section>
  );
}
