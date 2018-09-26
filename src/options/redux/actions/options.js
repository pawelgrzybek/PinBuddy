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
    ], option => {
      const settingsExist =
        Object.prototype.hasOwnProperty.call(option, 'defaultView') &&
        Object.prototype.hasOwnProperty.call(option, 'privateCheckboxByDefault') &&
        Object.prototype.hasOwnProperty.call(option, 'toReadChecboxByDefault');

      if (settingsExist) {
        dispatch({
          type: 'UPDATE_OPTION',
          option,
        });
      }
      else {
        chrome.storage.sync.set({
          defaultView: 'all',
          privateCheckboxByDefault: false,
          toReadChecboxByDefault: false,
        });
      }
    });
  };
};
