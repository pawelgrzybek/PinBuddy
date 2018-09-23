import { loadingShowAction, loadingHideAction } from './loading';
import { errorShowAction } from './error';

export const postsGet = () => {
  return (dispatch, getState) => {
    dispatch(loadingShowAction());

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
              () => {
                dispatch({
                  type: 'POSTS_GET',
                  posts: newPosts,
                });
              });
          })
          .catch(() => {
            dispatch(errorShowAction());
          })
          .finally(() => {
            dispatch(loadingHideAction());
          });
      }
      else {
        dispatch(loadingHideAction());
        dispatch({
          type: 'POSTS_GET',
          posts,
        });
      }
    });
  };
};

export const postsDelete = href => {
  return (dispatch, getState) => {
    const { username, token } = getState().user;
    const { posts } = getState();

    const newState = posts.filter(post => {
      return post.href !== href;
    });

    fetch(`https://api.pinboard.in/v1/posts/delete?format=json&url=${href}&auth_token=${username}:${token}`)
      .then(() => chrome.storage.local.set({ posts: newState }))
      .catch(() => {
        dispatch(errorShowAction());
      });

    dispatch({
      type: 'POSTS_DELETE',
      href
    });
  };
};
