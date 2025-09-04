// src/components/Services.jsx
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { slides } from "../data/services";
import { useServiceModal } from "../contexts/ServiceModalContext";
import "../App.css"; // ensure this CSS (below) is loaded once

export default function Services() {
  const { openWithSlide } = useServiceModal();

  return (
    <section id="services" className="services-section">
      <Container>
        <Row className="mb-4">
          <Col lg={8}>
            <h2 className="fw-bold services-title">Our Services</h2>
            <p className="services-text">
              From saree draping and bridal styling to RO water service, we bring
              everything under one roof—reliable, elegant, and on time.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {slides.map((s) => (
            <Col sm={6} lg={4} key={s.title}>
              <Card className="service-card theme-surface h-100 shadow-sm">
                {s.img && (
                  <Card.Img src={s.img} alt={s.title} className="service-img" />
                )}
                <Card.Body className="d-flex flex-column">
                  <h5 className="card-title-gold mb-2">{s.title}</h5>
                  <p className="card-text-contrast mb-3">{s.text}</p>
                  <div className="mt-auto">
                  <Button
    size="sm"
    className="btn-learn border-0 mt-3"
    onClick={() => openWithSlide(s)}
  >
    Learn More
  </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
