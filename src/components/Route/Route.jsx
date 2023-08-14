import React from 'react';
import {Marker, Polyline, useMap} from 'react-leaflet';
import {useSelector} from 'react-redux';
import {fetchDataRoutes} from "../../selectors/selectors";
import {Icon} from "leaflet";

const Route = () => {
    const customIcon = new Icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
        iconSize: [38, 38]
    });

    const { currentRoute } = useSelector(fetchDataRoutes);
    const { activeRoute } = useSelector(fetchDataRoutes);
    const map = useMap();

    if (currentRoute) {
        map.fitBounds([
            [Math.min(activeRoute.point1.lat, activeRoute.point2.lat, activeRoute.point3.lat, ), Math.min(activeRoute.point1.lng, activeRoute.point2.lng, activeRoute.point3.lng)],
            [Math.max(activeRoute.point1.lat, activeRoute.point2.lat, activeRoute.point3.lat,), Math.max(activeRoute.point1.lng, activeRoute.point2.lng, activeRoute.point3.lng)],
        ]);
    }
    return (
        <>
            {currentRoute ?
                <>
                    <Marker position={[activeRoute.point1.lat, activeRoute.point1.lng]} icon={customIcon}/>
                    <Marker position={[activeRoute.point2.lat, activeRoute.point2.lng]} icon={customIcon}/>
                    <Marker position={[activeRoute.point3.lat, activeRoute.point3.lng]} icon={customIcon}/>
                    <Polyline pathOptions={{color: 'blue'}} positions={currentRoute}/>
                </>
                : ''}
        </>
    )
};

export default Route;
