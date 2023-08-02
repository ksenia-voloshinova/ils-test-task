import {RootState} from "../App/store";

export const selectMarkers = (state:RootState) => state.markers;
export const selectActiveRouteIndex = (state:RootState) => state.markers;
export const selectRoute = (state:RootState) => state.map;

