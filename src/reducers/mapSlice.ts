import {createAction, createSlice} from '@reduxjs/toolkit';

const initialState =  {
    polylines: [],
    error: null,
}

const mapSlice = createSlice({
    name: 'map',
    initialState,
    reducers: {
        fetchPolylinesSuccess(state, action) {
            state.polylines = action.payload;
        },
        fetchPolylinesFailure(state, action) {
            state.error = action.payload;
        },
    },
});

export const {
    fetchPolylinesSuccess,
    fetchPolylinesFailure,
} = mapSlice.actions;

export const GET_POLYLINE = 'polyline/getPolyline';
export const getPolyline = createAction(GET_POLYLINE)


export default mapSlice.reducer;
