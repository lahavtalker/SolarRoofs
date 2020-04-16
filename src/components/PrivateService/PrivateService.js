import React from "react";
import LeafletMap from "../Map/LeafletMap";
import Menu from "../Menu/Menu";

const PrivateService = () => {
  return (
    <div className="grid-container">
      <Menu service={"Private Service"} typeSearch={"Address:"} />
      <LeafletMap />
    </div>
  );
};

export default PrivateService;
