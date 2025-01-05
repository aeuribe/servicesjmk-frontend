import {useState} from "react"
import "./App.css"
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import {AcmeLogo} from "./AcmeLogo.jsx";
import About from "./AboutUs.jsx"
import Contact from "./Contact.jsx"
import LayeredBackground from "./LayeredBackground.jsx"

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("home"); //Estado para gestionar la seccion actual

  const handleNavClick = (section) => {
    setCurrentSection(section); //cambia la seccion actual al hacer click
    setIsMenuOpen(false); // Cierra el menú
    window.scrollTo(0, 0);
  };

  const menuItems = [
    "Home",
    "About",
    "Contact",
  ];


  return (
  <div className="background"> 
    <LayeredBackground />
    <Navbar shouldHideOnScroll isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">Services JMK, LLC</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link 
            color={currentSection === "home" ? "main" : "foreground"}
            href="#home" 
            onClick={() => handleNavClick("home")} 
            onPress={()=> setIsMenuOpen(false)}
            aria-current={currentSection === "home" ? "page" : undefined}
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link 
            color={currentSection === "about" ? "main" : "foreground"} 
            href="#about"
            onClick={() => handleNavClick("about")}
            aria-current={currentSection === "about" ? "page" : undefined}
          >
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link 
            color={currentSection === "contact" ? "main" : "foreground"} 
            href="#contact"
            onClick={()=> handleNavClick("contact")}
            aria-current={currentSection === "contact" ? "page" : undefined}
          >
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      
      <NavbarMenu isOpen={isMenuOpen}>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={currentSection === item.toLowerCase() ? "main" : "foreground"}
              className={`w-full ${currentSection === item.toLowerCase() ? "selected-item" : ""}`} // Agrega una clase si es el primer ítem
              href="#"
              size="lg"
              onClick={()=> handleNavClick(item.toLowerCase())}
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
          <>
          <div className="main-content">
            <p className="text-home">We're preparing for the next step</p>
            <h1>COMING SOON</h1>
          </div>
          </>
        )}
        {currentSection === "about" && (
          <>
            <About/>
          </>
        )}
        {currentSection === "contact" && (
          <>
            <Contact/>
          </>
        )}
      </main>
    <footer>
      <p className="footer-text">&copy; 2025 <strong>Services JMK LLC</strong>. All rights reserved.</p>
    </footer>
  </div>
  );
}

export default App
