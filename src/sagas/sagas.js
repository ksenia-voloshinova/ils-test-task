import { call, put, takeLatest } from 'redux-saga/effects';
import {fetchCurrentRoute,GET_POLYLINE} from '../reducers/routesSlice';
import fetchRoutesFromApi from "../Api/api";

export function* fetchRoutes(action) {
    try {
        const payload = yield call(fetchRoutesFromApi, action.payload.route);
        yield put(fetchCurrentRoute(payload));
    } catch (error) {
        yield put({ type: "ROUTE_FETCH_FAILED" })
    }
}

export default function* rootSaga()  {
    yield takeLatest(GET_POLYLINE, fetchRoutes);
}
