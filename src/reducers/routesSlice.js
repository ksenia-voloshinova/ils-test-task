import {createAction, createSlice} from '@reduxjs/toolkit';
import dataRoutes from "./dataRoutes";

const initialState =  {
    currentRoute: [],
    dataRoutes: dataRoutes ,
    activeRoute: dataRoutes[0]
}

const routesSlice = createSlice({
    name: 'routes',
    initialState,
    reducers: {
        fetchCurrentRoute(state, action) {
            state.currentRoute = action.payload.routes[0].geometry.coordinates.map((coordinate)=>[coordinate[1],coordinate[0]])
        },
        selectRoute: (state, action) => {
            state.activeRoute = dataRoutes[action.payload];
        },
    },
});

export const {
    fetchCurrentRoute,selectRoute
} = routesSlice.actions;

export const GET_POLYLINE = 'polyline/getPolyline';
export const getPolyline = createAction(GET_POLYLINE)


export default routesSlice.reducer;
