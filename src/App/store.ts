import {  configureStore } from "@reduxjs/toolkit";
import markersSlice from "../reducers/markersSlice";
import mapSlice from "../reducers/mapSlice";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "../sagas/sagas";

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        markers: markersSlice,
        map: mapSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({thunk:false}).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export default store;
