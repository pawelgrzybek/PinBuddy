const reducerOffline = (state = true, action) => {
  if (action.type === "CHECK_ONLINE") {
    return action.online;
  } else if (action.type === "WENT_ONLINE") {
    return true;
  } else if (action.type === "WENT_OFFLINE") {
    return false;
  }

  return state;
};

export default reducerOffline;
