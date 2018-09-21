import { combineReducers } from 'redux';
import user from './user';
import online from './online';
import view from './view';
import posts from './posts';

export default combineReducers({
  user,
  online,
  view,
  posts,
});
