import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import Hero from "./components/Hero";
import Celebrations from "./components/Celebrations";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavbarComponent />
      <Hero />
      <Celebrations />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
