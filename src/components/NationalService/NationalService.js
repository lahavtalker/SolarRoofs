import React from "react";
import LeafletMap from "../Map/LeafletMap";
import Menu from "../Menu/Menu";

const NationalService = () => {
  return (
    <div className="grid-container">
      <Menu service={"National Service"} typeSearch={"City:"} />
      <LeafletMap />
    </div>
  );
};

export default NationalService;
