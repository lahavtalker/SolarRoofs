import React from "react";
import LeafletMap from "../Map/LeafletMap";
import SearchBar from "../SearchBar/SearchBar";

const PrivateService = () => {
  return (
    <div>
      Private Service
      <SearchBar typeSearch={"Address:"} />
      <LeafletMap />
    </div>
  );
};

export default PrivateService;
