import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@heroui/react";
import { GrLanguage } from "react-icons/gr";
import { useTranslation } from "react-i18next";
import React, { useState, useEffect } from "react";

export default function TranslateDropdown() {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // Inicializar con el idioma actual

  // Cambiar el idioma y actualizar el estado
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setSelectedLanguage(language);
  };

  useEffect(() => {
    setSelectedLanguage(i18n.language); // Sincronizar si cambia externamente
  }, [i18n.language]);

  const languageName = {
    en: t("header.Language.en"),
    es: t("header.Language.es"),
  }[selectedLanguage] || selectedLanguage;

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button className="capitalize" variant="light" radius="full">
          <GrLanguage />
          <span>{languageName}</span>
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        disallowEmptySelection
        aria-label="Language selection"
        selectedKeys={new Set([selectedLanguage])} // Mostrar el idioma seleccionado correctamente
        selectionMode="single"
        variant="flat"
      >
        <DropdownItem key="en" onPress={() => changeLanguage("en")}>
          {t("header.Language.en")}
        </DropdownItem>
        <DropdownItem key="es" onPress={() => changeLanguage("es")}>
          {t("header.Language.es")}
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
