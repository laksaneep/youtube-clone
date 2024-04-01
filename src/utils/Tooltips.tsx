import React from "react";
import { Tooltip } from "react-tooltip";

const Tooltips = () => {
  const TOOLTIPS = ["setting", "search", "voiceSearch"];

  return (
    <>
      {TOOLTIPS.map((id, index) => {
        return (
          <Tooltip id={id} key={index} noArrow style={{ zIndex: "1000" }} />
        );
      })}
    </>
  );
};

export default Tooltips;
