import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ items, removeItem, edit, clear }) => {
  return (
    <div className="grocery-container">
      <div className="grocery-list">
        {items.map((item) => {
          return (
            <article key={item.id} className="grocery-item">
              <p className="title">{item.itemName}</p>
              <div className="btn-container">
                <button
                  type="button"
                  className="edit-btn"
                  onClick={() => edit(item)}>
                  <FaEdit />
                </button>
                <button
                  type="button"
                  className="delete-btn"
                  onClick={() => removeItem(item.id)}>
                  <FaTrash />
                </button>
              </div>
            </article>
          );
        })}
      </div>

      <button className="clear-btn" onClick={() => clear()}>
        clear items
      </button>
    </div>
  );
};

export default List;
