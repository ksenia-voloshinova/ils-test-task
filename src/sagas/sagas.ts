
import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
    fetchPolylinesSuccess,
    fetchPolylinesFailure,
    GET_POLYLINE,
} from '../reducers/mapSlice';

const OSRM_API_URL = 'http://router.project-osrm.org';

function fetchPolylinesFromApi(route: any[][]) {
    const coordinates = route.map((coords: any[]) => `${coords[0]},${coords[1]}`).join(';');
    return axios.get(`${OSRM_API_URL}/route/v1/driving/${coordinates}?geometries=polyline&steps=true`).then((resp) => {
        return resp.data;
    });
}
export function* fetchPolylines(action: { payload: { route: any; }; }) {
    try {
        // @ts-ignore
        const payload = yield call(fetchPolylinesFromApi, action.payload.route);
        console.log(payload);
        yield put(fetchPolylinesSuccess(payload));
    } catch (error) {
        // @ts-ignore
        yield put(fetchPolylinesFailure(error.toString()));
    }
}


export default function* rootSaga() {
    // @ts-ignore
    yield takeLatest(GET_POLYLINE, fetchPolylines);
}
