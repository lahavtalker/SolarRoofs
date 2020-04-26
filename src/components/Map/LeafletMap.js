import React, { useState } from "react";
import { Map, Marker, TileLayer, Popup } from "react-leaflet";
import "./LeafletMap.css";
import * as bldData from "../BeerSheva.json";
import { connect } from "react-redux";
import { changeOsmId } from "../redux/action";

const LeafletMap = ({ osmId, lat, lag, zoom }) => {
  const [activeMarker, setActiveMarker] = useState(null);

  const renderMarkerMap = () => {
    return bldData.features
      .filter((bld) => bld.properties.osm_id === osmId)
      .map((bld) => (
        <Marker
          key={bld.properties.osm_id}
          position={[
            bld.geometry.coordinates[0][1],
            bld.geometry.coordinates[0][0],
          ]}
          onClick={() => {
            setActiveMarker(bld);
          }}
        />
      ));
  };
  const renderActiveMarker = () => {
    return (
      activeMarker && (
        <Popup
          position={[
            activeMarker.geometry.coordinates[0][1],
            activeMarker.geometry.coordinates[0][0],
          ]}
          onClose={() => {
            setActiveMarker(null);
          }}
        >
          <div>
            <h2>{"area: " + activeMarker.properties.area}</h2>
          </div>
        </Popup>
      )
    );
  };

  return (
    <Map center={[lag, lat]} zoom={zoom}>
      <TileLayer
        url="http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        attribution='&copy;  <a href="http://www.esri.com/">Esri</a> '
        maxZoom={18}
      />
      {renderMarkerMap()}
      {renderActiveMarker()}
    </Map>
  );
};
const mapStateToProps = (state) => {
  return {
    osmId: state.mapGeometry.id,
    lat: state.mapGeometry.cord[0],
    lag: state.mapGeometry.cord[1],
    zoom: state.mapGeometry.zoom,
  };
};
export default connect(mapStateToProps, { changeOsmId })(LeafletMap);
