import React from "react";
import Table from "../Table/Table";

const BldList = (props) => {
  return (
    <div>
      <Table list={props.searchResult} />
    </div>
  );
};

export default BldList;
