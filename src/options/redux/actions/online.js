export const checkConnection = online => {
  return {
    type: "CHECK_ONLINE",
    online
  };
};

export const wentOnline = () => {
  return {
    type: "WENT_ONLINE"
  };
};

export const wentOffline = () => {
  return {
    type: "WENT_OFFLINE"
  };
};
