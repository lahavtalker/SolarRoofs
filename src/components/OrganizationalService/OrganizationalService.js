import React from "react";
import LeafletMap from "../Map/LeafletMap";
import Menu from "../Menu/Menu";

const OrganizationalService = () => {
  return (
    <div className="grid-container">
      <Menu service={"Organizational Service"} typeSearch={"City:"} />
      <LeafletMap />
    </div>
  );
};

export default OrganizationalService;
