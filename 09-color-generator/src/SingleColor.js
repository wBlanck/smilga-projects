import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ weight, light, hexColor, index, rgb }) => {
  const hexValue = `#${hexColor}`;
  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: hexValue }}
      onClick={() => {
        navigator.clipboard.writeText(hexValue);
      }}>
      <p className="percent-value" style={{ color: hexValue }}>
        {weight}%
      </p>
      <p className="color-value">{hexValue}</p>
    </article>
  );
};

export default SingleColor;
