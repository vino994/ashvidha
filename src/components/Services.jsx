import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import hero1 from "../assets/sareehero.png";
import hero2 from "../assets/Bangle.jpg";
import hero3 from "../assets/blousehero.jpg";
import hero4 from "../assets/Bridal.jpg";
import hero5 from "../assets/hero1.webp";
import hero6 from "../assets/rowater.jpg";
import hero7 from "../assets/saree1.jpeg";
import hero8 from "../assets/bangle1.jpeg";
import hero9 from "../assets/blouse1.jpeg";
import hero10 from "../assets/saree3.jpeg";
import hero11 from "../assets/mehandi1.jpeg";
import hero12 from "../assets/rowater1.jpeg";
import "./Services.css";

const slides = [
  { title: "Saree Pre-Pleating & Draping", text: "Expert saree pre-pleating and draping service to give you a graceful, flawless look for any occasion.", img: hero1, category: "Saree" },
  { title: "Designer Saree Draping", text: "Trendy and stylish saree draping styles for weddings and parties.", img: hero7, category: "Saree" },

  { title: "Thread Bangle Making", text: "Handcrafted thread bangles customized to match your attire and event theme.", img: hero2, category: "Bangle's" },
  { title: "Beaded Jewelry Making", text: "Beautiful handcrafted bead jewelry to complement your outfit.", img: hero8, category: "Bangle's" },

  { title: "Blouse Designing", text: "Beautiful, trendy, and traditional blouse designs tailored to your personality and style.", img: hero3, category: "Blouse" },
  { title: "Embroidery Blouse Design", text: "Elegant embroidery work with detailed craftsmanship.", img: hero9, category: "Blouse" },

  { title: "Bridal Makeup & Styling", text: "Professional bridal makeup and styling that enhances your natural beauty.", img: hero4, category: "Makeup" },
  { title: "Party Makeup", text: "Chic and elegant makeup looks perfect for parties and receptions.", img: hero10, category: "Makeup" },

  { title: "Mehndi Art", text: "Intricate and elegant mehndi designs to make your celebrations even more special.", img: hero5, category: "Mehndi" },
  { title: "Bridal Mehndi", text: "Detailed bridal mehndi that symbolizes love and joy.", img: hero11, category: "Mehndi" },

  { title: "RO Water Fixing & Service", text: "Reliable RO water purifier installation and maintenance to ensure clean and safe drinking water at all times.", img: hero6, category: "Ro Service" },
  { title: "RO Filter Replacement", text: "Quick and affordable RO filter change service for pure drinking water.", img: hero12, category: "Ro Service" },
];

const categories = ["All", "Saree", "Bangle's", "Blouse", "Makeup", "Mehndi", "Ro Service"];

export default function Services() {
  const [filter, setFilter] = useState("All");
  const filteredSlides = filter === "All" ? slides : slides.filter((s) => s.category === filter);

  return (
    <section id="services" className="services-section">
      <Container>
        {/* Heading */}
        <Row className="mb-5 text-center">
          <Col>
            <motion.h2
              className="fw-bold services-title"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Services Gallery ✨
            </motion.h2>
            <motion.p
              className="lead services-text"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Discover our wide range of services — filter by category to find exactly what you’re looking for.
            </motion.p>
          </Col>
        </Row>

        {/* Filter Buttons */}
        <Row className="justify-content-center mb-4">
          {categories.map((cat, i) => (
            <Col xs="auto" key={i}>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Button
                  variant={filter === cat ? "warning" : "outline-light"}
                  className="rounded-pill px-4 filter-btn"
                  onClick={() => setFilter(cat)}
                >
                  {cat}
                </Button>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Service Cards */}
        <Row className="g-4">
          {filteredSlides.map((s, i) => (
            <Col md={4} sm={6} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
              >
                <Card className="service-card text-center shadow-sm">
                  <Card.Img variant="top" src={s.img} alt={s.title} className="service-img" />
                  <Card.Body>
                    <h5 className="fw-semibold">{s.title}</h5>
                    <p className="text-small">{s.text}</p>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
