import React from "react";
import "./App.css";

import NavbarComponent from "./components/NavbarComponent";
import Hero from "./components/Hero";
import Celebrations from "./components/Celebrations";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import ServiceModal from "./components/ServiceModal";
import GalleryModal from "./components/GalleryModal";

export default function App() {
  return (
    <>
      <NavbarComponent />

      <Hero />
      <Celebrations />
      <Services />
      <Contact />
      <Footer />

      {/* Mount modals once anywhere inside Providers (Providers are in index.jsx) */}
      <ServiceModal />
      <GalleryModal />
    </>
  );
}
