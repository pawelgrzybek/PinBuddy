const initialState = {
  username: '',
  token: '',
};

const reducerAuth = (state = initialState, action) => {
  if (action.type === 'GET_USER_INFO') {
    return {
      ...state,
      ...action.userInfo,
    };
  }

  return state;
};

export default reducerAuth;
