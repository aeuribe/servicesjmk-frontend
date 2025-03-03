import React from "react";
import "./Maintenance.css";
import { Button, Link } from "@heroui/react";
import { Highlight } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export default function Maintenance() {
  const { t } = useTranslation();
  return (
    <section className="maintenance-container">
      {/* Contenedor de tarjetas */}
      <div className="cards-container">
        <p className="maintenance-main-text">
          {t("services.maintenance.header1")} {" "}
          <span className="preventive-text">{t("services.maintenance.header-preventive")}</span> {t("services.maintenance.header2")} <span className="corrective-text">{t("services.maintenance.header-corrective")}</span> {t("services.maintenance.header3")}
        </p>

        {/* Mantenimiento Preventivo */}
        <div className="card-preventive">
          <div className="card-preventive-title">
            <h2>
              {t("services.maintenance.preventive-section.title-1")}
              <span className="preventive-text"> {t("services.maintenance.preventive-section.title-2")}</span>
            </h2>
          </div>
          <div className="card-preventive-text">
            <p>
            {t("services.maintenance.preventive-section.description")}
            </p>
          </div>
        </div>

        {/* Mantenimiento Correctivo */}
        <div className="card-corrective">
          <div className="card-corrective-text">
            <p>
            {t("services.maintenance.corrective-section.description")}
            </p>
          </div>
          <div className="card-corrective-title">
            <h2>
              {t("services.maintenance.corrective-section.title-1")} <span className="corrective-text">{t("services.maintenance.corrective-section.title-2")}</span>
            </h2>
          </div>
        </div>
        <Link href="/contact">
          <Button
            color="primary"
            variant="ghost"
            size="lg"
            className="maintenance-button"
          >
            {t("services.maintenance.cta-button")}
          </Button>
        </Link>
      </div>
    </section>
  );
}
