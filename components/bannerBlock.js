import React from "react";

export default function BannerBlock({
  paddingTop,
  paddingLeft,
  paddingRight,
  color,
  text,
}) {
  const divStyle = {
    width: "150px",
    height: "150px",
    paddingLeft: `${paddingLeft}`,
    paddingRight: `${paddingRight}`,
    paddingTop: `${paddingTop}`,
    backgroundColor: `${color}`,
    color: "white",
    fontSize: "24px",
    fontWeight: "bold",
  };

  return (
    <div style={divStyle}>
      <p>{text}</p>
    </div>
  );
}
