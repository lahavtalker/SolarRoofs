import React from "react";
import LeafletMap from "../Map/LeafletMap";
import SearchBar from "../SearchBar/SearchBar";

const OrganizationalService = () => {
  return (
    <div>
      Organizational Service
      <SearchBar typeSearch={"City:"} />
      <LeafletMap />
    </div>
  );
};

export default OrganizationalService;
