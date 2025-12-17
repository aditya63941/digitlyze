import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "calc(100vh - 160px)" }}>
        {children}
      </main>
      <Footer />
    </>
  );
}
