import { combineReducers } from 'redux';
import user from './user';
import online from './online';
import options from './options';

export default combineReducers({
  user,
  online,
  options,
});
