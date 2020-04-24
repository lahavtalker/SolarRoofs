import { SearchControl } from "react-leaflet-search";
import React from "react";

const SearchComponent = (props) => {
  return (
    <SearchControl
      provider="OpenStreetMap"
      providerOptions={{ providerKey: "{BINGMAP_KEY}" }}
    />
  );
};

export default SearchComponent;
