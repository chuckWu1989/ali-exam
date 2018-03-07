import { combineReducers } from 'redux-immutable';
import StoreReducer from './storeReducer';
import { SSTORE } from '../constants/Config';

export default combineReducers({
  [SSTORE]: StoreReducer,
});
