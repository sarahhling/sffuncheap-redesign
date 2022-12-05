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
    height: "170px",
    paddingLeft: `${paddingLeft}`,
    paddingRight: `${paddingRight}`,
    paddingTop: `${paddingTop}`,
    backgroundColor: `${color}`,
    color: "white",
    fontSize: "22px",
    fontWeight: "bold",
  };

  return (
    <div style={divStyle}>
      <p>{text}</p>
    </div>
  );
}
