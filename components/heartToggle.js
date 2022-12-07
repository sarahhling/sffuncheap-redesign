import React from "react";
import { Image } from "react-bootstrap";

export default function HeartToggle({
  active,
  handleChangeActive,
  size,
  heart,
}) {
  return (
    <>
      <div className="toggle-wrapper">
        {active ? (
          <Image
            className="inactive"
            src="/images/heart-filled.png"
            alt="heart filled"
            height={size}
            width={size}
            onClick={() => handleChangeActive()}
            style={{ cursor: "pointer" }}
          />
        ) : (
          <Image
            className="active"
            src={heart}
            alt="heart"
            height={size}
            width={size}
            onClick={() => handleChangeActive()}
            style={{ cursor: "pointer" }}
          />
        )}
      </div>
    </>
  );
}
