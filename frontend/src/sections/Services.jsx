import "../styles/services.css";

const services = [
  {
    title: "Web Development",
    desc: "High-performance websites & web apps using MERN stack."
  },
  {
    title: "Web Design",
    desc: "Modern, clean UI/UX designs focused on conversions."
  },
  {
    title: "SEO Optimization",
    desc: "Improve your website ranking and organic reach."
  },
  {
    title: "Digital Marketing",
    desc: "Grow your brand with data-driven marketing strategies."
  },
  {
    title: "Social Media Marketing",
    desc: "Build your brand presence across social platforms."
  },
  {
    title: "Data Entry",
    desc: "Accurate, secure, and fast data management solutions."
  }
];

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="section-header">
          <h2>Services I Provide</h2>
          <p>End-to-end digital solutions tailored for your business</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
