import React, { useEffect } from "react";
import { searchByCity, searchByAddress } from "../redux/action";
import "./Menu.css";
import { connect } from "react-redux";

const Menu = ({
  service,
  searchByCity,
  funcRenderBld,
  funcRenderSearchBar,
}) => {
  useEffect(() => {
    searchByCity({ location: "" });
  }, [searchByCity]);

  return (
    <div>
      <h3>{service}</h3>
      {funcRenderSearchBar()}
      <div style={{ height: "72vh", overflowY: "auto" }}>{funcRenderBld()}</div>
    </div>
  );
};

export default connect(null, { searchByCity })(Menu);
