import React from "react";
import styles from "../styles/Home.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

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
  const router = useRouter();

  const card = {
    border: "4px solid " + `${borderColor}`,
    backgroundColor: "white",
    height: "185px",
    width: "345px",
  };

  const titleStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    lineHeight: "24px",
  };

  const textStyle = {
    fontSize: "14px",
  };
  return (
    <div>
      <Row
        className="pb-2"
        onClick={() => router.push("/eventDetails")}
        style={{ cursor: "pointer" }}
      >
        <Col sm={4} md={4} lg={5} xl={5}>
          <Image src={pic} height="185" width="300" alt="pic" />
        </Col>
        <Col sm={8} md={8} lg={7} xl={7}>
          <div className={`px-3 pt-2`} style={card}>
            <div className={``} style={titleStyle}>
              {title}
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
