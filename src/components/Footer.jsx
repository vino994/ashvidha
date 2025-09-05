import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import {
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaYoutube 
} from "react-icons/fa";
import "./Footer.css";
import { useGalleryModal } from "../contexts/GalleryModalContext";
export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
const { openGallery } = useGalleryModal(); 
const sendEmail = (e) => {
  e.preventDefault();

  if (!email) {
    setStatus("Please enter your email.");
    return;
  }

  emailjs
    .send(
      "service_lilibt4",   // Service ID
      "template_n1cxwq8",  // Template ID
      { user_email: email }, // 👈 Must match your template variable
      "-ofppnO1dVjdcg5jI"  // Public Key
    )
    .then(
      (result) => {
        console.log(result.text);
        setStatus("✅ Thank you! You are subscribed.");
        setEmail("");
      },
      (error) => {
        console.error(error.text);
        setStatus("❌ Something went wrong. Please try again.");
      }
    );
};


  return (
    <footer id="footer" className="footer">
      <Container>
        <Row className="gy-4">
          {/* Brand */}
          <Col md={4}>
            <motion.h4
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="footer-brand"
            >
              Ashvitha&apos;s ✨
            </motion.h4>
            <p className="footer-text">
              Celebrations & solutions under one roof — where tradition meets
              elegance with modern creativity.
            </p>
          </Col>

          {/* Quick Links */}
        {/* Quick Links */}
{/* Desktop Layout */}
<Col md={2} className="d-none d-md-block">
  <h5 className="fw-bold">Quick Links</h5>
  <ul className="list-unstyled footer-links">
    <li><a href="#about"><i className="bi bi-info-circle-fill me-2"></i>About</a></li>
    <li><a href="#services"><i className="bi bi-briefcase-fill me-2"></i>Services</a></li>
    <li><a href="#!" onClick={(e) => { e.preventDefault(); openGallery(); }}><i className="bi bi-images me-2"></i>Gallery</a></li>
    <li><a href="#contact"><i className="bi bi-telephone-fill me-2"></i>Contact</a></li>
  </ul>
</Col>

<Col md={3} className="d-none d-md-block">
  <h5 className="fw-bold">Contact Us</h5>
  <ul className="list-unstyled footer-contact">
    <li><FaMapMarkerAlt /> Chennai, Tambaram</li>
    <li><FaPhone /> <a href="tel:+918682889813">+918682889813</a></li>
    <li><FaEnvelope /> <a href="mailto:info@ashvidhas.com">g.subasri0302@gmail.com</a></li>
  </ul>
</Col>

{/* Mobile Layout */}
<Col xs={12} className="d-md-none">
  <div className="footer-mobile-row">
    <div className="footer-links-mobile">
      <h5 className="fw-bold">Quick Links</h5>
      <ul className="list-unstyled footer-links">
        <li><a href="#about"><i className="bi bi-info-circle-fill me-2"></i>About</a></li>
        <li><a href="#services"><i className="bi bi-briefcase-fill me-2"></i>Services</a></li>
        <li><a href="#!" onClick={(e) => { e.preventDefault(); openGallery(); }}><i className="bi bi-images me-2"></i>Gallery</a></li>
        <li><a href="#contact"><i className="bi bi-telephone-fill me-2"></i>Contact</a></li>
      </ul>
    </div>
    <div className="footer-contact-mobile">
      <h5 className="fw-bold">Contact Us</h5>
      <ul className="list-unstyled footer-contact">
        <li><FaMapMarkerAlt /> Chennai, Tambaram</li>
        <li><FaPhone /> <a href="tel:+918682889813">+918682889813</a></li>
        <li><FaEnvelope /> <a href="mailto:info@ashvidhas.com">g.subasri0302@gmail.com</a></li>
      </ul>
    </div>
  </div>
</Col>



          {/* Contact */}
       

          {/* Subscribe Form */}
          <Col md={3}>
            <h5 className="fw-bold">Stay Updated</h5>
            <Form className="d-flex footer-form" onSubmit={sendEmail}>
              <Form.Control
                type="email"
                placeholder="Your Email"
                className="me-2 rounded-pill"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button type="submit" variant="light" className="rounded-pill">
                Subscribe
              </Button>
            </Form>
            {status && <p className="mt-2 small">{status}</p>}
          </Col>
        </Row>

        <hr className="footer-divider" />

        {/* Bottom Row */}
        <Row className="align-items-center">
          <Col md={6}>
            <p className="mb-0">
              © {new Date().getFullYear()} Ashvitha&apos;s. All rights reserved.
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <div className="social-icons">
              <motion.a whileHover={{ scale: 1.2 }} href="https://www.facebook.com/share/19tBWeUUtq/">
                <FaFacebookF />
              </motion.a>
             <motion.a whileHover={{ scale: 1.2 }} href="https://www.youtube.com/@chennai-45" target="_blank" rel="noopener noreferrer">
  <FaYoutube />
</motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.instagram.com/rowater20242024?utm_source=qr&igsh=YWp1dDJhbnI2cWVx"
              >
                <FaInstagram />
              </motion.a>
           
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
