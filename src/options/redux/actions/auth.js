const API = 'https://api.pinboard.in/v1/';

export const loadingShow = () => {
  return {
    type: 'LOADING_SHOW',
  };
};

export const loadingHide = () => {
  return {
    type: 'LOADING_HIDE',
  };
};

export const errorShow = () => {
  return {
    type: 'ERROR_SHOW',
  };
};

export const errorHide = () => {
  return {
    type: 'ERROR_HIDE',
  };
};

export const authLogIn = userToken => {
  return dispatch => {
    dispatch(loadingShow());
    dispatch(errorHide());
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
            dispatch(loadingHide());
            dispatch({
              type: 'ADD_USERNAME',
              username
            });
          }
        );

        chrome.storage.sync.set({
          defaultView: 'all',
          privateCheckboxByDefault: false,
          toReadChecboxByDefault: false,
        });

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

        chrome.storage.sync.set({
          defaultView: 'all',
          privateCheckboxByDefault: false,
          toReadChecboxByDefault: false,
        });

      })
      .catch(() => {
        dispatch(loadingHide());
        dispatch(errorShow());
      });
  };
};

export const updateUsername = () => {
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

export const logOut = () => {
  return dispatch => {
    chrome.storage.local.clear(() => dispatch({ type: 'LOG_OUT' }));
  };
};
