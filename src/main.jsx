import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {HeroUIProvider} from "@heroui/react"
import App from './components/App.jsx'
import "./utils/i18next.config.js"
import { I18nextProvider } from "react-i18next";
import i18n from "./utils/i18next.config.js" // Importa tu configuración de i18n


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <HeroUIProvider>
        <App />
      </HeroUIProvider>
    </I18nextProvider>
  </StrictMode>,
)
 