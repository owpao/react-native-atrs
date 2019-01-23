import * as actionTypes from '../actions/types';
import { getOriginAddress } from '../actions/HomeActions';

export default function home(state = { origin: "", destination: "" }, action) {
    switch (action.type) {
        case actionTypes.CHANGE_PICKUP: {
            //async request for geocoding
            getOriginAddress(action.region)
                .then(json => { 
                    longNameAddress = json.results[0].address_components[0].long_name;
                    console.log(longNameAddress);
                    return (state={origin:longNameAddress})
                })
                .catch(error => console.warn(error));
        }
        default:
            return state;
    }
}