import React from "react";
import "./CategoriesList.css"; // Importa los estilos
import { Skeleton } from "@heroui/react";

export default function CategoriesList({ onCategorySelect }) {
  const categories = [
    { name: "Filling Machines", value: "Filling" },
    { name: "Capping Machines", value: "Capping" },
    { name: "Packing Machines", value: "Packing" },
    { name: "Sealing Machines", value: "Sealing" },
    { name: "Labeling Machines", value: "Labeling" },
  ];

  return (
    <ul className="categories-list">
      {categories.map((category) => (
        <li
          key={category.value}
          className="categories-list-item"
          onClick={() => onCategorySelect(category.value)}
        >
          <Skeleton className="rounded-lg" isLoaded>
            {category.name}
          </Skeleton>
        </li>
      ))}
    </ul>
  );
}
