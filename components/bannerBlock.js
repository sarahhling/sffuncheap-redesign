import React from "react";

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
