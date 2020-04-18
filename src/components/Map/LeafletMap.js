import React from "react";
import { Map, Marker, TileLayer, Popup } from "react-leaflet";
import "./LeafletMap.css";
import * as data from "./test.json";

// const mapLink = '<a href="http://www.esri.com/">Esri</a>';
// const wholink =
//   "i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community";

const startPosition = [31.25181, 34.7913];

const LeafletMap = () => {

    const [activeMarker, setActiveMarker] = React.useState(null);

    return (
        <Map center={startPosition} zoom={13}>
            <TileLayer
                url="http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                attribution='&copy;  <a href="http://www.esri.com/">Esri</a> '
                maxZoom={18}
            />

            {data.features.map((bld) => (
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
            ))}

            {activeMarker && (
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
            )}
        </Map>
    );
};

export default LeafletMap;
