import React, { useState } from "react";

const SearchBar = ({ typeSearch }) => {
  const [location, setLocation] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    setLocation(location);
  };

  return (
    <div className="topnav" onSubmit={onFormSubmit}>
      <label style={{ fontWeight: "600" }}>{typeSearch} </label>
      <input
        type="text"
        value={location}
        onChange={(event) => {
          setLocation(event.target.value);
        }}
      />
      <button>Serach</button>
    </div>
  );
};

export default SearchBar;
