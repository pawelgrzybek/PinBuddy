const initialState = {
  username: '',
  token: '',
};

const reducerAuth = (state = initialState, action) => {
  if (action.type === 'ADD_TOKEN') {
    const [username, token] = action.token.split(':');
    return {
      ...state,
      username,
      token,
    };
  }

  else if (action.type === 'UPDATE_USER_INFO') {
    return {
      ...state,
      ...action.userInfo,
    };
  }

  else if (action.type === 'LOG_OUT') {
    return initialState;
  }

  return state;
};

export default reducerAuth;
