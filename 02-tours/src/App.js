import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";

function App() {
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    console.log(id);
    const updatedTours = tours.filter((tour) => tour.id !== id);
    setTours(updatedTours);
  };

  const fetchTours = async () => {
    try {
      const response = await fetch(url);
      const tours = await response.json();

      setTours(tours);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No Tours Left</h2>
          <button
            className="btn"
            onClick={() => {
              fetchTours();
            }}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
