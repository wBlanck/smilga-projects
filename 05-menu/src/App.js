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

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} />
        <div className="section-center"></div>
      </section>
    </main>
  );
}

export default App;
