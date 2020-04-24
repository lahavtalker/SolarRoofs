import React, { useState } from "react";
import { searchByCity } from "../redux/action";
import { connect } from "react-redux";
import { SearchControl } from "react-leaflet-search";

const SearchBar = ({ typeSearch, searchByCity }) => {
  const [location, setLocation] = useState("");

  const onClickEvent = () => {
    if (location.length > 0) {
      if (typeSearch === "City:") {
        searchByCity({ location });
      }
    }
  };

  return (
    <div>
      <label style={{ fontWeight: "600", marginRight: "10px" }}>
        {typeSearch}
      </label>
      {/* <input
        type="text"
        value={location}
        onChange={(event) => {
          setLocation(event.target.value);
        }}
      /> */}
      <SearchControl />
      <button onClick={onClickEvent}>Serach</button>
    </div>
  );
};

export default connect(null, { searchByCity })(SearchBar);
