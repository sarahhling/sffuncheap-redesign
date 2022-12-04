import React from "react";
import styles from "../styles/Home.module.css";
import "../styles/Navbar.module.css";

export default function BannerBlock({
  paddingTop,
  paddingLeft,
  paddingRight,
  color,
  text,
}) {
  const divStyle = {
    width: "100px",
    height: "100px",
    paddingLeft: `${paddingLeft}`,
    paddingRight: `${paddingRight}`,
    paddingTop: `${paddingTop}`,
    backgroundColor: `${color}`,
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
  };

  return (
    <div style={divStyle}>
      <p>{text}</p>
    </div>
  );
}
