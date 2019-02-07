
import { CHANGE_ORIGIN_VALUE, UPDATE_REGION, CHANGE_DESTINATION_VALUE, CHANGE_EDIT_LOCATION } from 'constants/actionTypes';

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
    }, title: "ATRS",
    originLocationDone: false,
    destinationLocationDone: false,
    isFetching: false
}

export default (state = initialState, action) => {
    if (action.type === CHANGE_ORIGIN_VALUE) {
        return {
            ...state,
            route: {
                origin: action.text, destination:state.route.destination
            }
        }
    }
    else if (action.type === UPDATE_REGION) {
        return { ...state, region: action.region }
    }
    else if (action.type === CHANGE_DESTINATION_VALUE) {
        return {
            ...state,
            route: {
                destination: action.text, origin:state.route.origin
            }
        }
    }
    else if (action.type === CHANGE_EDIT_LOCATION) {
        if (action.locationType === "origin") {
            return { ...state, originLocationDone: action.isDone }
        }
        else {
            return { ...state, destinationLocationDone: action.isDone }
        }
    }
    else return state;
}