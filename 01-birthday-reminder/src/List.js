import React from "react";

const List = ({ data, setBirthDays }) => {
  return (
    <section className="container">
      <h3>{`${data.length} birthdays today`}</h3>
      {data.map(({ id, name, age, image }) => {
        return (
          <article className="person" key={id}>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
      <button onClick={() => setBirthDays([])}>clear all</button>
    </section>
  );
};

export default List;
