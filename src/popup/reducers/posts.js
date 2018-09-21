const initialState = [];

const reducerPosts = (state = initialState, action) => {
  if (action.type === 'GET_POSTS') {
    return action.posts;
  }

  return state;
};

export default reducerPosts;
