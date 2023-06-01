import { useState } from "react";
import axios from "axios";
import "./addScenario.css";

const AddScenario = () => {
  const [index, setindex] = useState(0);
  const [scenario, setScenario] = useState({
    id: index,
    name: "",
    time: "",
  });

  const handleChange = (e) => {
    setScenario({ ...scenario, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/scenarios", scenario)
      .then((response) => {
        console.log("Scenario created:", response.data);
        setindex(index + 1);
        setScenario({ id: index, name: "", time: "" });
      })
      .catch((error) => {
        console.error("Error creating scenario:", error);
      });
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h4>Scenario</h4>
        <h2>Add Scenario</h2>
        <div className="form-table">
          <div className="form-div">
            <label htmlFor="scenario-name">Scenario Name</label>
            <input
              placeholder=" scenario"
              type="text"
              id="scenario-name"
              name="name"
              value={scenario.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-div">
            <label htmlFor="scenario">Scenario Time (seconds)</label>
            <input
              placeholder="Time"
              type="text"
              id="scenario"
              name="time"
              value={scenario.time}
              onChange={handleChange}
            />
          </div>
        </div>
        <button className="addbtn" type="submit">
          Add
        </button>
        <button className="resetbtn">Reset</button>
        <button className="gobtn">Go back</button>
      </form>
    </div>
  );
};

export default AddScenario;
