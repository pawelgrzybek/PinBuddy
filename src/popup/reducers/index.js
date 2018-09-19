import { combineReducers } from 'redux';
import user from './user';
import online from './online';
import view from './view';

export default combineReducers({
  user,
  online,
  view,
});
