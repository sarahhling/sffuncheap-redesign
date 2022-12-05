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
            <div className={`ps-4 pt-4`}>
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
          <Col className={`ps-5 ${styles.title}`}>EVENT DETAILS</Col>
          <Col>
            <div className="text-end pe-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-heart"
                viewBox="0 0 16 16"
              >
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-share"
                viewBox="0 0 16 16"
              >
                <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-calendar4-event"
                viewBox="0 0 16 16"
              >
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z" />
                <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
              </svg>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-md-center gridRow pt-2 px-5">
          One of San Francisco’s most exciting holiday events this year is
          Jingle All the Way on JFK, happening from 3-8pm on Thursday, December
          1st. This exciting afternoon is the ultimate kick-off for December and
          the holiday season, as Golden Gate Park will be decked out with
          endless festive activities.
          <br />
          <br />
          Families can enjoy a snow play area, kids’ activities, carnival games,
          live music and performances, and Santa visits. The annual lighting of
          Uncle John’s Tree will take place at McLaren Lodge, and guests can
          also explore the fan-favorite Entwined LED light installation in
          Peacock Meadow. All activities are free and there will be plenty of
          food and drink for sale from local food trucks.
        </Row>
        <Row className="justify-content-md-center gridRow pt-3">
          <Col className={`ps-5 ${styles.title}`}>MAP</Col>
          <Col className={`ps-5 ${styles.title}`}>PHOTOS</Col>
        </Row>
        <Row className="justify-content-md-center gridRow pt-3">
          <Col className={`ps-5`}>
            <Image
              src="images/map-ggpark.png"
              alt="golden gate park map"
              className={`${styles.eventPic}`}
            />
          </Col>
          <Col className={`pe-5`}>
            <Row>
              <Col>
                <Image
                  src="images/christmas-pair.png"
                  className={`${styles.eventPic}`}
                />
              </Col>
              <Col>
                <Image
                  src="images/christmas-pandemic-street.png"
                  className={`${styles.eventPic}`}
                />
              </Col>
            </Row>
            <Row>
              <Col className={`pt-3`}>
                <Image
                  src="images/christmas-pandemic.png"
                  className={`${styles.eventPic}`}
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className={`ps-5 pt-2`}>BUS STOPS NEARBY: 5, 22, 28</Col>
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
