import React from "react";
import LeafletMap from "../Map/LeafletMap";
import SearchBar from "../SearchBar/SearchBar";
const NationalService = () => {
  return (
    <div>
      National Service
      <SearchBar typeSearch={"City:"} />
      <LeafletMap />
    </div>
  );
};

export default NationalService;
