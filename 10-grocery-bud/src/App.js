import { v4 as uuid } from "uuid";

import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [userInput, setUserInput] = useState("");
  const [items, setItems] = useState([{ id: "idKey", itemName: "userInput" }]);

  // add items
  // remove items
  // edit items
  // clear list
  // display alerts based on actions made
  // add to localStorage

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems((prev) => {
      const idKey = uuid();

      const newItems = [...prev];
      newItems.push({ id: idKey, itemName: userInput });
      return newItems;
    });
  };

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            submit
          </button>
        </div>
      </form>
      {items && <List items={items} />}
    </section>
  );
}

export default App;
