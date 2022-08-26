import { v4 as uuid } from "uuid";

import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [userInput, setUserInput] = useState("");
  const [items, setItems] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState("");
  const [alert, setAlert] = useState({
    type: "success",
    msg: "",
    showAlert: false,
  });

  // add items ✅
  // remove items ✅
  // edit items
  // clear list ✅
  // display alerts based on actions made ✅
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

  const editItem = (item) => {
    setIsEditing(true);
    setUserInput(item.itemName);
    setEditId(item.id);
  };

  const clearItems = () => {
    setItems([]);
    setAlert(
      (prev) =>
        (prev = { ...prev, type: "danger", msg: "empty list", showAlert: true })
    );
    setUserInput("");
  };

  const removeAlert = () => {
    setAlert((prev) => (prev = { ...prev, showAlert: false }));
    setUserInput("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userInput.length === 0) {
      setAlert(
        (prev) =>
          (prev = {
            ...prev,
            type: "danger",
            showAlert: true,
            msg: "Please Enter Value",
          })
      );
      return;
    }

    if (!isEditing) {
      console.log("testing");
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

    if (isEditing && userInput) {
      console.log("edited");

      setItems(
        items.map((item) => {
          if (item.id === editId) {
            return { ...item, itemName: userInput };
          }
          return item;
        })
      );

      setAlert(
        (prev) =>
          (prev = {
            ...prev,
            type: "success",
            showAlert: true,
            msg: "Item Updated",
          })
      );
      setIsEditing(false);
      setUserInput("");
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
            {isEditing ? "Edit" : "Submit"}
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
