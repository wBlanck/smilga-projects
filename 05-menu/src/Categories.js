import React from "react";

const Categories = ({ categories, select }) => {
  return (
    <div className="btn-container">
      <button className="filter-btn" onClick={() => select("all")}>
        all
      </button>
      {categories.map((category, i) => {
        return (
          <button
            key={category}
            className="filter-btn"
            onClick={() => select(category)}>
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
