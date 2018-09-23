export const authenticateUser = token => {
  return {
    type: 'ADD_TOKEN',
    token,
  };
};

export const updateUsername = userInfo => {
  return dispatch => {
    chrome.storage.local.get(['username'], username => {
      if (username.username) {
        dispatch({
          type: 'UPDATE_USER_INFO',
          username,
        });
      }
    });
  };
};

export const logOut = () => {
  return {
    type: 'LOG_OUT',
  };
};
