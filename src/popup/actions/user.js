export const getUserInfo = userInfo => {
  return {
    type: 'GET_USER_INFO',
    userInfo,
  };
};
