import { combineReducers } from 'redux';
import auth from './auth';
import online from './online';
import options from './options';

export default combineReducers({
  auth,
  online,
  options,
});
