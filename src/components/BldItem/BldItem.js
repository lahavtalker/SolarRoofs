import React from "react";
import "./BldItem.css";
import { connect } from "react-redux";
import { changeOsmId } from "../redux/action";

const BldItem = ({ bldProperties, address }) => {
  const checkNndefined = () => {
    if (bldProperties !== undefined) {
      if (bldProperties.properties.public === "public")
        bldProperties.properties.public = "מבנה זה ציבורי";
      else bldProperties.properties.public = "מבנה זה אינו ציבורי";
      if (bldProperties.properties.nearbyForest === "1")
        bldProperties.properties.nearbyForest = "מבנה זה באיזור מיוער";
      else bldProperties.properties.nearbyForest = "מבנה זה אינו באיזור מיוער";
      if (bldProperties.properties.nearbyWater === "1")
        bldProperties.properties.nearbyWater = "מבנה זה באיזור נמוך של ואדי";
      else bldProperties.properties.nearbyWater = "מבנה זה לא באיזור ואדי";

      return true;
    }
    return false;
  };

  if (checkNndefined()) {
    return (
      <div className="info-grid-container">
        <div className="info address">
          <h3>Address:</h3>
          <p>{address}</p>
        </div>
        <div className="info city">
          <h3>City:</h3>
          <p> {bldProperties.properties.name_2}</p>
        </div>

        <div className="info zone">
          <h3>Zone:</h3>
          <p>{bldProperties.properties.zone}</p>
        </div>
        <div className="info public">
          <h3>Public:</h3>
          <p>{bldProperties.properties.public}</p>
        </div>
        <div className="info area">
          <h3>Area:</h3>
          <p>{bldProperties.properties.area}</p>
        </div>
        <div className="info Z">
          <h3>Z:</h3>
          <p>{bldProperties.properties.Z}</p>
        </div>

        <div className="info forrest">
          <h3>Forrest:</h3>
          <p> {bldProperties.properties.nearbyForest}</p>
        </div>
        <div className="info waterway">
          <h3>Waterway:</h3>
          <p> {bldProperties.properties.nearbyWater}</p>
        </div>
        <div className="info potential">
          <h3>Rating:</h3>
          <p> {}</p>
        </div>
        <div className="info summary">
          <h3> Summary:</h3>
          <p> {}</p>
        </div>
      </div>
    );
  }
  return <div></div>;
};

const mapStateToprops = (state) => {
  return {
    bldProperties: state.valueSearch.bld,
    address: state.valueSearch.address,
  };
};

export default connect(mapStateToprops, { changeOsmId })(BldItem);
