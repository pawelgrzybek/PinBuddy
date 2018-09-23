export const optionsUpdateAction = option => {
  return dispatch => {
    chrome.storage.sync.set(option, () => {
      dispatch({
        type: 'UPDATE_OPTION',
        option,
      });
    });
  };
};

export const fetchOptionsAction = () => {
  return dispatch => {
    chrome.storage.sync.get([
      'defaultView',
      'privateCheckboxByDefault',
      'toReadChecboxByDefault',
      'useDescriptionMetaTag'
    ], option => {
      dispatch({
        type: 'UPDATE_OPTION',
        option,
      });
    });
  };
};
