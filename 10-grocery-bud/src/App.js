import { v4 as uuid } from "uuid";

import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [userInput, setUserInput] = useState("");
  const [items, setItems] = useState([]);
  const [edit, setEdit] = useState(false);

  // add items ✅
  // remove items ✅
  // edit items
  // clear list
  // display alerts based on actions made
  // add to localStorage

  const removeItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  };

  const editItem = (itemId) => {
    setEdit(true);
    setUserInput(itemId);
    let updatedItem = items.filter((item) => item.id !== itemId);
    updatedItem[0].itemName = userInput;
  };

  const clearItems = () => {
    setItems([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!edit) {
      const idKey = uuid();

      const newItems = [...items];
      newItems.push({ id: idKey, itemName: userInput });

      setItems(newItems);
      setUserInput("");
    }

    if (edit) {
    }
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
      {items.length > 0 && (
        <List
          items={items}
          removeItem={removeItem}
          edit={editItem}
          clear={clearItems}
        />
      )}
    </section>
  );
}

export default App;
