import { combineReducers } from 'redux';
import auth from './auth';
import online from './online';

export default combineReducers({
  auth,
  online,
});
