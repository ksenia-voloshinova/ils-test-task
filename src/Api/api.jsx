import axios from "axios";
export default function fetchRoutesFromApi(route) {

    const coordinates =Object.values(route)
        .filter(value => typeof value === 'object')
        .map(point => `${point.lng},${point?.lat}`)
        .join(';');

    return axios.get(`http://router.project-osrm.org/route/v1/driving/${coordinates}?overview=full&geometries=geojson`).then((resp) => {
        return resp.data;
    });
}
