import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  const info = [
    { icon: <FaMapMarkerAlt />, title: "Address", text: "Chennai, Tambaram" },
    { icon: <FaPhone />, title: "Phone", text: "+91 9566620863" },
    { icon: <FaEnvelope />, title: "Email", text: "g.subasri0302@gmail.com" },
  ];

  return (
    <section id="contact" className="contact-section">
      <Container>
        <motion.h2
          className="text-center mb-5 contact-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Let&apos;s Connect ✨
        </motion.h2>

        <Row className="mb-5 g-4 text-center">
          {info.map((item, i) => (
            <Col md={4} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
              >
                <Card className="contact-card shadow-sm h-100">
                  <Card.Body>
                    <div className="contact-icon">{item.icon}</div>
                    <h5 className="fw-bold">{item.title}</h5>
                    <p>{item.text}</p>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62220.42259616237!2d80.07175568746517!3d12.922087131068995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f14844aad0f%3A0xe16d3a66c4ce38d4!2sTambaram%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1756828496185!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="contact-map"
          ></iframe>
        </motion.div>
      </Container>
    </section>
  );
}
