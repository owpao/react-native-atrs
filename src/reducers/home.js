import * as actionTypes from '../actions/types';
import { getOriginAddress } from '../actions/HomeActions';

export default (state = {origin: "", destination: ""}, action) => {
    if (action.type === actionTypes.CHANGE_PICKUP) {//async request for geocoding
        getOriginAddress(action.region)
            .then(json => {
                longNameAddress = json.results[0].address_components[0].long_name;
                console.log(longNameAddress);
                return (state = {origin: longNameAddress})
            })
            .catch(error => console.warn(error));
    } else {
        return state;
    }
}