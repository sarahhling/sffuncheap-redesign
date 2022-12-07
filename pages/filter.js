import React from "react";
import { Col, Row, Dropdown } from "react-bootstrap";
import TagChunks from "../components/tagChunks.js";
import Tag from "../components/tag.js";
import styles2 from "../styles/eventDetails.module.css";
import styles from "../styles/Home.module.css";

import Image from "react-bootstrap/Image";
import ExpandedEventCard from "../components/expandedEventCard.js";
import FilterTab from "../components/filterTab.js";

export default function Filter() {
  const buttonStyle = {
    color: "black",
    fontSize: "14px",
    fontWeight: "bold",
    borderColor: "black",
    borderRadius: "3px",
    backgroundColor: "white",
    height: "30px",
    paddingBottom: "24px",
  };

  const tags1 = [
    <Tag tag="SAN FRANCISCO" color="#E07673" size="12px" key="1"></Tag>,
    <Tag tag="NEAR BUS" color="#582E67" size="12px" key="2"></Tag>,
    <Tag tag="FREE" color="#1E5276" size="12px" key="3"></Tag>,
    <Tag tag="PARKS & REC" color="#1E5276" size="12px" key="3"></Tag>,
  ];

  const tags2 = [
    <Tag tag="CHEAP" color="#CB491D" size="12x" key="1"></Tag>,
    <Tag tag="SHOPPING" color="#582E67" size="12px" key="2"></Tag>,
    <Tag tag="EAST BAY" color="#1E5276" size="12px" key="3"></Tag>,
  ];

  const tags3 = [
    <Tag tag="SAN FRANCISCO" color="#E07673" size="11px" key="1"></Tag>,
    <Tag tag="FREE" color="#1E5276" size="11px" key="3"></Tag>,
    <Tag tag="NEAR BUS" color="#582E67" size="10.5px" key="2"></Tag>,
    <Tag tag="PARKS & REC" color="#E1992B" size="11px" key="3"></Tag>,
  ];

  const tags4 = [
    <Tag tag="CHEAP" color="#CB491D" size="12px" key="1"></Tag>,
    <Tag tag="EAT & DRINKS" color="#582E67" size="12px" key="2"></Tag>,
    <Tag tag="SAN FRANCISCO" color="#1E5276" size="12px" key="3"></Tag>,
  ];

  const tags5 = [
    <Tag tag="SAN FRANCISCO" color="#E07673" size="11px" key="1"></Tag>,
    <Tag tag="FREE" color="#1E5276" size="11px" key="3"></Tag>,
    <Tag tag="NEAR BUS" color="#582E67" size="10.5px" key="2"></Tag>,
    <Tag tag="ART" color="#E07673" size="11px" key="3"></Tag>,
  ];

  const tags6 = [
    <Tag tag="CHEAP" color="#CB491D" size="12px" key="1"></Tag>,
    <Tag tag="EAT & DRINKS" color="#582E67" size="12px" key="2"></Tag>,
    <Tag tag="SAN FRANCISCO" color="#1E5276" size="12px" key="3"></Tag>,
  ];

  return (
    <div>
      <Row className="gridRow">
        <Col>
          <Image
            src="images/houses-painted-ladies.jpg"
            alt="SF port"
            className={`${styles2.eventPic}`}
          />
        </Col>
      </Row>
      <Row className="pt-3">
        <Col sm={9} md={9} lg={9} xl={9}>
          <p style={{ fontSize: "26px", fontWeight: "bold" }}>
            SEARCH RESULTS FOR: "Search Term"
          </p>
        </Col>
        <Col sm={3} md={3} lg={3} xl={3}>
          <Dropdown className="">
            <Dropdown.Toggle
              className={``}
              id="dropdown-basic"
              style={buttonStyle}
            >
              SORTED BY: PRICE
            </Dropdown.Toggle>

            <Dropdown.Menu className={``}>
              <Dropdown.Item href="#/action-1" className={``}>
                DATE
              </Dropdown.Item>
              <Dropdown.Item href="#/action-1" className={``}>
                A to Z
              </Dropdown.Item>
              <Dropdown.Item href="#/action-1" className={``}>
                Z to A
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <Row className="gridRow">
        <Col className="gridCol" sm={3} md={3} lg={3} xl={3}>
          <FilterTab />
        </Col>
        <Col className="gridCol" sm={9} md={9} lg={9} xl={9}>
          <ExpandedEventCard
            pic="/images/christmas-fair-outdoor-tree.jpg"
            title="Golden Gate Park's Holiday Tree Lighting + Outdoor Concert"
            tags={<TagChunks tags={tags1} width="100%" />}
            date="December 1st, 2022"
            time="3:00PM - 8:00PM"
            location="Golden Gate Park"
            cost="FREE"
            borderColor="#1E5276"
          />
          <ExpandedEventCard
            pic="/images/neon-club-arcade.jpg"
            title="SF Arcade Bar 'Emporium' Free Game Token Night"
            tags={<TagChunks tags={tags2} width="100%" />}
            date="December 5th, 2022"
            time="7:00PM"
            location="616 Divisadero St"
            cost="*Varies"
            borderColor="#1E5276"
          />
          <ExpandedEventCard
            pic="/images/crowd-sigil.jpg"
            title="“World AIDS Day” March to City Hall"
            tags={<TagChunks tags={tags3} width="100%" />}
            date="December 11th, 2022"
            time="6:00PM - 8:00PM"
            location="City Hall"
            cost="FREE"
            borderColor="#CB491D"
          />
          <ExpandedEventCard
            pic="/images/christmas-fair-outdoor-tree.jpg"
            title="Golden Gate Park's Holiday Tree Lighting + Outdoor Concert"
            tags={<TagChunks tags={tags4} width="100%" />}
            date="December 1st, 2022"
            time="3:00PM - 8:00PM"
            location="Golden Gate Park"
            cost="FREE"
            borderColor="#1E5276"
          />
          <ExpandedEventCard
            pic="/images/legion-of-honor.jpg"
            title="'Legion of Honor' Museum Free Day"
            tags={<TagChunks tags={tags5} width="100%" />}
            date="December 6th, 2022"
            time="8:00AM - 6:00PM"
            location="100 34th Ave"
            cost="FREE"
            borderColor="#E07673"
          />
          <ExpandedEventCard
            pic="/images/christmas-fair-outdoor-tree.jpg"
            title="Golden Gate Park's Holiday Tree Lighting + Outdoor Concert"
            tags={<TagChunks tags={tags6} width="100%" />}
            date="December 1st, 2022"
            time="3:00PM - 8:00PM"
            location="Golden Gate Park"
            cost="FREE"
            borderColor="#1E5276"
          />
        </Col>
      </Row>
      <Row>
        <div
          className={`pt-3`}
          style={{ fontSize: "26px", fontWeight: "bold", textAlign: "center" }}
        >
          1 of 5 &nbsp;&nbsp;&nbsp;
          <button
            className={`btn btn-primary py-0 px-3 ${styles.buttonStyle2}`}
            type="button"
          >
            NEXT
          </button>
        </div>
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
  );
}
