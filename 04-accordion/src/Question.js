import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ id, info, title }) => {
  const [toggleInfo, setToggleInfo] = useState(false);

  return (
    <section className="info">
      <article className="question">
        <header>
          <h4>{title}</h4>
          <button
            className="btn"
            onClick={() => setToggleInfo((prev) => !prev)}>
            {toggleInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </header>
        {toggleInfo && <p>{info}</p>}
      </article>
    </section>
  );
};

export default Question;
