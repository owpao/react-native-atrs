import { combineReducers } from 'redux';
import home from './home';
const allReducers = combineReducers({
    home: home
});
export default allReducers;