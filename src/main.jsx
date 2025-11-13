import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { WeatherDataProvider } from "./weatherContext.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WeatherDataProvider>
      <App />
    </WeatherDataProvider>
  </StrictMode>
);
