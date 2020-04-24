import { SearchControl } from "react-leaflet-search";
import React from "react";

const SearchComponent = (props) => {

    const results = (searchInfo) => {
      const coor = searchInfo.payload.latlng;
      const info = searchInfo.payload.info;
      console.log(coor);
      console.log(info);
    }

    return (
        <SearchControl
            provider="OpenStreetMap"
            providerOptions={{ providerKey: "{BINGMAP_KEY}" }}
            inputPlaceholder="Enter address"
            showMarker={true}
            openSearchOnLoad={true}
            handler={results}
        />
    );
};

export default SearchComponent;
