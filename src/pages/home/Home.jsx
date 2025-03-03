import "./styles/Home.css";
import imageLogo from "./assets/servicesjmk.png";
import { Image } from "@heroui/react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Highlight } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  const slides = [
    {
      title: <>{t("home.title-part1")} <span className="highlight">Services JMK</span></>,
    },
    {
      text:<>{t("home.paragraph1")}</>,
    },
    {
      text: <>{t("home.paragraph2")}</>,
    },
  ];  

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div>

      <main className="home-main-container">
        <div className="home-image-area">
          <Image alt="Services JMK Logo" className="home-image" src={imageLogo} />
        </div>
        <div className="home-text-area">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="home-text-wrapper"
          >
            <h1>{slides[index].title}</h1>
            <p>{slides[index].text}</p>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
