import React from "react";
import "./BldItem.css";
import * as bld from "../BeerSheva.json";

const BldItem = ({ id }) => {
  console.log();
  return (
    <div className="info-grid-container">
      <div className="info address">
        <label>Address:</label>
        <span> {}</span>
      </div>
      <div className="info city">
        <label>City:</label>
        <span> {}</span>
      </div>

      <div className="info zone">
        <label>Zone:</label>
        <span>{}</span>
      </div>
      <div className="info public">
        <label>Public:</label>
        <span>{}</span>
      </div>
      <div className="info area">
        <label>Area:</label>
        <span>{}</span>
      </div>
      <div className="info Z">
        <label>Z:</label>
        <span>{}</span>
      </div>

      <div className="info forrest">
        <label>Forrest:</label>
        <span> {}</span>
      </div>
      <div className="info waterway">
        <label>Waterway:</label>
        <span> {}</span>
      </div>
      <div className="info potential">
        <label>Rating:</label>
        <span> {}</span>
      </div>
      <div className="info summary">
        <label> Summary:</label>
        <span> {}</span>
      </div>
    </div>
  );
};

export default BldItem;
