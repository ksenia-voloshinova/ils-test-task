import { createSlice } from "@reduxjs/toolkit";

const initialState  = {
    routesList: [
        [
            [59.84660399, 30.29496392],
            [59.82934196, 30.42423701],
            [59.83567701, 30.38064206],
        ],
        [
            [59.82934196, 30.42423701],
            [59.82761295, 30.41705607],
            [59.84660399, 30.29496392],
        ],
        [
            [59.83567701, 30.38064206],
            [59.84660399, 30.29496392],
            [59.82761295, 30.41705607],
        ]
    ],
    activeRouteIndex: 0

};

const markersSlice = createSlice({
    name: "markers",
    initialState,
    reducers: {
        selectRoute: (state, action) => {
            state.activeRouteIndex = action.payload;
        },
    },
});
export const { selectRoute } = markersSlice.actions;
export default markersSlice.reducer;
