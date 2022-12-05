import React from "react";
import "../styles/Home.module.css";
import Container from "react-bootstrap/Container";

export default function Tag({ tag, color }) {
  const divStyle = {
    backgroundColor: `${color}`,
    color: "white",
    fontSize: "16px",
    fontWeight: "500",
    borderRadius: "6px",
    display: "inline-block",
    padding: "2px 5px",
    margin: "2px",
  };

  return <div style={divStyle}>{tag}</div>;
}
