import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import ladyImg from "../assets/service.jpg";

const services = ["Event Planning", "Stage Decoration", "Photography", "Catering"];

export default function Services() {
  return (
    <section id="services" className="services-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-4">Services Made for You</h2>
              <ul className="list-unstyled">
                {services.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </motion.div>
          </Col>
          <Col md={6} className="text-center">
            <motion.img
              src={ladyImg}
              alt="Services Lady"
              className="img-fluid"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
