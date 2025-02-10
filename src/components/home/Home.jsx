import { useState } from "react";
import {
  Link,
} from "@heroui/react";
import { useTranslation } from "react-i18next";
import "./Home.css"



export default function Home(){
    const { t } = useTranslation();

  return (
        <div >
         <div className="subheader bg-gray-100 shadow-md py-3 px-5 flex justify-center gap-6">
          <Link href="#products" className="text-gray-800 hover:text-blue-600">
            {t("Products")}
          </Link>
          <Link href="#maintenance" className="text-gray-800 hover:text-blue-600">
            {t("Maintenance")}
          </Link>
          <Link href="#installation" className="text-gray-800 hover:text-blue-600">
            {t("Installation")}
          </Link>
          <Link href="#consulting" className="text-gray-800 hover:text-blue-600">
            {t("Consulting")}
          </Link>
          <Link href="#tech-service" className="text-gray-800 hover:text-blue-600">
            {t("Tech_Service")}
          </Link>
        </div>
        <div className="spacer"></div>
        </div>

  );   
    
}