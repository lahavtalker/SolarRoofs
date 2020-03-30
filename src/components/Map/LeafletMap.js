import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import "./LeafletMap.css";
<<<<<<< HEAD
import * as BuildingData from "./BeerSheva.json";
=======
import * as data from './test.json';
>>>>>>> caf2e90f096d3493e4f0906033a3629dfe083d00

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
<<<<<<< HEAD
        {/* {BuildingData.features.map(building => (
          <Marker key={building.properties.osm_id} position={[
            building.geometry.coordinates[1],
            building.geometry.coordinates[0]
=======

        {data.features.map(bld => (
          <Marker key={bld.properties.osm_id} position={[
            bld.geometry.coordinates[1],
            bld.geometry.coordinates[0]
>>>>>>> caf2e90f096d3493e4f0906033a3629dfe083d00
          ]} />
        ))} */}
      </Map>
    );
  }
}

export default LeafletMap;
