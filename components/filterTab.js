import React from "react";
import styles from "../styles/Home.module.css";

import Tag from "./tag";
import RangeSlider from "react-bootstrap-range-slider";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";

export default function FilterTab({}) {
  const [value, setValue] = useState(25);
  const card = {
    border: "2px solid red",
    borderRadius: "3px",
    backgroundColor: "white",
  };

  const titleStyle = {
    fontSize: "16px",
    fontWeight: "bold",
    paddingTop: "35px",
    paddingBottom: "15px",
  };

  const textStyle = {
    fontSize: "14px",
  };
  return (
    <div className={`px-3 pb-4 pt-2`} style={card}>
      <div
        style={{ fontSize: "20px", fontWeight: "bold", textAlign: "center" }}
      >
        FILTER BY
      </div>
      <div className={``} style={titleStyle}>
        DATE RANGE:
      </div>
      <input type="date" className="form-control" />
      <div style={{ textAlign: "center" }}>to</div>
      <input type="date" class="form-control" />

      <div className={``} style={titleStyle}>
        NEIGHBORHOOD:
      </div>

      <Tag tag="SAN FRANCISCO" color="#E07673" size="14px" key="1"></Tag>
      <Tag tag="PENINSULA" color="#1E5276" size="14px" key="2"></Tag>
      <Tag tag="EAST BAY" color="#582E67" size="14px" key="3"></Tag>
      <Tag tag="NORTH BAY" color="#CB491D" size="14px" key="4"></Tag>
      <Tag tag="SOUTH BAY" color="#E1992B" size="14px" key="5"></Tag>
      <div className={``}>
        <div style={titleStyle}>COST:</div>
        <Row>
          <Col>Free</Col>
          <Col className="text-end">$50+</Col>
        </Row>
        <RangeSlider
          value={value}
          onChange={(e) => setValue(e.target.value)}
          variant="dark"
          tooltip="on"
          min={0}
          max={50}
          size="sm"
        />
      </div>
      <div className={`pt-5`} style={titleStyle}>
        TAGS:
      </div>
      <div className={`pt-1`}>
        <Tag tag="SHOPPING" color="#E07673" size="14px" key="1"></Tag>
        <Tag tag="COMEDY" color="#CB491D" size="14px" key="2"></Tag>
        <Tag tag="NEAR BUS" color="#582E67" size="14px" key="3"></Tag>
        <Tag tag="CHEAP" color="#1E5276" size="14px" key="4"></Tag>
        <Tag tag="FREE" color="#1E5276" size="14px" key="5"></Tag>
        <Tag tag="KIDS & FAMILY" color="#E07673" size="14px" key="1"></Tag>
        <Tag tag="FITNESS" color="#CB491D" size="14px" key="2"></Tag>
        <Tag tag="LIVE MUSIC" color="#582E67" size="14px" key="3"></Tag>
        <Tag tag="WORKSHOPS" color="#1E5276" size="14px" key="4"></Tag>
        <Tag tag="ART" color="#E1992B" size="14px" key="5"></Tag>
        <Tag tag="EAT & DRINK" color="#E07673" size="14px" key="1"></Tag>
        <Tag tag="CLUB" color="#1E5276" size="14px" key="2"></Tag>
        <Tag tag="PARKS & REC" color="#582E67" size="14px" key="3"></Tag>
        <Tag tag="MOVIES" color="#CB491D" size="14px" key="4"></Tag>
        <Tag tag="LITERATURE" color="#E1992B" size="14px" key="5"></Tag>
      </div>
    </div>
  );
}
