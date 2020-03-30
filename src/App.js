import React from "react";
import "./App.css";
import LeafletMap from "./components/Map/LeafletMap";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <LeafletMap />
    </div>
  );
}

export default App;
