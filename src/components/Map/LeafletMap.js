import React, { useState } from "react";
import { Map, Marker, TileLayer, Popup } from "react-leaflet";
import "./LeafletMap.css";
import * as bldData from "../BeerSheva.json";
import { connect } from "react-redux";
import { changeOsmId } from "../redux/action";
import img1 from "./154213256.png";
import img2 from "./369912231.png";

const LeafletMap = ({ osmId, lat, lag, zoom, address }) => {
  const [activeMarker, setActiveMarker] = useState(null);

  const roofimg = () => {
    if (osmId === "154213256" || osmId === "369912231") return osmId;
    else return "def";
  };
  // roofimg.src = `./${osmId}.png`;
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

  const clickCalcArea = () => {
    return <div>השטח הפנוי הוא :</div>;
  };

  const renderActiveMarker = () => {
    return (
      activeMarker && (
        <Popup
          style={{ background: "black" }}
          position={[
            activeMarker.geometry.coordinates[0][1],
            activeMarker.geometry.coordinates[0][0],
          ]}
          onClose={() => {
            setActiveMarker(null);
          }}
        >
          <div className="popup">
            <h2>{" עיר: " + activeMarker.properties.name_2}</h2>
            <h2>{address !== undefined ? " כתובת: " + address : null}</h2>
            <h2>
              {activeMarker.properties.name !== null
                ? " שם: " + activeMarker.properties.name
                : null}
            </h2>
            <h2>{"שטח הגג: " + activeMarker.properties.area}</h2>
            <h2>{" גובה: " + activeMarker.properties.Z}</h2>
            <h2>{" איזור: " + activeMarker.properties.zone}</h2>
            <img className="img-bld" src={require(`./${roofimg()}.png`)} />
            <button onClick={() => clickCalcArea}>חישוב שטח פנוי</button>
          </div>
        </Popup>
      )
    );
  };

  return (
    <div>
      <Map center={[lag, lat]} zoom={zoom}>
        <TileLayer
          url="http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          attribution='&copy;  <a href="http://www.esri.com/">Esri</a> '
          maxZoom={18}
        />
        {renderMarkerMap()}
        {renderActiveMarker()}
      </Map>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    osmId: state.mapGeometry.id,
    lat: state.mapGeometry.cord[0],
    lag: state.mapGeometry.cord[1],
    zoom: state.mapGeometry.zoom,
    address: state.valueSearch.address,
  };
};
export default connect(mapStateToProps, { changeOsmId })(LeafletMap);
