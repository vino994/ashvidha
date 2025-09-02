import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";

const features = [
  { title: "Mehndi Design", text: "Artistic mehndi patterns for every occasion." },
  { title: "Event Planning", text: "Tailored planning for weddings and events." },
  { title: "Stage Decoration", text: "Elegant and custom stage designs." },
  { title: "Makeup & Styling", text: "Professional makeup and style for brides." },
];

export default function Celebrations() {
  return (
    <section className="celebrations-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="fw-bold mb-3">
                Celebrations & Solutions, Under One Roof
              </h2>
              <p className="lead">
                From mehndi design to wedding décor and planning, we offer
                everything you need for a perfect celebration.
              </p>
            </motion.div>
          </Col>
          <Col md={6}>
            <Row className="g-3">
              {features.map((f, i) => (
                <Col xs={6} key={i}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2 }}
                  >
                    <Card className="celebration-card h-100 shadow-sm">
                      <Card.Body className="text-center">
                        <h6 className="fw-semibold">{f.title}</h6>
                        <p className="small text-muted">{f.text}</p>
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
