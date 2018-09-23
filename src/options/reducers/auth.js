const initialState = {
  username: '',
  loading: false,
  error: false,
};

const reducerAuth = (state = initialState, action) => {
  if (action.type === 'ADD_USERNAME') {
    return {
      ...state,
      username: action.username,
    };
  }

  else if (action.type === 'GET_USERNAME') {
    return {
      ...state,
      ...action.username,
    };
  }

  else if (action.type === 'LOADING_SHOW') {
    return {
      ...state,
      loading: true,
    };
  }

  else if (action.type === 'LOADING_HIDE') {
    return {
      ...state,
      loading: false,
    };
  }

  else if (action.type === 'ERROR_SHOW') {
    return {
      ...state,
      error: true,
    };
  }

  else if (action.type === 'ERROR_HIDE') {
    return {
      ...state,
      error: false,
    };
  }

  else if (action.type === 'LOG_OUT') {
    return initialState;
  }

  return state;
};

export default reducerAuth;
