import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import BldList from "../BldList/BldList";

import "./Menu.css";

const Menu = ({ service, typeSearch }) => {
  return (
    <div>
      <h3>{service}</h3>
      {typeSearch}
      <SearchBar />
      <BldList />
    </div>
  );
};

export default Menu;
