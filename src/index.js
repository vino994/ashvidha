import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import { ServiceModalProvider } from "./contexts/ServiceModalContext";
import { GalleryModalProvider } from "./contexts/GalleryModalContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* ⬇️ Providers wrap the ENTIRE app, so Navbar can use the hook */}
    <ServiceModalProvider>
      <GalleryModalProvider>
        <App />
      </GalleryModalProvider>
    </ServiceModalProvider>
  </React.StrictMode>
);
