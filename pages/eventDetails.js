import styles from "../styles/eventDetails.module.css";
import { useState } from "react"; /*for newsletter modal */
import CustomNavBar from "../components/customNavBar.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Tag from "../components/tag.js";

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
          <Col>
            <Image
              src="images/christmas-tree-closeup2.jpg"
              alt="golden gate bridge"
              className={`${styles.eventPic}`}
            />
          </Col>
        </Row>
        <Row className="justify-content-md-center gridRow pt-4">
          <Col className={`px-5 ${styles.title}`} sm={7} md={7} lg={7} xl={7}>
            GOLDEN GATE PARK’S HOLIDAY TREE LIGHTING + OUTDOOR CONCERT
          </Col>
          <Col sm={5} md={5} lg={5} xl={5}>
            Tags
            <Tag tag="FREE" color="green"></Tag>
          </Col>
        </Row>
        <Row className="justify-content-md-center gridRow pt-4">
          <Col className={`ps-5 pe-0`} sm={7} md={7} lg={7} xl={7}>
            <Image
              src="images/christmas-normal-tree.jpg"
              alt="golden gate bridge"
              className={`${styles.eventPic}`}
            />
          </Col>
          <Col
            className={`pe-5 ${styles.quickDetails}`}
            sm={5}
            md={5}
            lg={5}
            xl={5}
          >
            Short details
          </Col>
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
