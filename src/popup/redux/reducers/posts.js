const initialState = [];

const reducerPosts = (state = initialState, action) => {
  if (action.type === "POSTS_GET") {
    return action.posts;
  }

  if (action.type === "POSTS_DELETE") {
    const newState = state.filter(post => {
      return post.href !== action.href;
    });
    return newState;
  }

  return state;
};

export default reducerPosts;
