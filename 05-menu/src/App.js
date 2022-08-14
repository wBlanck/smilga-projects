import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [menu, setMenu] = useState(items);
  const [categories, setCategories] = useState([]);

  const setupCategories = () => {
    let setupCategories = [];

    menu.map((meal) => {
      if (!setupCategories.includes(meal.category)) {
        setupCategories.push(meal.category);
      }
    });
    setCategories(setupCategories);
  };

  useEffect(() => {
    setupCategories();
  }, []);

  const selectCategory = (category) => {
    console.log(category);
    if (category === "all") {
      setMenu(items);
      console.log(menu);
      return;
    }
    const updatedMenu = items.filter((meal) => {
      return meal.category === category;
    });
    setMenu(updatedMenu);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <div className="btn-container">
          <button className="filter-btn" onClick={() => selectCategory("all")}>
            all
          </button>
          {categories.map((category, i) => (
            <button
              key={i}
              className="filter-btn"
              onClick={() => selectCategory(category)}>
              {category}
            </button>
          ))}
        </div>
        <div className="section-center">
          <Menu items={menu} />
        </div>
      </section>
    </main>
  );
}

export default App;
