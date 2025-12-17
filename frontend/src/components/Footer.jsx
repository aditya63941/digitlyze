import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-container">
        {/* LEFT */}
        <div className="footer-brand">
          <h3>
            Digit<span>lyze</span>
          </h3>
          <p>
            Building modern web solutions with MERN stack, AI/ML, and digital
            marketing expertise.
          </p>
        </div>

        {/* CENTER */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Email: aaditya63941@gmail.com</p>
          <p>Location: Noida, India</p>
          <p>Available for Freelance & Full-time</p>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Digitlyze · Built by Aditya Yadav
        </p>
      </div>
    </footer>
  );
}
