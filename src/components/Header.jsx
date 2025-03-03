import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import TranslateDropdown from "./TranslateDropdown.jsx";
import { ServicesJMKLogo } from "./ServicesJMKLogo.jsx";
import { useTranslation } from "react-i18next";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem
  } from "@heroui/react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const menuItems = [
    { name: t("header.home"), path: "/" },
    { name: t("header.products"), path: "/products"},
    { name: t("header.services"), path: "/services"},
    { name: t("header.about"), path: "/about" },
    { name: t("header.contact"), path: "/contact" }

  ];

  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
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
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <NavLink
              className={({ isActive }) => `nav-link ${isActive ? "active text-blue-500" : ""}`}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </NavLink>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu isOpen={isMenuOpen}>
        <NavbarMenuItem>
          <div className="w-full flex justify-center mb-2">
            <TranslateDropdown />
          </div>
        </NavbarMenuItem>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <NavLink
              className={({ isActive }) => `w-full nav-link ${isActive ? "active text-blue-500" : ""}`}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </NavLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default Header;
