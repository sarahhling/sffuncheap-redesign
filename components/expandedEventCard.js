import React from "react";
import styles from "../styles/Home.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function ExpandedEventCard({
  pic,
  title,
  tags,
  date,
  time,
  location,
  cost,
  borderColor,
}) {
  const card = {
    border: "4px solid " + `${borderColor}`,
    backgroundColor: "white",
    height: "185px",
    width: "345px",
  };

  const textStyle = {
    fontSize: "14px",
  };
  return (
    <div>
      <Row className="pb-2">
        <Col sm={5} md={5} lg={5} xl={5}>
          <Image src={pic} height="185" width="300" />
        </Col>
        <Col sm={7} md={7} lg={7} xl={7}>
          <div className={`px-3 pt-2`} style={card}>
            <div className={``}>
              <strong>{title}</strong>
            </div>
            <div className={``} style={textStyle}>
              <strong>DATE: </strong> {date}
            </div>
            <div className={``} style={textStyle}>
              <strong>TIME: </strong> {time}
            </div>
            <div className={``} style={textStyle}>
              <strong>LOCATION: </strong>
              {location}
            </div>
            <div className={``} style={textStyle}>
              <strong>COST: </strong> {cost}
            </div>
            <div className={`pt-1`}>{tags}</div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
