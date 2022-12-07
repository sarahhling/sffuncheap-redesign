import React from "react";
import styles from "../styles/Home.module.css";
import "../styles/Navbar.module.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import { useState } from "react";
import { useRouter } from "next/router";

export default function CustomNavBar() {
  const [image, setImage] = useState("/images/newlogo2.png");
  const router = useRouter();
  return (
    <Navbar className="py-4">
      <Container>
        <Navbar.Brand href="/" className="pe-5 ps-2">
          <Image
            src={image}
            height="35"
            width={160}
            alt="logo"
            onMouseEnter={() => {
              setImage("/images/rainbowlogo.png");
            }}
            onMouseLeave={() => {
              setImage("/images/newlogo2.png");
            }}
          />
        </Navbar.Brand>
        <Nav className="me-auto ps-4">
          <Nav.Link href="/eventsPage">
            <strong>EVENTS</strong>
          </Nav.Link>
          <Nav.Link href="/contact" className="ps-4">
            <strong>CONTACT</strong>
          </Nav.Link>
          <Nav.Link href="/filter" className="ps-4 pe-2">
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
        <div class="input-group ps-2 pe-3">
          <input
            type="text"
            className={`form-control input-sm ${styles.searchBar}`}
          />
          <button
            className={`btn btn-primary pt-0 ${styles.buttonColor}`}
            type="button"
            onClick={() => router.push("/filter")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
            </svg>
          </button>
        </div>
        <Image
          src="images/avatar.png"
          alt="account profile pic"
          height="45"
          width="45"
          roundedCircle
          style={{ cursor: "pointer" }}
        />
      </Container>
    </Navbar>
  );
}
