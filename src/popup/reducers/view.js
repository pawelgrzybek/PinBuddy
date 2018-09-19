const reducerView = (state = 'all', action) => {
  if (action.type === 'UPDATE_VEEW') {
    return action.location;
  }

  return state;
};

export default reducerView;
