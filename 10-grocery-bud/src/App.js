import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  // add items
  // remove items
  // edit items
  // clear list
  // display alerts based on actions made
  // add to localStorage

  return (
    <section className="section-center">
      <form className="grocery-form">
        <h3>grocery bud</h3>
        <div className="form-control">
          <input type="text" className="grocery" placeholder="e.g. eggs" />
          <button type="submit" className="submit-btn">
            submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default App;
