import React from "react";
import styles from "../styles/Home.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function EventCard({ date, pic, title }) {
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
      <a href="/eventDetails">
        <div style={divStyle}>
          <div style={titleStyle}>
            <p>{title}</p>
          </div>
          <img src={pic} style={imgStyle} className={`${styles.eventCard}`} />
        </div>
      </a>
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
