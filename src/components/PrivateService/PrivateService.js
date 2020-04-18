import React from "react";
import LeafletMap from "../Map/LeafletMap";
import Menu from "../Menu/Menu";
import BldItem from "../BldItem/BldItem";
import SearchBar from "../SearchBar/SearchBar";

const PrivateService = () => {
  const renderBldList = () => {
    return <BldItem />;
  };
  const renderSearchBar = () => {
    return <SearchBar typeSearch="Address:" />;
  };
  return (
    <div className="grid-container">
      <Menu
        service={"Private Service"}
        typeSearch={"Address:"}
        funcRenderBld={renderBldList}
        funcRenderSearchBar={renderSearchBar}
      />
      <LeafletMap />
    </div>
  );
};

export default PrivateService;
