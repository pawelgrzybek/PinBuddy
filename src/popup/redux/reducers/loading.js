const reducerLoading = (state = false, action) => {
  if (action.type === "LOADING_SHOW") {
    return true;
  }

  if (action.type === "LOADING_HIDE") {
    return false;
  }

  return state;
};

export default reducerLoading;
