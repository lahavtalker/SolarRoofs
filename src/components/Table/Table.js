import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as bld from "../BeerSheva.json";
import "./Table.css";
import { changeOsmId } from "../redux//action";
const Table = ({ searchValue, changeOsmId }) => {
  const onClickOnBld = (id) => {
    changeOsmId(id);
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
  useEffect(() => {
    return () => changeOsmId("");
  }, [changeOsmId]);
  return (
    <div>
      <table className="bld-list">
        {renderTableHeader()}
        <tbody>{renderTableData()}</tbody>
      </table>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { searchValue: state.valueSearch.location, selectBld: state.BldItem };
};
export default connect(mapStateToProps, { changeOsmId })(Table);
