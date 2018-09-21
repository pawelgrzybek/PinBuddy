const initialState = [];

const reducerPosts = (state = initialState, action) => {
  if (action.type === 'POSTS_GET') {
    return action.posts;
  }

  return state;
};

export default reducerPosts;
