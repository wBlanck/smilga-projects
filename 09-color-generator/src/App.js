import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [userColor, setUserColor] = useState("");
  const [listOfColors, setListOfColors] = useState(
    new Values("#f12312").all(10)
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    /* error when using color words like "green" "red"  */
    try {
      const color = new Values(userColor);
      console.log(userColor);
      setListOfColors(color);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="null"
            placeholder="#f12312"
            value={userColor}
            onChange={(e) => setUserColor(e.target.value)}
          />
          <button type="submit" className="btn">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {listOfColors.map((color) => {
          if (color.type === "tint") {
            return <SingleColor light={true} {...color} />;
          }

          if (color.type === "shade") {
            return <SingleColor light={false} {...color} />;
          }
        })}
      </section>
    </>
  );
}

export default App;
