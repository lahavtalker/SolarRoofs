import React, { Component } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import "./LeafletMap.css";
import * as BuildingData from "./BeerSheva.json";

// const mapLink = '<a href="http://www.esri.com/">Esri</a>';
// const wholink =
//   "i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community";

const position = [31.25181, 34.7913];

class LeafletMap extends Component {
  render() {
    return (
      <Map center={position} zoom={13}>
        <TileLayer
          url="http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          attribution='&copy;  <a href="http://www.esri.com/">Esri</a> '
          maxZoom={17.5}
        />
        {/* {BuildingData.features.map(building => (
          <Marker key={building.properties.osm_id} position={[
            building.geometry.coordinates[1],
            building.geometry.coordinates[0]
          ]} />
        ))} */}
        <Marker position={position} />
      </Map>
    );
  }
}

export default LeafletMap;
