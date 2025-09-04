// src/components/Celebrations.jsx
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { slides } from "../data/services";
import { useServiceModal } from "../contexts/ServiceModalContext";
import {
  FaAlignJustify,
  FaRing,
  FaCut,
  FaFemale,
  FaPaintBrush,
  FaTint,
} from "react-icons/fa";
import "../App.css"; // ensure styles are loaded

const iconMap = {
  "Saree Pre-Pleating & Draping": <FaAlignJustify />,
  "Thread Bangle Making": <FaRing />,
  "Blouse Designing": <FaCut />,
  "Bridal Makeup & Styling": <FaFemale />,
  "Mehndi Art": <FaPaintBrush />,
  "RO Water Fixing & Service": <FaTint />,
};

export default function Celebrations() {
  const { openWithSlide } = useServiceModal();

  return (
    <section id="about" className="celebrations-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h2 className="fw-bold mb-3 celebrations-title">
              Celebrations & Solutions, <br /> Under One Roof ✨
            </h2>
            <h5 className="lead celebrations-text">
              From mehndi design to wedding décor, event planning, and even{" "}
              <span className="highlight">RO water services</span>, we provide
              complete solutions to make your life easier.
            </h5>
          </Col>

          <Col md={6}>
            <Row className="g-4">
              {slides.map((s) => (
                <Col xs={6} key={s.title} className="d-flex">
                  <Card className="celebration-card theme-surface shadow-sm text-center flex-fill">
                  <Card.Body className="d-flex flex-column">
  <div className="icon-wrapper mb-3">
    {iconMap[s.title] ?? <FaAlignJustify />}
  </div>
  <h6 className="fw-semibold card-title-gold">{s.title}</h6>
  <p className="text-small card-text-contrast flex-grow-1">{s.text}</p>
  <Button
    size="sm"
    className="btn-learn border-0 mt-3"
    onClick={() => openWithSlide(s)}
  >
    Learn More
  </Button>
</Card.Body>

                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
