import React from "react";
import Col from "react-bootstrap/Col";

export default function TagChunks({ tags }) {
  const divStyle = {
    width: "145px",
    color: "white",
    fontSize: "12px",
    fontWeight: "bold",
    position: "relative",
  };

  return (
    <Col md="auto">
      <div style={divStyle}>{tags}</div>
    </Col>
  );
}
