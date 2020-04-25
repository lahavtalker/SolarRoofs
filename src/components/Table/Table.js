import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as bld from "../BeerSheva.json";
import "./Table.css";
import { changeOsmId } from "../redux//action";

const Table = ({ searchValue, changeOsmId }) => {
  const onClickOnBld = (id) => {
    changeOsmId(id);
  };

  const calculateRating = (data) => {
    const { height, area, zone, nearForest, nearWater, publicBld } = data;
    let result = 0;

    if (height > 0 && height < 200) {
      result += 3;
    } 
    else if ((height < 0 && height > -200) || (height < 400 && height > 200)) {
      result += 2;
    }
    else if((height < 1000 && height > 400) || (height < -200 && height > -400)) {
      result += 1;
    }




    return result;
  }

  const rating = (bldProp) => {

    const data = {
      height: bldProp.Z,
      area: bldProp.area,
      zone: bldProp.zone,
      nearForest: bldProp.nearbyForest,
      nearWater: bldProp.nearbyWater,
      publicBld: bldProp.public,
    }

    let rate = calculateRating(data);

    console.log(data);
    return rate;
  }

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
