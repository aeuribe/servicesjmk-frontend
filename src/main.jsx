import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HeroUIProvider } from "@heroui/react";
import App from "./App.jsx";
import "./utils/i18next.config.js";
import { I18nextProvider } from "react-i18next";
import i18n from "./utils/i18next.config.js"; // Importa tu configuración de i18n
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "transparent", // Mantiene el fondo que ya tienes en tu CSS
      },
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <HeroUIProvider>
        <BrowserRouter>
          <ChakraProvider theme={theme}>
            <App />
          </ChakraProvider>
        </BrowserRouter>
      </HeroUIProvider>
    </I18nextProvider>
  </StrictMode>
);
