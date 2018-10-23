const reducerError = (state = false, action) => {
  if (action.type === "ERROR_SHOW") {
    return true;
  }

  if (action.type === "ERROR_HIDE") {
    return false;
  }

  return state;
};

export default reducerError;
