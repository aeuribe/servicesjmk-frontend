import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "./Product.css";
import Items from "./components/Items";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/breadcrumbs";
import { useTranslation } from "react-i18next";


export default function Products() {
  const { t } = useTranslation();
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filters, setFilters] = useState({
    inStock: false,
    newArrivals: false,
    allProducts: false,
  });

  const categories = [
    t("products.categories.filling-machines"),
    t("products.categories.capping-machines"),
    t("products.categories.packing-machines"),
    t("products.categories.sealing-machines"),
    t("products.categories.labeling-machines"),
  ];
  
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get("category");
    if (category !== selectedCategory) {
      setSelectedCategory(category);
    }
  }, [location.search, selectedCategory]);

  const handleFilterChange = (event) => {
    const { name } = event.target;
    setFilters({
      inStock: name === "inStock",
      newArrivals: name === "newArrivals",
      allProducts: name === "allProducts",
    });
  };

  return (
    <div id="products" className="product-container">
      {/* Sidebar */}
      <div className="product-sidebar">
        <h2 className="sidebar-title">{t("products.title")}</h2>
        <ul className="category-list">
          {categories.map((category) => (
            <li key={category}>
              <Link
                to={`/products?category=${encodeURIComponent(category)}`}
                className={`category-link ${
                  selectedCategory === category ? "active-category" : ""
                }`}
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>

        {/* {selectedCategory ? (
          <p className="category-description">
            {categoryDescriptions[selectedCategory] ||
              "No description available."}
          </p>
        ) : (
          <p>Select a category to see details.</p>
        )} */}

        {/* Filtros */}
        <div className="filters">
          <h3 className="sidebar-title">{t("products.filters.title")}</h3>
          <label className="filter-option">
            <input
              type="checkbox"
              name="allProducts"
              checked={filters.allProducts}
              onChange={handleFilterChange}
            />
            <span>{t("products.filters.allProducts")}</span>
          </label>
          <label className="filter-option">
            <input
              type="checkbox"
              name="inStock"
              checked={filters.inStock}
              onChange={handleFilterChange}
            />
            <span>{t("products.filters.inStock")}</span>
          </label>
          <label className="filter-option">
            <input
              type="checkbox"
              name="newArrivals"
              checked={filters.newArrivals}
              onChange={handleFilterChange}
            />
            <span>{t("products.filters.newArrivals")}</span>
          </label>
        </div>

        {/* Contacto Rápido */}
        <div className="contact-box">
          <h3 className="sidebar-title">{t("products.contact-card.title")}</h3>
          <p>{t("products.contact-card.description")}</p>
          <a href="/contact" className="contact-button">
          {t("products.contact-card.button")}
          </a>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="product-main-content">
        <div className="breadcrumbs">
          <Breadcrumbs isDisabled>
            <BreadcrumbItem>{t("products.breadcrumbs.products")}</BreadcrumbItem>
            <BreadcrumbItem>{selectedCategory || t("products.breadcrumbs.machines")}</BreadcrumbItem>
          </Breadcrumbs>
        </div>

        {/* <div className="product-description">
          {" "}
          {selectedCategory ? (
            <p className="category-description">
              {categoryDescriptions[selectedCategory] ||
                "No description available."}
            </p>
          ) : (
            <p>Select a category to see details.</p>
          )}
        </div> */}

        <div className="items-container">
          {selectedCategory ? (
            [...Array(12)].map((_, index) => <Items key={index} />)
          ) : (
            <p>{t("products.inCaseNotChoosingACategory")}</p>
          )}
        </div>
      </div>
    </div>
  );
}
