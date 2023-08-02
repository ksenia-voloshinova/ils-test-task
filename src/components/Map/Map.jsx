import "./index.scss";
import "leaflet/dist/leaflet.css";
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import {useSelector } from "react-redux";


import { Icon, divIcon, point } from "leaflet";
import {selectActiveRouteIndex, selectMarkers} from "../../selectors/selectors";
import {useEffect} from "react";


const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
    iconSize: [38, 38]
});

const createClusterCustomIcon = function (cluster) {
    return new divIcon({
        html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
        className: "custom-marker-cluster",
        iconSize: point(33, 33, true)
    });
};


export default function Map() {
    const { routesList } = useSelector(selectMarkers);
    const activeRouteIndex = useSelector(selectActiveRouteIndex) as number | null | undefined;
    return (
        <MapContainer  center={routesList[activeRouteIndex][0]} zoom={13}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MarkerClusterGroup
                key={activeRouteIndex}
                chunkedLoading
                iconCreateFunction={createClusterCustomIcon}
            >
                {routesList[activeRouteIndex].map((marker) => (
                    <Marker position={marker} icon={customIcon}>
                        <Popup>{marker}</Popup>
                    </Marker>
                ))}

            </MarkerClusterGroup>
        </MapContainer>
    );
};
