import { SearchControl } from "react-leaflet-search";
import React from "react";
import * as data from "../BeerSheva.json";
import { connect } from "react-redux";
import { searchByAddress } from "../redux/action";

const SearchComponent = ({ searchByAddress, bldProperties }) => {
  const distance = (lat1, lon1, lat2, lon2) => {
    const deg2rad = (deg) => {
      return (deg * Math.PI) / 180;
    };

    const x1 = deg2rad(lat1);
    const y1 = deg2rad(lon1);
    const x2 = deg2rad(lat2);
    const y2 = deg2rad(lon2);

    const R = 6373;
    const dy = y2 - y1;
    const dx = x2 - x1;
    const a =
      Math.sin(dx / 2) * Math.sin(dx / 2) +
      Math.cos(lat1) * Math.cos(lat2) * Math.sin(dy / 2) * Math.sin(dy / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const d = R * c;
    return d;
  };

  const results = (searchInfo) => {
    const coor = searchInfo.payload.latlng;
    const info = searchInfo.payload.info;

    let nearest_point = null;
    let shortest_distance = 1000;
    let current_distance;
    data.features.forEach((feature) => {
      current_distance = distance(
        coor.lat,
        coor.lng,
        feature.geometry.coordinates[0][1],
        feature.geometry.coordinates[0][0]
      );
      if (current_distance < shortest_distance) {
        shortest_distance = current_distance;
        nearest_point = feature;
      }
    });

    return { bld: nearest_point, address: info };
  };

  return (
    <SearchControl
      provider="OpenStreetMap"
      providerOptions={{ providerKey: "{BINGMAP_KEY}" }}
      inputPlaceholder="Enter address"
      showMarker={true}
      openSearchOnLoad={true}
      handler={(info) => {
        const bld = results(info);
        searchByAddress(bld);
      }}
      closeResultsOnClick={true}
    />
  );
};

const mapStateToprops = (state) => {
  return {
    bldProperties: state.valueSearch.bld,
    address: state.valueSearch.address,
    mapGeometry: state.mapGeometry,
  };
};

export default connect(mapStateToprops, { searchByAddress })(SearchComponent);
