import React from "react";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import { motion } from "framer-motion";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpeg";

const slides = [
  {
    title: "Bringing Elegance & Tradition",
    text: "Mehndi design, event pre-planning, custom decorations, and more.",
    img: hero1,
  },
  {
    title: "Celebrations Made Beautiful",
    text: "Our team ensures tradition meets elegance with modern creativity.",
    img: hero2,
  },
  {
    title: "One Roof for Every Event",
    text: "From mehndi design to décor, we handle everything flawlessly.",
    img: hero3,
  },
];

export default function Hero() {
  return (
    <section className="hero-section">
      <Carousel fade interval={4000}>
        {slides.map((slide, i) => (
          <Carousel.Item key={i}>
            <Container className="h-100 d-flex align-items-center">
              <Row className="align-items-center w-100">
                <Col md={6}>
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <h1 className="fw-bold display-5 mb-3 text-white">
                      {slide.title}
                    </h1>
                    <p className="lead text-light mb-4">{slide.text}</p>
                    <Button
                      variant="light"
                      className="fw-bold px-4 py-2 rounded-pill"
                    >
                      Learn More
                    </Button>
                  </motion.div>
                </Col>
                <Col md={6} className="text-center mt-4 mt-md-0">
                  <motion.img
                    src={slide.img}
                    alt="Hero"
                    className="img-fluid rounded hero-img"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                  />
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}
