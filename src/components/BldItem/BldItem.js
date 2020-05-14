import React from "react";
import "./BldItem.css";
import { connect } from "react-redux";
import { changeOsmId } from "../redux/action";

const BldItem = ({ bldProperties, address }) => {
  const checkUndefined = () => {
    if (bldProperties !== undefined) {
      bldProperties.properties.public === null
        ? (bldProperties.properties.public = "אינו מבנה ציבורי")
        : (bldProperties.properties.public = "מבנה ציבורי");
      bldProperties.properties.zone === "desert"
        ? (bldProperties.properties.zone = "איזור מדברי")
        : (bldProperties.properties.zone = "");
      bldProperties.properties.nearbyForest === null
        ? (bldProperties.properties.nearbyForest = "אינו באיזור מיוער")
        : (bldProperties.properties.nearbyForest = "איזור מיוער");
      bldProperties.properties.nearbyWater === null
        ? (bldProperties.properties.nearbyWater = "אינו באיזור ואדי")
        : (bldProperties.properties.nearbyWater = "קרוב לואדי");

      return true;
    }
    return false;
  };

  if (checkUndefined()) {
    return (
      <div className="info-grid-container">
        <div className="info address">
          <h3>כתובת</h3>
          <p>{address}</p>
        </div>
        <div className="info city">
          <h3>עיר</h3>
          <p> {bldProperties.properties.name_2}</p>
        </div>

        <div className="info zone">
          <h3>איזור</h3>
          <p>{bldProperties.properties.zone}</p>
        </div>
        <div className="info public">
          <h3>ציבורי/פרטי</h3>
          <p>{bldProperties.properties.public}</p>
        </div>
        <div className="info area">
          <h3>שטח</h3>
          <p>{bldProperties.properties.area}</p>
        </div>
        <div className="info Z">
          <h3>גובה</h3>
          <p>{bldProperties.properties.Z}</p>
        </div>

        <div className="info forrest">
          <h3>איזור מיוער</h3>
          <p> {bldProperties.properties.nearbyForest}</p>
        </div>
        <div className="info waterway">
          <h3>איזור ואדיות</h3>
          <p> {bldProperties.properties.nearbyWater}</p>
        </div>
        <div className="info potential">
          <h3>דירוג</h3>
          <p> {}</p>
        </div>
        {/* <div className="info summary">
          <h3> Summary:</h3>
          <p> {}</p>
        </div> */}
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
