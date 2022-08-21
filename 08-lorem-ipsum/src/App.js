import React, { useState } from "react";
import data from "./data";
function App() {
  const [paragraphs, setParagraphs] = useState([]);
  const [amountOfParagraphs, setAmountOfParagraphs] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    let count = amountOfParagraphs;
    if (count <= 0) {
      count = 1;
    }
    if (count > 8) {
      count = 8;
    }

    setParagraphs(data.slice(0, count));
  };

  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs: </label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={amountOfParagraphs}
          onChange={(e) => setAmountOfParagraphs(e.target.value)}
        />
        <button className="btn">generate</button>
      </form>
      <article className="lorem-text">
        {paragraphs.map((paragraph, index) => {
          return <p key={index}>{paragraph}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
