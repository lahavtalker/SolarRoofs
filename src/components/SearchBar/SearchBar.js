import React, { useState } from "react";
import { searchByCity } from "../redux/action";
import { connect } from "react-redux";
import SearchComponent from "../SearchComponent/SearchComponent";

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
      <SearchComponent />
      <label style={{ fontWeight: "600", marginRight: "10px" }}>
        {typeSearch}
      </label>
      <input
        type="text"
        value={location}
        onChange={(event) => {
          setLocation(event.target.value);
        }}
      />
      <button onClick={onClickEvent}>Serach</button>
    </div>
  );
};

export default connect(null, { searchByCity })(SearchBar);
