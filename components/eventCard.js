import React from "react";
import styles from "../styles/Home.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function EventCard({ date, pic, title }) {
  const [cardHovered, onHover] = useState(); //add new tag with heart
  const [heart, onClick] = useState(); //clicking on heart fills/unfills it

  const divStyle = {
    width: "145px",
    height: "145px",
    color: "white",
    fontSize: "12px",
    fontWeight: "bold",
    position: "relative",
    backgroundColor: "black",
  };

  const dateStyle = {
    color: "black",
    fontWeight: "bold",
    margin: "0px",
  };

  const titleStyle = {
    position: "absolute",
    paddingLeft: "12px",
    paddingRight: "5px",
    paddingBottom: "0px",
    bottom: "0",
    left: "0",
    fontSize: "15px",
    textShadow: "4px 3px 8px rgba(52, 52, 52, 1)",
    color: "white",
  };

  const imgStyle = {
    maxWidth: "100%",
  };
  return (
    <Col md="auto">
      <p style={dateStyle}>{date}</p>
      <Link
        href="/eventDetails"
        onMouseEnter={() => {
          onHover("/images/rainbowlogo.png");
        }}
        onMouseLeave={() => {
          onHover("/images/newlogo2.png");
        }}
      >
        <div style={divStyle}>
          <div style={titleStyle}>
            <p>{title}</p>
          </div>
          <Image
            src={pic}
            style={imgStyle}
            className={`${styles.eventCard}`}
            width="145"
            height="145"
            alt="event image"
          />
        </div>
      </Link>
    </Col>

    // <div className="bg-image hover-overlay">
    //   <img src={pic} className="img-fluid" />
    //   <a href="/eventDetails">
    //     <div className="mask overlay" style={{ backgroundColor: "red" }}></div>
    //   </a>
    // </div>
  );
}

/*
TODO:

create heart toggle ability
hover text

https://react-bootstrap.github.io/components/overlays/


*/
