import React, { useEffect } from "react";
import { searchByCity, searchByAddress } from "../redux/action";
import "./Menu.css";
import { connect } from "react-redux";
import BldItem from "../BldItem/BldItem";

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
      <hr
        style={{
          width: "75%",
          textAlign: "left",
          marginLeft: "0",
          color: "#444",
        }}
      />
      <div style={{ height: "72vh", overflowY: "auto" }}>{funcRenderBld()}</div>
    </div>
  );
};

export default connect(null, { searchByCity })(Menu);
