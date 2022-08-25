import { v4 as uuid } from "uuid";

import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [userInput, setUserInput] = useState("");
  const [items, setItems] = useState([]);
  const [edit, setEdit] = useState(false);
  const [alert, setAlert] = useState({
    type: "success",
    msg: "",
    showAlert: false,
  });

  // add items ✅
  // remove items ✅
  // edit items
  // clear list ✅
  // display alerts based on actions made
  // add to localStorage

  const removeItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
    setAlert(
      (prev) =>
        (prev = {
          ...prev,
          type: "danger",
          msg: "item removed",
          showAlert: true,
        })
    );
  };

  const editItem = (itemId) => {
    setEdit(true);
    setUserInput(itemId);
    let updatedItem = items.filter((item) => item.id !== itemId);
    updatedItem[0].itemName = userInput;
  };

  const clearItems = () => {
    setItems([]);
    setAlert(
      (prev) =>
        (prev = { ...prev, type: "danger", msg: "empty list", showAlert: true })
    );
  };

  const removeAlert = () => {
    setAlert((prev) => (prev = { ...prev, showAlert: false }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!edit) {
      const idKey = uuid();

      const newItems = [...items];
      newItems.push({ id: idKey, itemName: userInput });

      setItems(newItems);
      setUserInput("");
      setAlert(
        (prev) =>
          (prev = {
            ...prev,
            type: "success",
            showAlert: true,
            msg: "Item added to the list",
          })
      );
    }

    if (edit) {
    }
  };

  return (
    <section className="section-center">
      {alert.showAlert && (
        <Alert
          type={alert.type}
          msg={alert.msg}
          removeAlert={removeAlert}
          items={items}
        />
      )}

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
