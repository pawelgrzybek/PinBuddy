const API = 'https://api.pinboard.in/v1/';

export const userLoadingShowAction = () => ({
  type: 'LOADING_SHOW',
});

export const userLoadingHideAction = () => ({
  type: 'LOADING_HIDE',
});

export const userErrorShowAction = () => ({
  type: 'ERROR_SHOW',
});

export const userErrorHideAction = () => ({
  type: 'ERROR_HIDE',
});

export const userLogInAction = userToken => {
  return dispatch => {

    dispatch(userLoadingShowAction());
    dispatch(userErrorHideAction());

    fetch(`${API}user/api_token?format=json&auth_token=${userToken}`)
      .then(dataAuth => dataAuth.json())
      .then(() => {

        const [username, token] = userToken.split(':');
        chrome.storage.local.set(
          {
            username,
            token,
          },
          () => {
            dispatch(userLoadingHideAction());
            dispatch({
              type: 'ADD_USERNAME',
              username
            });
          }
        );

        const now = Date.now();

        fetch(`${API}posts/all?format=json&auth_token=${userToken}`)
          .then(dataPosts => dataPosts.json())
          .then(posts => {
            chrome.storage.local.set(
              {
                posts,
                postsFetched: now,
              }
            );
          });

        fetch(`${API}tags/get?format=json&auth_token=${userToken}`)
          .then(dataTags => dataTags.json())
          .then(tags => {
            const listOfTags = Object.keys(tags);

            chrome.storage.local.set(
              {
                tags: listOfTags,
                tagsFetched: now,
              }
            );
          });

      })
      .catch(() => {
        dispatch(userLoadingHideAction());
        dispatch(userErrorShowAction());
      });
  };
};

export const userFetchFromChromeStorageAction = () => {
  return dispatch => {
    chrome.storage.local.get(['username'], username => {
      if (username.username) {
        dispatch({
          type: 'GET_USERNAME',
          username,
        });
      }
    });
  };
};

export const userLogOutAction = () => {
  return dispatch => {
    chrome.storage.local.clear(() => dispatch({ type: 'LOG_OUT' }));
  };
};
