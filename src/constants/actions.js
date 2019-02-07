import { getAddressByRegion } from '../util/geocoder';
import {CHANGE_ORIGIN_VALUE, CHANGE_EDIT_LOCATION, CHANGE_DESTINATION_VALUE, UPDATE_REGION} from 'constants/actionTypes';

export const changeOriginValue = (text) => {
    return {
        type: CHANGE_ORIGIN_VALUE,
        text
    }
}

export const changeDestinationValue = (text) => {
    return {
        type: CHANGE_DESTINATION_VALUE,
        text
    }
}

export const getOriginAddressValue = (region) => dispatch => {
    getAddressByRegion(region)
        .then(json => {
            let longNameAddress = json.results[0].formatted_address;
            dispatch(changeOriginValue(longNameAddress));
        })
        .catch(error => { dispatch(changeOriginValue("No Address found")) });
}

export const getDestinationAddressValue = (region) => dispatch => {
    getAddressByRegion(region)
        .then(json => {
            let longNameAddress = json.results[0].formatted_address;
            dispatch(changeDestinationValue(longNameAddress));
        })
        .catch(error => { dispatch(changeOriginValue("No Address found")) });
}

export const updateRegion = (region) => {
    return {
        type: UPDATE_REGION,
        region
    }
}

export const originLocationDone = (isDone) => {
    return {
        type: CHANGE_EDIT_LOCATION,
        locationType: "origin",
        isDone
    }
}

export const destinationLocationDone = (isDone) => {
    return {
        type: CHANGE_EDIT_LOCATION,
        locationType: "destination",
        isDone
    }
}

