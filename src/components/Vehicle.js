import React, { useState } from "react";

import "./Vehicle.css";

const Vehicle = () => {
  const [vehicle, setVehicle] = useState({
    id: "",
    name: "",
    initialPositionX: "",
    initialPositionY: "",
    speed: "",
    direction: "",
  });

  const handleChange = (e) => {
    setVehicle({ ...vehicle, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setVehicle({
      id: "",
      name: "",
      initialPositionX: "",
      initialPositionY: "",
      speed: "",
      direction: "",
    });
  };

  return (
    <div className="main3">
      <div id="main3-body">
        <h5>Vehicle</h5>
        <h3>Add Your Vehicle</h3>
        <form onSubmit={handleSubmit}>
          <div id="form-div1">
            <div>
              <label>Scenarios List</label>
              <select>
                <option value="">Select Scenario</option>
              </select>
            </div>
            <div>
              <label htmlFor="vehicle-name">Vehicle Name</label>
              <input
                type="text"
                id="vehicle-name"
                name="name"
                value={vehicle.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="vehicle-speed">Speed</label>
              <input
                type="text"
                id="vehicle-speed"
                name="speed"
                value={vehicle.speed}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="vehicle-initialPositionX">Position X</label>
              <input
                type="text"
                id="vehicle-initialPositionX"
                name="initialPositionX"
                value={vehicle.initialPositionX}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="vehicle-initialPositionY">Position Y</label>
              <input
                type="text"
                id="vehicle-initialPositionY"
                name="initialPositionY"
                value={vehicle.initialPositionY}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Direction</label>
              <select
                id="vehicle-direction"
                name="direction"
                value={vehicle.direction}
                onChange={handleChange}
              >
                <option value="">Select Direction</option>
                <option value="Towards">Towards</option>
                <option value="Backwards">Backwards</option>
                <option value="Upwards">Upwards</option>
                <option value="Downwards">Downwards</option>
              </select>
            </div>
          </div>
          <button id="btn1" type="submit">
            Add
          </button>
          <button id="btn2">Reset</button>
          <button id="btn3">Go back</button>
        </form>
      </div>
    </div>
  );
};

export default Vehicle;
