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
    backgroundColor: "red",
    paddingTop: "0px",
  };

  const dateDivStyle = {
    color: "black",
    fontWeight: "bold",
  };

  return (
    <div>
      <Row>
        <Col className="">
          <p style={dateDivStyle}>{date}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <div style={divStyle}>
            <p>{title}</p>
            <img src={pic}></img>
          </div>
        </Col>
      </Row>
    </div>

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
