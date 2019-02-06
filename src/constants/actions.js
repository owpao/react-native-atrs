import { getOriginAddressByRegion } from '../util/geocoder';

export const changeOriginValue = (text) => {
    return {
        type: "CHANGE_ORIGIN_VALUE",
        text
    }
}

export const getOriginAddressValue = (region) => dispatch => {
    getOriginAddressByRegion(region)
        .then(json => {
            let longNameAddress = json.results[0].formatted_address;
            dispatch(changeOriginValue(longNameAddress));
        })
        .catch(error => { console.error(error); });
}

export const updateRegion = (region) => {
    return {
        type: "UPDATE_REGION",
        region
    }
}

