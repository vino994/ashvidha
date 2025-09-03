import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll"; // 🔥 for smooth scroll
import "./Navbar.css";

export default function NavbarComponent() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`shadow-lg py-3 ${scrolled ? "navbar-colored" : "navbar-transparent"}`}
    >
      <Container>
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          <Navbar.Brand href="#" className="fw-bold fs-4 text-white">
            ✨ Ashvidha&apos;s
          </Navbar.Brand>
        </motion.div>
        <Navbar.Toggle aria-controls="main-navbar" className="bg-light" />
        <Navbar.Collapse id="main-navbar" className="justify-content-end">
          <Nav className="gap-3">
            <ScrollLink to="home" smooth duration={600} className="nav-link-custom">Home</ScrollLink>
            <ScrollLink to="services" smooth duration={600} className="nav-link-custom">Services</ScrollLink>
            <ScrollLink to="about" smooth duration={600} className="nav-link-custom">About</ScrollLink>
            <ScrollLink to="gallery" smooth duration={600} className="nav-link-custom">Gallery</ScrollLink>
            <ScrollLink to="contact" smooth duration={600} className="nav-link-custom">Contact</ScrollLink>
            <Button
              href="#booking"
              className="book-btn fw-bold rounded-pill px-4 py-2"
            >
              Book Now
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
