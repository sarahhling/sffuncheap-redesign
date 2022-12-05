import React from "react";
import styles from "../styles/Home.module.css";

export default function EventCard({ date, pic, title }) {
  const divStyle = {
    width: "150px",
    height: "150px",
    color: "white",
    fontSize: "12px",
    fontWeight: "bold",
    backgroundColor: "red",
  };

  const dateDivStyle = {
    color: "black",
    fontWeight: "bold",
  };

  return (
    // <div>
    //   <p>{date}</p>
    // </div>
    <div style={divStyle}>
      <p>{title}</p>
      <p>{date}</p>
      <img src={pic}></img>
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
