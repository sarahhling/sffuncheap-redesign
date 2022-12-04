import React from "react";
import styles from "../styles/Home.module.css";

export default function EventCard({ date, pic, title }) {
  const divStyle = {
    width: "100px",
    height: "100px",
    color: "white",
    fontSize: "12px",
    fontWeight: "bold",
  };

  const dateDivStyle = {
    color: "black",
    fontWeight: "bold",
  };

  return (
    // <div>
    //   <p>{date}</p>
    //   <img src={pic}></img>
    // </div>

    <div className="bg-image hover-overlay">
      <img src={pic} className="img-fluid" />
      <a href="/eventDetails">
        <div className="mask overlay" style={{ backgroundColor: "red" }}></div>
      </a>
    </div>
  );
}

/*
TODO:

create heart toggle ability
hover text

https://react-bootstrap.github.io/components/overlays/


*/
