import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as bld from "../BeerSheva.json";
import "./Table.css";
import { changeOsmId } from "../redux//action";

const Table = ({ searchValue, changeOsmId, zoom }) => {
  const onClickOnBld = (id, cord, zoom) => {
    changeOsmId({ id, cord, zoom });
  };

  const calculateRating = (data) => {
    const { height, area, zone, nearForest, nearWater, publicBld } = data;
    let result = 0;

    // height check
    if (height > 0 && height < 200) {
      result += 3;
    } else if (
      (height < 0 && height > -200) ||
      (height < 400 && height > 200)
    ) {
      result += 2;
    } else if (
      (height < 1000 && height > 400) ||
      (height < -200 && height > -400)
    ) {
      result += 1;
    }

    // area check
    if (area > 0 && area < 250) {
      result += 1;
    } else if (area > 250 && area < 1000) {
      result += 2;
    } else if (area > 5000 && area < 1000) {
      result += 3;
    } else if (area > 5000 && area < 10000) {
      result += 4;
    } else if (area > 10000 && area < 30000) {
      result += 5;
    } else if (area > 30000) {
      result += 6;
    }

    // zone check
    if (zone === "desert") {
      result += 3;
    } else if (zone === "eastern") {
      result += 2;
    } else {
      result += 1;
    }

    // near forest check
    if (nearForest === true) {
      result += 1;
    } else {
      result += 2;
    }

    // near water check
    if (nearWater === true) {
      result += 1;
    } else {
      result += 2;
    }

    // public building check
    if (publicBld === true) {
      result += 2;
    } else {
      result += 1;
    }

    if (result >= 15) return "פוטנציאל גבוהה";

    if (result >= 10 && result < 15) return " פוטנציאל טוב";

    if (result < 10) return " פוטנציאל נמוך";
  };

  const rating = (bldProp) => {
    const data = {
      height: bldProp.Z,
      area: bldProp.area,
      zone: bldProp.zone,
      nearForest: bldProp.nearbyForest,
      nearWater: bldProp.nearbyWater,
      publicBld: bldProp.public,
    };

    let rate = calculateRating(data);

    return rate;
  };

  const renderTableData = () => {
    const bldData = bld.features;
    return bldData
      .filter((bld) => bld.properties.name_2 === searchValue)
      .map((bld) => (
        <tr
          key={bld.properties.osm_id}
          onClick={() =>
            onClickOnBld(
              bld.properties.osm_id,
              bld.geometry.coordinates[0],
              (zoom = 17)
            )
          }
        >
          <td>{bld.properties.name}</td>
          <td>{bld.properties.public}</td>
          <td>{bld.properties.area}</td>
          <td>{rating(bld.properties)}</td>
        </tr>
      ));
  };
  const renderTableHeader = () => {
    return (
      <tr>
        <th>Address</th>
        <th>Public</th>
        <th>Area</th>
        <th>Potential</th>
      </tr>
    );
  };

  useEffect(() => {
    return () => changeOsmId({ id: null, zoom: 13, cord: [34.7913, 31.25181] });
  }, [changeOsmId]);

  return (
    <div>
      <table className="bld-list">
        <thead>{renderTableHeader()}</thead>
        <tbody>{renderTableData()}</tbody>
      </table>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    searchValue: state.valueSearch,
    selectBld: state.BldItem,
    zoom: state.mapGeometry.zoom,
  };
};
export default connect(mapStateToProps, { changeOsmId })(Table);
