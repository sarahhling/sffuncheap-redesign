import React from "react";
import styles from "../styles/Home.module.css";
import "../styles/Navbar.module.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function CustomNavBar() {
  return (
    <Navbar className="py-4">
      <Container>
        <Navbar.Brand href="/" className="pe-5">
          <strong>FUN CHEAP SF</strong>
        </Navbar.Brand>
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
        {/* <div class="input-group">
          <div class="form-outline">
            <input type="search" class="form-control" />
          </div>
          <button type="button" class="btn btn-primary">
            <i class="fas fa-search"></i>
          </button>
        </div> */}
        <div class="input-group ps-2">
          <input
            type="text"
            className={`form-control input-sm ${styles.searchBar}`}
          />
          <button
            className={`btn btn-primary pt-0 ${styles.buttonColor}`}
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
            </svg>
          </button>
        </div>
      </Container>
    </Navbar>
  );
}
