export const updateView = location => {
  return {
    type: 'UPDATE_VIEW',
    location,
  };
};

export const getInitialView = () => {
  return dispatch => {
    chrome.storage.sync.get(['defaultView'], result => {
      if (result.defaultView) {
        dispatch(updateView(result.defaultView));
      }
    });
  };
};
