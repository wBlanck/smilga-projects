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
    try {
      const color = new Values(userColor);
      setListOfColors(color.all(10));
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
            placeholder="#fff"
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
          return <SingleColor light={true} hexColor={color.hex} {...color} />;
        })}
      </section>
    </>
  );
}

export default App;
