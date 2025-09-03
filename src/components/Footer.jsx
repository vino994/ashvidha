import React from "react";
import { Container } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
   <footer id="footer" className="footer">

      <Container>
        <p>© {new Date().getFullYear()} Ashvidha&apos;s. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://www.instagram.com/rowater20242024?utm_source=qr&igsh=YWp1dDJhbnI2cWVx" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
        </div>
      </Container>
    </footer>
  );
}
