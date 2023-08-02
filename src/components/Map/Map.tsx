import "./index.scss";
import "leaflet/dist/leaflet.css";
import {MapContainer, TileLayer, Marker} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import {useDispatch, useSelector} from "react-redux";
import { Polyline } from "react-leaflet";


import L, { Icon, divIcon, point } from "leaflet";
import {selectActiveRouteIndex, selectMarkers, selectRoute} from "../../selectors/selectors";
import {getPolyline} from "../../reducers/mapSlice";
import {useEffect} from "react";
import React from "react";


const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
    iconSize: [38, 38]
});

const createClusterCustomIcon = function (cluster: { getChildCount: () => any; }) {
    // @ts-ignore
    return new divIcon({
        html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
        className: "custom-marker-cluster",
        iconSize: point(33, 33, true)
    });
};


export default function Map() {
    const dispatch = useDispatch();
    const { routesList } = useSelector(selectMarkers);
    const { activeRouteIndex } = useSelector(selectActiveRouteIndex);
    const { polylines } = useSelector(selectRoute);
    const activeRoute = routesList[activeRouteIndex];

    useEffect(() => {
        // @ts-ignore
        dispatch(getPolyline({route: activeRoute}));
    }, [dispatch, activeRoute]);

    // @ts-ignore
    // @ts-ignore
    return (
        // @ts-ignore
        <MapContainer center={routesList[activeRouteIndex]?.[0]} zoom={13}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MarkerClusterGroup
                chunkedLoading
                iconCreateFunction={createClusterCustomIcon}
            >
                {activeRoute.map((marker) => (
                    // @ts-ignore
                    <Marker position={marker} icon={customIcon}/>
                ))}

            </MarkerClusterGroup>

            {// @ts-ignore
                polylines && polylines.routes && polylines.routes.map((route, index) => (

                    <Polyline
                        key={index}
                        // @ts-ignore
                        positions={
                            // route.geometry ? L.polyline?.fromEncoded(route.geometry)?.getLatLngs() :
                            [
                                [
                                    59.983762,
                                    30.311365
                                ],
                                [
                                    59.98442,
                                    30.311414
                                ],
                                [
                                    59.985265,
                                    30.311652
                                ],
                                [
                                    59.987213,
                                    30.312293
                                ],
                                [
                                    59.989142,
                                    30.313087
                                ],
                                [
                                    59.98923,
                                    30.313126
                                ],
                                [
                                    59.989795,
                                    30.313637
                                ],
                                [
                                    59.99084,
                                    30.314556
                                ],
                                [
                                    59.991066,
                                    30.315007
                                ],
                                [
                                    59.991367,
                                    30.315806
                                ],
                                [
                                    59.992152,
                                    30.316113
                                ],
                                [
                                    59.992552,
                                    30.316285
                                ],
                                [
                                    59.992838,
                                    30.316457
                                ],
                                [
                                    59.993031,
                                    30.316547
                                ],
                                [
                                    59.993443,
                                    30.316521
                                ],
                                [
                                    59.993924,
                                    30.316646
                                ],
                                [
                                    59.994601,
                                    30.317021
                                ],
                                [
                                    59.99487,
                                    30.317263
                                ],
                                [
                                    59.994899,
                                    30.317467
                                ],
                                [
                                    59.995037,
                                    30.317626
                                ],
                                [
                                    59.995012,
                                    30.317727
                                ],
                                [
                                    59.994342,
                                    30.318571
                                ],
                                [
                                    59.993807,
                                    30.318996
                                ],
                                [
                                    59.993707,
                                    30.319129
                                ],
                                [
                                    59.993653,
                                    30.319321
                                ],
                                [
                                    59.993613,
                                    30.319465
                                ],
                                [
                                    59.993581,
                                    30.319617
                                ],
                                [
                                    59.993491,
                                    30.31987
                                ],
                                [
                                    59.993363,
                                    30.32017
                                ],
                                [
                                    59.993305,
                                    30.320336
                                ],
                                [
                                    59.993229,
                                    30.320559
                                ],
                                [
                                    59.993047,
                                    30.321298
                                ],
                                [
                                    59.992982,
                                    30.321755
                                ],
                                [
                                    59.992991,
                                    30.322329
                                ],
                                [
                                    59.992998,
                                    30.322481
                                ],
                                [
                                    59.993055,
                                    30.322585
                                ],
                                [
                                    59.993154,
                                    30.322694
                                ],
                                [
                                    59.99337,
                                    30.322795
                                ],
                                [
                                    59.993625,
                                    30.322888
                                ],
                                [
                                    59.993807,
                                    30.323088
                                ],
                                [
                                    59.993823,
                                    30.323165
                                ],
                                [
                                    59.993792,
                                    30.323303
                                ],
                                [
                                    59.993736,
                                    30.323402
                                ],
                                [
                                    59.99357,
                                    30.323673
                                ],
                                [
                                    59.993613,
                                    30.324625
                                ],
                                [
                                    59.993619,
                                    30.325298
                                ],
                                [
                                    59.993903,
                                    30.326077
                                ],
                                [
                                    59.993847,
                                    30.326258
                                ],
                                [
                                    59.993736,
                                    30.326351
                                ],
                                [
                                    59.993545,
                                    30.326399
                                ],
                                [
                                    59.992719,
                                    30.32637
                                ],
                                [
                                    59.992504,
                                    30.326383
                                ],
                                [
                                    59.992328,
                                    30.326465
                                ],
                                [
                                    59.992113,
                                    30.326671
                                ],
                                [
                                    59.991916,
                                    30.327423
                                ],
                                [
                                    59.991732,
                                    30.3292
                                ],
                                [
                                    59.991701,
                                    30.330208
                                ],
                                [
                                    59.99124,
                                    30.331154
                                ],
                                [
                                    59.991097,
                                    30.331773
                                ],
                                [
                                    59.991342,
                                    30.333736
                                ],
                                [
                                    59.991476,
                                    30.334903
                                ],
                                [
                                    59.991383,
                                    30.335611
                                ],
                                [
                                    59.990134,
                                    30.337211
                                ],
                                [
                                    59.98998,
                                    30.33859
                                ],
                                [
                                    59.989877,
                                    30.339271
                                ],
                                [
                                    59.989457,
                                    30.33966
                                ],
                                [
                                    59.988792,
                                    30.340421
                                ],
                                [
                                    59.987818,
                                    30.341702
                                ],
                                [
                                    59.986528,
                                    30.343135
                                ],
                                [
                                    59.986435,
                                    30.344213
                                ],
                                [
                                    59.986036,
                                    30.345124
                                ],
                                [
                                    59.984981,
                                    30.345867
                                ],
                                [
                                    59.984981,
                                    30.345867
                                ]
                            ]}
                    />
                ))}
        </MapContainer>
    );
};
