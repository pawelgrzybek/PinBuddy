import { combineReducers } from "redux";
import user from "./user";
import online from "./online";
import view from "./view";
import posts from "./posts";
import loading from "./loading";
import error from "./error";

export default combineReducers({
  user,
  online,
  view,
  posts,
  loading,
  error
});
