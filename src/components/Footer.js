import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid style={{
      // make sure the footer is at the bottom of the page
      width: "100%",
      padding: "0",
    }}>
      <div style={{
        textAlign: "center",
        fontSize: "1.0 rem",
        padding: "5vh 0",
        minHeight: "10vh",
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.05)",
      }}>
        © {year} Adaptive Computing Experiences Lab
      </div>
    </Container>
  );
}

export default Footer;
