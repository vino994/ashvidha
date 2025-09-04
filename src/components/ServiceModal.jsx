import React from "react";
import { Modal, Row, Col, ListGroup, Badge, Button } from "react-bootstrap";
import { useServiceModal } from "../contexts/ServiceModalContext";
import { serviceDetails } from "../data/services";

export default function ServiceModal() {
  const { isOpen, setIsOpen, selected } = useServiceModal();
  const info = serviceDetails[selected?.title] || {};

  return (
    <Modal
      show={isOpen}
      onHide={() => setIsOpen(false)}
      centered
      size="lg"
      animation={false}
      contentClassName="service-modal"
    >
      <Modal.Header closeButton className="service-modal-header">
        <Modal.Title>{selected?.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Row className="mb-3">
          <Col md={5}>
            {selected?.img && (
              <img
                src={selected.img}
                alt={selected.title}
                style={{ width: "100%", height: 240, objectFit: "cover", borderRadius: 8 }}
              />
            )}
          </Col>
          <Col md={7}>
            <p className="mb-2">{selected?.text}</p>

            {info.duration && (
              <p className="mb-2">
                <Badge bg="" className="badge-neutral me-2">Typical Time</Badge> {info.duration}
              </p>
            )}
            {info.note && (
              <p className="mb-0">
                <Badge bg="" className="badge-warning me-2">Note</Badge> {info.note}
              </p>
            )}
          </Col>
        </Row>

        <Row>
          <Col md={4} className="mb-3">
            <h6 className="fw-semibold">What’s Included</h6>
            <ListGroup variant="flush">
              {(info.includes || []).map((it, i) => (
                <ListGroup.Item key={i}>{it}</ListGroup.Item>
              ))}
            </ListGroup>
          </Col>

          <Col md={4} className="mb-3">
            <h6 className="fw-semibold">Ideal For</h6>
            <ListGroup variant="flush">
              {(info.idealFor || []).map((it, i) => (
                <ListGroup.Item key={i}>{it}</ListGroup.Item>
              ))}
            </ListGroup>
          </Col>

          <Col md={4} className="mb-3">
            <h6 className="fw-semibold">Add-Ons</h6>
            <ListGroup variant="flush">
              {(info.addOns || []).map((it, i) => (
                <ListGroup.Item key={i}>{it}</ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Modal.Body>

      <Modal.Footer className="service-modal-footer">
        <Button as="a" href="tel:+918682889813" className="btn-call">
          Call to Book
        </Button>
        <Button variant="outline-secondary" onClick={() => setIsOpen(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
