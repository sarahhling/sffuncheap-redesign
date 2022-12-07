import React from "react";
import Col from "react-bootstrap/Col";

export default function TagChunks({ tags, width }) {
  const divStyle = {
    width: `${width}`,
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
