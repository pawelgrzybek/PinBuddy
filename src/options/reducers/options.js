const initialState = {
  defaultView: 'all',
  privateCheckboxByDefault: false,
  toReadChecboxByDefault: false,
  useDescriptionMetaTag: false,
};

const reducerOffline = (state = initialState, action) => {
  if (action.type === 'UPDATE_OPTION') {
    return {
      ...state,
      ...action.option,
    };
  }

  return state;
};

export default reducerOffline;
