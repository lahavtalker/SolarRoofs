import React, { useState } from "react";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";

const SearchBar = () => {
  const [location, setLocation] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log(location);
  };

  return (
    <div className="">
      <form onSubmit={onFormSubmit} className="">
        <div className="field">
          <label>address:</label>
          <input
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
