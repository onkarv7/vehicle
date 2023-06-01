import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ListScenarios.css";

const ListScenarios = () => {
  const [scenarios, setScenarios] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/scenarios")
      .then((response) => {
        setScenarios(response.data);
      })
      .catch((error) => {
        console.error("Error fetching scenarios:", error);
      });
  }, []);

  return (
    <div className="container">
      <div>
        <div className="heading">
          <h4>All Scenarios</h4>
          <div>
            <button className="newbtn">New Scenario</button>
            <button className="addbtn">Add Vehicle</button>
            <button className="deletebtn">Delete All</button>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Scenario Id</th>
              <th>Scenario Name</th>
              <th>Scenario Time</th>
              <th>Number of Vehicles</th>
              <th>Add Vehicle</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {scenarios.map((scenario) => (
              <tr key={scenario.id}>
                <td>{scenario.id}</td>
                <td>{scenario.name}</td>
                <td>{scenario.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListScenarios;
