import { Navbar, NavbarContent, NavbarItem } from "@heroui/react";
import { NavLink, Outlet } from "react-router-dom";
import "../subheader.css";
import { useTranslation } from "react-i18next";
import { useState } from "react";

function Subheader() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const subMenuItems = [
    { name: t("subheader.maintenance"), path: "/services/maintenance" },
    { name: t("subheader.installation"), path: "/services/installation" },
    { name: t("subheader.consulting"), path: "/services/consulting" },
  ];

  const productCategories = [
    { name: "Filling Machines", path: "/products?category=Filling Machines" },
    { name: "Capping Machines", path: "/products?category=Capping Machines" },
    { name: "Packing Machines", path: "/products?category=Packing Machines" },
    { name: "Labeling Machines", path: "/products?category=Labeling Machines" },
    { name: "Sealing Machines", path: "/products?category=Sealing Machines" },
  ];

  return (
    <div>
      <Navbar position="static" className="white-navbar">
        <div className="home-link-container">
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            {subMenuItems.map((item, index) => (
              <NavbarItem key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `link-subheader ${
                      isActive ? "nav-link active text-blue-500" : "nav-link"
                    } ${
                      [
                        "/services/installation",
                        "/services/consulting",
                      ].includes(item.path)
                        ? "disabled-link"
                        : ""
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </NavbarItem>
            ))}
          </NavbarContent>
        </div>
      </Navbar>
      <Outlet />
    </div>
  );
}

export default Subheader;
