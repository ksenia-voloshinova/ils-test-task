import "./index.scss";
import "leaflet/dist/leaflet.css";
import {MapContainer, TileLayer} from "react-leaflet";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import Route from "../Route/Route";
import {fetchDataRoutes} from "../../selectors/selectors";
import {getPolyline} from "../../reducers/routesSlice";


export default function Map() {
    const { activeRoute } = useSelector(fetchDataRoutes);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPolyline({route: activeRoute}));
    }, [dispatch, activeRoute]);

    return (
        <>
            <MapContainer>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Route/>
            </MapContainer>

        </>
    );
};
