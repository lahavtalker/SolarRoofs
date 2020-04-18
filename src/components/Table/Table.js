import React from "react";
import { connect } from "react-redux";
import * as bld from "../BeerSheva.json";
import "./Table.css";

const Table = ({ searchResult, searchValue }) => {
  const onClickOnBld = (id) => {
    console.log("I am Click on this bld- " + id);
  };

  const renderTableData = () => {
    const bldData = bld.features;
    return bldData
      .filter((bld) => bld.properties.name_2 === searchValue)
      .map((bld) => (
        <tr
          key={bld.properties.osm_id}
          onClick={() => onClickOnBld(bld.properties.osm_id)}
        >
          <td>{bld.properties.name}</td>
          <td>{bld.properties.public}</td>
          <td>{bld.properties.area}</td>
          <td>{bld.properties.Z}</td>
        </tr>
      ));
  };
  const renderTableHeader = () => {
    return (
      <tr>
        <th>Address</th>
        <th>Public</th>
        <th>Area</th>
        <th>Rating</th>
      </tr>
    );
  };

  return (
    <div>
      <table className="bld-list">
        <tbody>
          {renderTableHeader()}
          {renderTableData()}
        </tbody>
      </table>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { searchValue: state.valueSearch.location };
};
export default connect(mapStateToProps)(Table);
