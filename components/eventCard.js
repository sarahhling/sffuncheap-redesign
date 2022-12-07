import styles from "../styles/Home.module.css";
import { Col, Row } from "react-bootstrap/";
import Link from "next/link";
import Image from "next/image";
import HeartToggle from "../components/heartToggle";
import React, { useState } from "react";

export default function EventCard({ date, pic, title }) {
  const [cardHovered, onHover] = useState(); //add new tag with heart
  const [active, setActive] = useState(false);

  const handleChangeActive = () => {
    setActive((previousStar) => {
      return !previousStar;
    });
  };
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
    paddingLeft: "10px",
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

      <div style={divStyle}>
        <div style={{ position: "absolute", top: "10px", right: "10px" }}>
          <HeartToggle
            active={active}
            handleChangeActive={handleChangeActive}
            size="30px"
            heart="/images/heartred.png"
          />
        </div>
        <div style={titleStyle} className=" align-top">
          <Link
            href="/eventDetails"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            <p>{title}</p>
          </Link>
        </div>
        <Link href="/eventDetails">
          <Image
            src={pic}
            style={imgStyle}
            className={`${styles.eventCard}`}
            width="145"
            height="145"
            alt="event image"
          />
        </Link>
      </div>
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
