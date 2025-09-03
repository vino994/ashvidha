import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";

import hero1 from "../assets/sareehero.png";
import hero2 from "../assets/Bangle.jpg";
import hero3 from "../assets/blousehero.jpg";
import hero4 from "../assets/Bridal.jpg";
import hero5 from "../assets/hero1.webp";
import hero6 from "../assets/rowater.jpg";
const slides = [
  {
    title: "Saree Pre-Pleating & Draping",
    text: "Expert saree pre-pleating and draping service to give you a graceful, flawless look for any occasion.",
    img: hero1,
  },
  {
    title: "Thread Bangle Making",
    text: "Handcrafted thread bangles customized to match your attire and event theme.",
    img: hero2,
  },
  {
    title: "Blouse Designing",
    text: "Beautiful, trendy, and traditional blouse designs tailored to your personality and style.",
    img: hero3,
  },
  {
    title: "Bridal Makeup & Styling",
    text: "Professional bridal makeup and styling that enhances your natural beauty.",
    img: hero4, // add new image in assets folder
  },
  {
    title: "Mehndi Art",
    text: "Intricate and elegant mehndi designs to make your celebrations even more special.",
    img: hero5, // add another image in assets
  },
  {
  title: "RO Water Fixing & Service",
  text: "Reliable RO water purifier installation and maintenance to ensure clean and safe drinking water at all times.",
  img: hero6, // 👉 add a new image in your assets folder, like ro-service.jpg
},

];


export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 8000); // ⏳ each slide visible for 8s
    return () => clearInterval(interval);
  }, []);

  const slide = slides[index];

  return (
    <section id="home" className="hero-banner">

      {/* Background image fade */}
      <AnimatePresence mode="wait">
    <motion.div
  key={slide.img}
  className="hero-banner-bg"
  style={{
    backgroundImage: `url(${slide.img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat", // ⬅️ force no repeat here
  }}
  initial={{ opacity: 0, scale: 1.1 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 1.05 }}
  transition={{ duration: 3, ease: "easeInOut" }}
/>
      </AnimatePresence>

      {/* Overlay */}
      <div className="hero-banner-overlay"></div>

      {/* Centered text */}
      <Container className="hero-banner-content text-center">
        <motion.h1
          key={slide.title}
          className="display-3 fw-bold mb-3"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          {slide.title}
        </motion.h1>
        <motion.p
          key={slide.text}
          className="lead mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1.5 }}
        >
          {slide.text}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.2 }}
        >
          <Button className="hero-btn fw-bold px-5 py-3 rounded-pill me-3">
            Learn More
          </Button>
          <Button
            variant="outline-light"
            className="fw-bold px-5 py-3 rounded-pill"
          >
            Contact Us
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
