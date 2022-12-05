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
        <Row className="justify-content-md-center gridRow pt-4 pe-4">
          <Col className={`px-5 ${styles.title}`} sm={7} md={7} lg={7} xl={7}>
            GOLDEN GATE PARK’S HOLIDAY TREE LIGHTING + OUTDOOR CONCERT
          </Col>
          <Col sm={5} md={5} lg={5} xl={5}>
            <div style={{ fontWeight: "bold", fontSize: "14px" }}>TAGS</div>
            <Tag tag="SAN FRANCISCO" color="#E07673"></Tag>
            <Tag tag="NEAR BUS" color="#582E67"></Tag>
            <Tag tag="FREE" color="#1E5276"></Tag>
            <Tag tag="PARKS & REC" color="#E1992B"></Tag>
            <Tag tag="KIDS & FAMILY" color="#E07673"></Tag>
          </Col>
        </Row>
        <Row className="justify-content-md-center gridRow pt-4 pe-5">
          <Col className={`ps-5 pe-0`} sm={7} md={7} lg={7} xl={7}>
            <Image
              src="images/christmas-normal-tree.jpg"
              alt="holiday tree"
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
            <div className={`ps-4 py-4`}>
              <div className={`${styles.quickDetailItem}`}>
                <strong>DATE: </strong> December 1st 2022
              </div>
              <div className={`${styles.quickDetailItem}`}>
                <strong>TIME: </strong> 3:00PM - 8:00PM
              </div>
              <div className={`${styles.quickDetailItem}`}>
                <strong>LOCATION: </strong>McLaren Lodge
              </div>
              <div className={`${styles.quickDetailItem}`}>
                <strong>COST: </strong> FREE
              </div>

              <button
                className={`btn btn-primary ${styles.buttonColor}`}
                type="button"
              >
                <strong>RSVP</strong>
              </button>
            </div>
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
