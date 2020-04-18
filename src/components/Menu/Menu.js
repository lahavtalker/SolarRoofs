import React from "react";

import "./Menu.css";

import SearchBar from "../SearchBar/SearchBar";
import BldList from "../BldList/BldList";
import BldItem from "../BldItem/BldItem";

const Menu = ({ service }) => {
  const renderbldList = () => {
    if (service === "National Service" || service === "Organizational Service")
      return <BldList />;
    if (service === "Private Service") return <BldItem />;
  };

  const renderSearchBar = () => {
    if (service === "National Service" || service === "Organizational Service")
      return <SearchBar typeSearch="City:" />;
    if (service === "Private Service")
      return <SearchBar typeSearch="Address:" />;
  };

  return (
    <div>
      <h3>{service}</h3>
      {renderSearchBar()}
      <div style={{ height: "72vh", overflowY: "auto" }}>{renderbldList()}</div>
    </div>
  );
};

export default Menu;
