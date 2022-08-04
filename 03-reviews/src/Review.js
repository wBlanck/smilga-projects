import React, { useState } from "react";
import data from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [people, setPeople] = useState(data);
  const [person, setPerson] = useState(0);

  const randomPerson = () => {
    let randomNumb = Math.floor(Math.random() * people.length);
    console.log(randomNumb + " " + person);

    if (randomNumb === person && person === 0) {
      randomNumb = person + 1;
    } else if (randomNumb === person && person !== 0) {
      randomNumb = person - 1;
    }
    setPerson(randomNumb);
  };

  return (
    <section className="container">
      <div className="title">
        <h2>our reviews</h2>
        <div className="underline"></div>
      </div>
      <article className="review">
        <div className="img-container">
          <img src={people[person].image} alt="" className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{people[person].name}</h4>
        <p className="job">{people[person].job}</p>
        <p className="info">{people[person].text}</p>
        <div className="button-container">
          <button className="prev-btn">
            <FaChevronLeft />
          </button>
          <button className="next-btn">
            <FaChevronRight />
          </button>
        </div>
        <button
          className="random-btn"
          onClick={() => {
            randomPerson();
          }}>
          surprise me
        </button>
      </article>
    </section>
  );
};

export default Review;
