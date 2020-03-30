import React from "react";
import "./App.css";
import LeafletMap from "./components/Map/LeafletMap";
import Navbar from "./components/Navbar/Navbar";
import AboutUs from "./components/AboutUs/AbboutUs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutUs />
      <LeafletMap />
    </div>
  );
}

export default App;
