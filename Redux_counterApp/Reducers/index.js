import { combineReducers } from 'redux';
import counterReducers from '../Reducers/CounterReducer';

const allReducers = combineReducers({
    counterReducers,
});
export default allReducers;