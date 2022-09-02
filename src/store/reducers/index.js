// third-party
import { combineReducers } from 'redux';

// project import
import menu from './menu';
import warehousesReducer from './warehouses';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({ menu, warehouses: warehousesReducer });

export default reducers;
