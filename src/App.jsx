import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import "./App.css";
import About from "./pages/about/AboutUs.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Home from "./pages/home/Home.jsx";
import Products from "./pages/Products/Product.jsx";
import LayeredBackground from "./components/LayeredBackground.jsx";
import { useTranslation } from "react-i18next";
import Header from "./components/Header.jsx";
import Maintenance from "./pages/maintenance/Maintenance.jsx";
import Services from "./pages/services/Services.jsx";
import Subheader from "./pages/services/components/Subheader.jsx";

function App() {
  const { t } = useTranslation();
  return (
    <div className="background">
      <LayeredBackground />
      <Header />
      {/* 🔹 Definir las rutas para cambiar de vista según la URL */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />

          <Route path="/services" element={<Subheader />}>
            <Route
              index
              element={<Navigate to="maintenance" replace />} // Redirección automática
            />
            <Route index element={<Maintenance />} />{" "}
            {/* Esta es la ruta índice */}
            <Route path="maintenance" element={<Maintenance />} />
            {/* <Route path="installation" />
            <Route path="consulting" />
            <Route path="tech-service" /> */}
          </Route>
        </Routes>
      </main>

      <footer>
        <p className="footer-text">
          &copy; 2025 <strong>Services JMK, LLC</strong>. {t("footer.rights")}
        </p>
      </footer>
    </div>
  );
}

export default App;
