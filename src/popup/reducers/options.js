const initialState = {
  privateCheckboxByDefault: false,
  toReadChecboxByDefault: false,
  useDescriptionMetaTag: false,
};

const reducerOptions = (state = initialState, action) => {
  if (action.type === 'UPDATE_USER_OPTIONS') {
    return {
      ...state,
      ...action.options,
    };
  }

  return state;
};

export default reducerOptions;
