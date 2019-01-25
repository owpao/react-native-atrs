
import { CHANGE_ORIGIN_VALUE } from '../map/mapActions';

const initialState = {
    route: {
        origin: "",
        destination: ""
    },
    region: {
        latitude: 14.5248595,
        longitude: 121.0001437,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    },title:"ATRS",
    isFetching: false
}

export default (state = initialState, action) => {
    if (action.type === CHANGE_ORIGIN_VALUE) {
        console.log("pasok", action.text);
        return { ...state, route: { origin: action.text } }
        // Object.assign({}, state, { route: { origin: action.text } })
        // console.log(state);
        // return state;
    }
    else return state;
}