export const getPosts = ownProps => {
  return (dispatch, getState) => {
    const { username, token } = getState().user;

    chrome.storage.local.get(['posts', 'postsFetched'], result => {
      const { posts, postsFetched } = result;
      const now = Date.now();
      const outdatedPosts = now - postsFetched > 3600000;

      if (outdatedPosts) {
        fetch(`https://api.pinboard.in/v1/posts/all?format=json&auth_token=${username}:${token}`)
          .then(newPostsData => newPostsData.json())
          .then(newPosts => {
            chrome.storage.local.set(
              {
                posts: newPosts,
                postsFetched: now,
              },
              () => dispatch({
                type: 'GET_POSTS',
                posts: newPosts,
              })
            );
          });
      }
      else {
        dispatch({
          type: 'GET_POSTS',
          posts,
        });
      }
    });
  };
};

