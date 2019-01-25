import { combineReducers } from 'redux';
import map from '../components/map/mapReducer';
import home from '../components/home/homeReducer'
const allReducers = combineReducers({
    map: map,
    home: home
});

export default allReducers;