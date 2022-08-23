import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [userColor, setUserColor] = useState("#fff");

  const color = new Values(userColor),
    { log } = console;

  log(color.shades());
  log(color.tints());

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form>
          <input type="text" className="null" placeholder="green" value />
          <button type="submit" className="btn">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        <article
          className="color false"
          style={{ backgroundColor: "rgb(255,255,2)" }}>
          <p className="percent-value"></p>
          <p className="color-value"></p>
        </article>
      </section>
    </>
  );
}

export default App;
