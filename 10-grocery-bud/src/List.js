import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ items }) => {
  console.log(items);
  return (
    <div className="grocery-container">
      <div className="grocery-list">
        {items.map((item) => {
          return (
            <article key={item.id} className="grocery-item">
              <p className="title">{item.itemName}</p>
              <div className="btn-container">
                <button type="button" className="edit-btn">
                  <FaEdit />
                </button>
                <button type="button" className="delete-btn">
                  <FaTrash />
                </button>
              </div>
            </article>
          );
        })}
      </div>
      <button className="clear-btn">clear items</button>
    </div>
  );
};

export default List;
