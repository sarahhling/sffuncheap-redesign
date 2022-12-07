import React from "react";
import "../styles/Home.module.css";
import Container from "react-bootstrap/Container";

export default function Tag({ tag, color, size }) {
  const divStyle = {
    backgroundColor: `${color}`,
    color: "white",
    fontSize: `${size}`,
    fontWeight: "500",
    borderRadius: "6px",
    display: "inline-block",
    padding: "2px 5px",
    margin: "2px",
    cursor: "pointer",
  };

  return <div style={divStyle}>{tag}</div>;
}
