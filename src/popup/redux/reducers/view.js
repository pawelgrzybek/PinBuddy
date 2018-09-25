const reducerView = (state = 'all', action) => {
  if (action.type === 'UPDATE_VIEW') {
    return action.location;
  }

  return state;
};

export default reducerView;
