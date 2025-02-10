import { useState } from "react";
import "./App.css";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@heroui/react";
import { ServicesJMKLogo } from "../assets/ServicesJMKLogo.jsx";
import About from "./about/AboutUs.jsx";
import Contact from "./contact/Contact.jsx";
import Home from "./home/Home.jsx"
import LayeredBackground from "../assets/LayeredBackground.jsx";
import { useTranslation } from "react-i18next";
import TranslateDropdown from "../assets/TranslateDropdown.jsx";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("home"); //Estado para gestionar la seccion actual
  const { t } = useTranslation();

  const handleNavClick = (section) => {
    setCurrentSection(section); //cambia la seccion actual al hacer click
    setIsMenuOpen(false); // Cierra el menú
    window.scrollTo(0, 0);
  };

  const menuItems = [t("header.home"), t("header.about"), t("header.contact")];

  return (
    <div className="background">
      <LayeredBackground />
      <Navbar
        /* shouldHideOnScroll */
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <ServicesJMKLogo />
            <p className="font-bold text-inherit">Services JMK, LLC</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <TranslateDropdown />
          <NavbarItem>
            <Link
              color={currentSection === "home" ? "main" : "foreground"}
              href="#home"
              onClick={() => handleNavClick("home")}
              onPress={() => setIsMenuOpen(false)}
              aria-current={currentSection === "home" ? "page" : undefined}
            >
              {t("header.home")}
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color={currentSection === "about" ? "main" : "foreground"}
              href="#about"
              onClick={() => handleNavClick("about")}
              aria-current={currentSection === "about" ? "page" : undefined}
            >
              {t("header.about")}
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color={currentSection === "contact" ? "main" : "foreground"}
              href="#contact"
              onClick={() => handleNavClick("contact")}
              aria-current={currentSection === "contact" ? "page" : undefined}
            >
              {t("header.contact")}
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu isOpen={isMenuOpen}>
          <NavbarMenuItem>
            <div className="w-full flex justify-center mb-2">
              <TranslateDropdown />
            </div>
          </NavbarMenuItem>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  currentSection === item.toLowerCase() ? "main" : "foreground"
                }
                className={`w-full ${
                  currentSection === item.toLowerCase() ? "selected-item" : ""
                }`} // Agrega una clase si es el primer ítem
                href="#"
                size="lg"
                onClick={() => handleNavClick(item.toLowerCase())}
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>

      {/* Renderizado condicional de las secciones */}
      <main>
        {currentSection === "home" && (
/*           <>
            <div className="main-content">
              <p className="text-home">{t("home.title")}</p>
              <h1>{t("home.subtitle")}</h1>
            </div>
          </> */
          <Home/>
        )}
        {currentSection === "about" && (
          <>
            <About />
          </>
        )}
        {currentSection === "contact" && (
          <>
            <Contact />
          </>
        )}
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
