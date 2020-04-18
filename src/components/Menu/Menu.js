import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import BldList from "../BldList/BldList";

import "./Menu.css";

const Menu = ({ service, typeSearch }) => {
  const renderbldList = () => {
    if (typeSearch === "City:") return <BldList />;
  };

  return (
    <div>
      <h3>{service}</h3>
      <SearchBar typeSearch={typeSearch} />
      <div style={{ height: "72vh", overflowY: "scroll" }}>
        {renderbldList()}
      </div>
    </div>
  );
};

export default Menu;
