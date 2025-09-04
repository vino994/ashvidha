import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import { slides } from "../data/services";
import { useServiceModal } from "../contexts/ServiceModalContext";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const { openWithSlide } = useServiceModal();

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((p) => (p === slides.length - 1 ? 0 : p + 1));
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[index];

  return (
    <section id="home" className="hero-banner">
      <div
        className="hero-banner-bg"
        style={{
          backgroundImage: `url(${slide.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="hero-banner-overlay" />

      <Container className="hero-banner-content text-center">
        <h1 className="display-3 fw-bold mb-3">{slide.title}</h1>
        <p className="lead mb-4">{slide.text}</p>
        <div>
    <Button
  className="hero-learn-btn fw-bold px-5 py-3 rounded-pill me-3"
  onClick={() => openWithSlide(slide)}
>
  Learn More
</Button>
          <Button
            as="a"
            href="tel:+918682889813"
            variant="outline-light"
            className="fw-bold px-5 py-3 rounded-pill"
          >
            📞 Contact Us
          </Button>
        </div>
      </Container>
    </section>
  );
}
