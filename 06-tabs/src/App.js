import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";

function App() {
  const [employees, setEmployees] = useState([]);
  const [employee, setEmployee] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEmployees = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      setEmployees(data);
      setEmployee(data[0]);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);
  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    );
  }

  const selectEmployee = (job) => {
    setEmployee(job);
  };

  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>

      <div className="jobs-center">
        <div className="btn-container">
          {employees.map((job) => {
            return (
              <button
                key={job.id}
                className={`${
                  employee.company === job.company ? "active-btn" : ""
                } job-btn`}
                onClick={() => selectEmployee(job)}>
                {job.company}
              </button>
            );
          })}
          <button className="job-btn false"></button>
          <button className="job-btn false"></button>
        </div>

        <article className="job-info">
          <h3>{employee.title}</h3>
          <h4>{employee.company}</h4>
          <p className="job-date">{employee.dates}</p>

          {employee.duties.map((duty, i) => {
            return (
              <div key={i} className="job-desc">
                <FaAngleDoubleRight className="job-icon" />
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
      <button className="btn">more info</button>
    </section>
  );
}

export default App;
