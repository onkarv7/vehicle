import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div>
        <Link to="/" style={{ color: "black" }}>
          Home
        </Link>
      </div>
      <div>
        <Link to="/addscenarios">Add scenario</Link>
      </div>
      <div>
        <Link to="/listscenarios">List Scenarios</Link>
      </div>
      <div>
        <Link to="/vehicles">Add Vehicle</Link>
      </div>
    </div>
  );
};

export default Sidebar;
