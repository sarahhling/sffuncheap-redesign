import styles from "../styles/eventDetails.module.css";
import styles2 from "../styles/Home.module.css";
import Link from "next/link";
import { Row, Modal, Col, Image } from "react-bootstrap";
import HeartToggle from "../components/heartToggle";
import React, { useState } from "react";
import Tag from "../components/tag.js";

export default function eventDetails() {
  const [active, setActive] = useState(false);

  const handleChangeActive = () => {
    setActive((previousStar) => {
      return !previousStar;
    });
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
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
          <Tag tag="SAN FRANCISCO" color="#E07673" size="16px"></Tag>
          <Tag tag="NEAR BUS" color="#582E67" size="16px"></Tag>
          <Tag tag="FREE" color="#1E5276" size="16px"></Tag>
          <Tag tag="PARKS & REC" color="#E1992B" size="16px"></Tag>
          <Tag tag="KIDS & FAMILY" color="#E07673" size="16px"></Tag>
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
          <div className={`ps-4 pt-5`}>
            <div className={`${styles.quickDetailItem}`}>
              <strong>DATE: </strong> December 1st 2022
            </div>
            <div className={`${styles.quickDetailItem}`}>
              <strong>TIME: </strong> 3:00PM - 8:00PM
            </div>
            <div className={`${styles.quickDetailItem}`}>
              <strong>LOCATION: </strong>McLaren Lodge
            </div>
            <div className={` pb-4 ${styles.quickDetailItem}`}>
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
            <Row className="pe-3">
              <Col sm={3} md={6} lg={6} xl={6}></Col>
              <Col sm={3} md={2} lg={2} xl={2} className="pt-1">
                <HeartToggle
                  active={active}
                  handleChangeActive={handleChangeActive}
                  size="35px"
                  heart="/images/heart.png"
                />
              </Col>
              <Col sm={3} md={2} lg={2} xl={2}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-share"
                  viewBox="0 0 16 16"
                  onClick={handleShow}
                  style={{ cursor: "pointer" }}
                >
                  <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                </svg>
              </Col>
              <Col sm={3} md={2} lg={2} xl={2}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-calendar4-event"
                  viewBox="0 0 16 16"
                  onClick={handleShow}
                  style={{ cursor: "pointer" }}
                >
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z" />
                  <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
                </svg>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-md-center gridRow pt-3 px-5">
        One of San Francisco’s most exciting holiday events this year is Jingle
        All the Way on JFK, happening from 3-8pm on Thursday, December 1st. This
        exciting afternoon is the ultimate kick-off for December and the holiday
        season, as Golden Gate Park will be decked out with endless festive
        activities.
        <br />
        <br />
        Families can enjoy a snow play area, kids’ activities, carnival games,
        live music and performances, and Santa visits. The annual lighting of
        Uncle John’s Tree will take place at McLaren Lodge, and guests can also
        explore the fan-favorite Entwined LED light installation in Peacock
        Meadow. All activities are free and there will be plenty of food and
        drink for sale from local food trucks.
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
              {/* <div> */}
              <Image
                src="images/christmas-pair.png"
                className={`${styles.eventPic}`}
                alt="christmas people"
                data-bs-toggle="modal"
                data-bs-target="imageExample"
              />
              {/* <div className='modal fade' id='imageExample' tabIndex="-1" aria-hidden="true">
                  <div classname='modal-dialog'>
                    <div classname='modal-content'>
                      <button type="button" className='btn-close' 
                      data-bs-dismiss="modal" aria-label="Close"></button>
                      <Image src="images/christmas-pair.png" className='d-block w-100' />
                    </div>
                  </div>
                </div>
              </div> */}
            </Col>
            <Col>
              <Image
                src="images/christmas-pandemic-street.png"
                className={`${styles.eventPic}`}
                alt="christmas masked street"
              />
            </Col>
          </Row>
          <Row>
            <Col className={`pt-3`}>
              <Image
                src="images/christmas-pandemic.png"
                className={`${styles.eventPic}`}
                alt="christmas masked"
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col className={`ps-5 pt-2`}>BUS STOPS NEARBY: 5, 22, 28</Col>
      </Row>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body className="p-5" style={{ border: "10px solid #CB491D" }}>
          <p
            className="text-center px-4"
            style={{ fontSize: "28px", fontWeight: "bold" }}
          >
            SHARE
          </p>
          <p className="text-center">https://sffuncheap-redesign.vercel.app/</p>

          <Row className="justify-content-md-center gridRow">
            <Col className="gridCol pt-3">
              <div className="text-center">
                <Link href="https://facebook.com" className="pe-3">
                  <Image
                    src="/images/fbdark.png"
                    width="45"
                    height="45"
                    alt="facebook"
                  />
                </Link>
                <Link href="https://reddit.com/r/aww" className="pe-3">
                  <Image
                    src="/images/snoo.png"
                    width="45"
                    height="45"
                    alt="reddit"
                  />
                </Link>
                <Link href="https://gmail.com" className="pe-3">
                  <Image
                    src="/images/mail.png"
                    width="45"
                    height="45"
                    alt="mail"
                  />
                </Link>
                <Link href="https://discord.com" className="pe-3">
                  <Image
                    src="/images/discorddark.png"
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
                    src="/images/twitterdark.png"
                    width="45"
                    height="45"
                    alt="twitter"
                  />
                </Link>
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
}
