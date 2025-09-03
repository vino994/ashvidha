import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaPaintBrush,
  FaCalendarAlt,
  FaGem,
  FaFemale,
  FaTint,
} from "react-icons/fa";

const features = [
  {
    icon: <FaPaintBrush />,
    title: "Mehndi Design",
    text: "Artistic mehndi patterns for every occasion.",
  },
  {
    icon: <FaCalendarAlt />,
    title: "Event Planning",
    text: "Tailored planning for weddings and events.",
  },
  {
    icon: <FaGem />,
    title: "Stage Decoration",
    text: "Elegant and custom stage designs.",
  },
  {
    icon: <FaFemale />,
    title: "Makeup & Styling",
    text: "Professional makeup and style for brides.",
  },
  {
    icon: <FaTint />,
    title: "RO Water Service",
    text: "Reliable RO water installation and maintenance for clean, safe drinking water.",
  },
];

export default function Celebrations() {
  return (
    <section id="about" className="celebrations-section">
      <Container>
        <Row className="align-items-center">
          {/* Left Content */}
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="fw-bold mb-3 celebrations-title">
                Celebrations & Solutions, <br /> Under One Roof ✨
              </h2>
              <h5 className="lead celebrations-text">
                From mehndi design to wedding décor, event planning, and even{" "}
                <span className="highlight">RO water services</span>, we provide
                complete solutions to make your life easier.
              </h5>
            </motion.div>
          </Col>

          {/* Right Cards */}
          <Col md={6}>
            <Row className="g-4">
              {features.map((f, i) => (
                <Col xs={6} key={i}>
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2, duration: 0.6 }}
                  >
                    <Card className="celebration-card shadow-sm text-center">
                      <Card.Body>
                        <motion.div
                          className="icon-wrapper mb-3"
                          whileHover={{ scale: 1.2, rotate: 15 }}
                          transition={{ type: "spring", stiffness: 200 }}
                        >
                          {f.icon}
                        </motion.div>
                        <h6 className="fw-semibold">{f.title}</h6>
                        <p className="text-small">{f.text}</p>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
