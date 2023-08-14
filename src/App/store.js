import {  configureStore } from "@reduxjs/toolkit";
import routesSlice from "../reducers/routesSlice";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "../sagas/sagas";
const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        routes: routesSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({thunk:false}).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga)
export default store;
