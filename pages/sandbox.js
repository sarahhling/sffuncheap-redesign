import HeartToggle from "../components/heartToggle";
import React, { useState } from "react";

export default function Sandbox() {
  const [active, setActive] = useState(false);

  const handleChangeActive = () => {
    setActive((previousStar) => {
      return !previousStar;
    });
  };

  return (
    <div>
      <HeartToggle active={active} handleChangeActive={handleChangeActive} />
    </div>
  );
}
