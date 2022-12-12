import React from "react";
import "../styles/Home.module.css";
import { Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "react-bootstrap/Image";

export default function CustomFooter() {
  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  };
  return (
    <div>
      <Row className="justify-content-md-center gridRow pt-5">
        <Col className="gridCol footer pt-3">
          <div className="text-center">
            <Link href="https://facebook.com" className="pe-3">
              <Image
                src="/images/facebook.png"
                width="45"
                height="45"
                alt="facebook"
              />
            </Link>
            <Link href="https://reddit.com/r/aww" className="pe-3">
              <Image
                src="/images/reddit.png"
                width="45"
                height="45"
                alt="reddit"
              />
            </Link>
            <Link href="https://instagram.com" className="pe-3">
              <Image
                src="/images/instagram.png"
                width="45"
                height="45"
                alt="insta"
              />
            </Link>
            <Link href="https://discord.com" className="pe-3">
              <Image
                src="/images/discord.png"
                width="45"
                height="45"
                alt="discord"
              />
            </Link>
            <Link
              href="https://reddit.com/r/horror"
              className=""
              style={linkStyle}
            >
              <Image
                src="/images/twitter.png"
                width="45"
                height="45"
                alt="twitter"
              />
            </Link>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="gridCol footer py-3">
          <div className="text-center">
            <Link href="/" className="pe-5" style={linkStyle}>
              Home
            </Link>
            <Link href="/" className="pe-5" style={linkStyle}>
              Events
            </Link>
            <Link href="/contact" className="pe-5" style={linkStyle}>
              Contact
            </Link>
            <Link href="/filter" className="pe-5" style={linkStyle}>
              Search
            </Link>
            <Link href="/" style={linkStyle}>
              FAQ
            </Link>
          </div>
          <div className="text-center pt-3" style={{ fontSize: "12px", color: "#e4e4e4" }}>
            <p>Redesign of <Link href="https://sf.funcheap.com/" style={linkStyle}>sf.funcheap.com</Link> by Sarah Ling, Ryan Warrick, Dominique Cadenas Calvo, Meseret Mehzun</p>
          </div>
        </Col>
      </Row>
    </div>
  );
}
