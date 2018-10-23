export const getUserInfo = () => {
  return dispatch => {
    chrome.storage.local.get(["username", "token"], userInfo => {
      if (userInfo.username && userInfo.token) {
        dispatch({
          type: "GET_USER_INFO",
          userInfo: userInfo
        });
      }
    });
  };
};
