import React from "react";
import "../styles/Home.module.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function Footer() {
  return (
    <Navbar bg="light">
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="#home">
            <strong>EVENTS</strong>
          </Nav.Link>
          <Nav.Link href="#features">
            <strong>CONTACT</strong>
          </Nav.Link>
          <Nav.Link href="#pricing">
            <strong>FILTER</strong>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
