import styles from "../styles/Home.module.css";
import { useState } from "react"; /*for newsletter modal */
import CustomNavBar from "../components/customNavBar.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function eventDetails() {
  return (
    <Container className={`w-75 px-5`}>
      <div className="containerForm">
        <Row className="gridRow">
          <Col className="gridCol">
            <CustomNavBar />
          </Col>
        </Row>
        <Row className="gridRow">
          <Col>banner image</Col>
        </Row>
        <Row className="justify-content-md-center gridRow pt-4">
          <Col>Title</Col>
          <Col>Tags</Col>
        </Row>
        <Row className="justify-content-md-center gridRow pt-4">
          <Col>Event</Col>
          <Col>Short details</Col>
        </Row>
        <Row className="justify-content-md-center gridRow pt-4">
          <Col>Icons</Col>
        </Row>
        <Row className="justify-content-md-center gridRow pt-4">
          <Col>Event Details</Col>
        </Row>
        <Row className="justify-content-md-center gridRow pt-5">
          <Col>Map</Col>
          <Col>Photos</Col>
        </Row>
        <Row className="justify-content-md-center gridRow pt-5">
          <Col className="gridCol footer pt-3">
            <p className="text-center footer">
              <strong className="footer">FOOTER</strong>
            </p>
          </Col>
          <Col className="gridCol footer pt-3">
            <p className="text-center footer">
              <strong className="footer">SOCIAL MEDIA LINKS</strong>
            </p>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
