import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ type, rgb, light, weight }) => {
  const [hexColor, setHexColor] = useState("");

  useEffect(() => {
    setHexColor(rgbToHex(rgb[0], rgb[1], rgb[2]));
  }, []);

  return (
    <article
      className={`color ${light ? "color-light" : "false"}`}
      style={{ backgroundColor: hexColor }}>
      <p className="percent-value"></p>
      <p className="color-value"></p>
    </article>
  );
};

export default SingleColor;
