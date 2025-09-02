import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function NavbarComponent() {
  return (
    <Navbar expand="lg" fixed="top" bg="light" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#">Ashvidha&apos;s</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar" className="justify-content-end">
          <Nav>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
