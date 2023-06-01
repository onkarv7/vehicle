import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import AddScenario from "./components/AddScenario";
import Vehicle from "./components/Vehicle";
import ListScenarios from "./components/ListScenarios";
import Sidebar from "./components/Sidebar";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/addscenarios" element={<AddScenario />} />
          <Route path="/vehicles" element={<Vehicle />} />
          <Route path="/listscenarios" element={<ListScenarios />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
