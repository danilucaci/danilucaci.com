import { useDribbblePostsReducer } from ".";

function useDribbblePosts() {
  const [state, dispatch, actions, types] = useDribbblePostsReducer();

  return [state, dispatch, actions, types];
}

export default useDribbblePosts;
