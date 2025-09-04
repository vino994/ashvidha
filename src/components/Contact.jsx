import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  const ADDRESS_TEXT = "Chennai, Tambaram";
  const PHONE_TEXT = "+91 8682889813";
  const EMAIL_TEXT = "g.subasri0302@gmail.com";

  const items = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Address",
      text: ADDRESS_TEXT,
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS_TEXT)}`,
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      text: PHONE_TEXT,
      href: `tel:${PHONE_TEXT.replace(/\s+/g, "")}`,
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      text: EMAIL_TEXT,
      href: `mailto:${EMAIL_TEXT}`,
    },
  ];

  return (
    <section id="contact" className="contact-section themed-contact">
      <Container>
        <motion.h2
          className="text-center mb-5 contact-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
        >
          Let&apos;s Connect ✨
        </motion.h2>

        <Row className="mb-5 g-4 text-center">
          {items.map((item, i) => (
            <Col md={4} key={item.title}>
              <motion.a
                href={item.href}
                target={item.target}
                rel={item.rel}
                className="contact-card-link"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Card className="contact-card shadow-sm h-100">
                  <Card.Body>
                    <div className="contact-icon">{item.icon}</div>
                    <h5 className="fw-bold">{item.title}</h5>
                    <p className="mb-0">{item.text}</p>
                    <span className="card-cta">Click to open</span>
                  </Card.Body>
                </Card>
              </motion.a>
            </Col>
          ))}
        </Row>

        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <iframe
            title="Tambaram, Chennai Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62220.42259616237!2d80.07175568746517!3d12.922087131068995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f14844aad0f%3A0xe16d3a66c4ce38d4!2sTambaram%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1736035200000!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="contact-map"
          ></iframe>
        </motion.div>
      </Container>
    </section>
  );
}
