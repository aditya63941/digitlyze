import { useState } from "react";
import axios from "../api/axios";
import "../styles/contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      await axios.post("/contact", form);
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact">
      <div className="container contact-container">
        {/* LEFT */}
        <div className="contact-info">
          <h2>Let’s Work Together</h2>
          <p>
            Have a project idea, business requirement, or want to collaborate?
            Fill the form and I’ll get back to you shortly.
          </p>

          <ul>
            <li>
              <strong>Email:</strong> aaditya63941@gmail.com
            </li>
            <li>
              <strong>Location:</strong> Noida, Uttar Pradesh, India
            </li>
            <li>
              <strong>Availability:</strong> Open to Freelance & Full-time
            </li>
          </ul>
        </div>

        {/* RIGHT */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="form-success">✅ Message sent successfully!</p>
          )}

          {status === "error" && (
            <p className="form-error">❌ Something went wrong. Try again.</p>
          )}
        </form>
      </div>
    </section>
  );
}
