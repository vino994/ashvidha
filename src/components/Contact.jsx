    import React from "react";
    import { Container, Row, Col } from "react-bootstrap";
    import { motion } from "framer-motion";

    export default function Contact() {
    return (
        <section id="contact" className="contact-section">
        <Container>
            <motion.h2
            className="text-center mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            >
            Let&apos;s Connect!
            </motion.h2>
            <Row>
            <Col md={4}><p><strong>Address:</strong>Chennai, tambaram</p></Col>
            <Col md={4}><p><strong>Phone:</strong> +91 9566620863</p></Col>
            <Col md={4}><p><strong>Email:</strong> g.subasri0302@gmail.com</p></Col>
            </Row>
            <div className="mt-4">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62220.42259616237!2d80.07175568746517!3d12.922087131068995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f14844aad0f%3A0xe16d3a66c4ce38d4!2sTambaram%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1756828496185!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }}
 allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </Container>
        </section>
    );
    }
