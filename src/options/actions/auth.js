export const authenticateUser = token => {
  return {
    type: 'ADD_TOKEN',
    token,
  };
};

export const updateUserInfo = userInfo => {
  return {
    type: 'UPDATE_USER_INFO',
    userInfo,
  };
};

export const logOut = () => {
  return {
    type: 'LOG_OUT',
  };
};
