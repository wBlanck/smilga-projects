import React from "react";

const Categories = ({ categories }) => {
  return (
    <div className="btn-container">
      <button className="filter-btn">all</button>
      {categories.map((category, i) => {
        return (
          <button key={i} className="filter-btn">
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
