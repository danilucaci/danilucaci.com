import { useReducer } from "react";
import { useLoggingThunkReducer } from ".";

import dribbblePostsReducer from "../reducers/dribbble-posts/dribbble-posts-reducer";
import dribbblePostsTypes from "../reducers/dribbble-posts/dribbble-posts-types";
import dribbblePostsInitialState from "../reducers/dribbble-posts/dribbble-posts-initial-state";

import {
  fetchInitialPosts,
  fetchMore,
  setListEnd,
} from "../reducers/dribbble-posts/dribbble-posts-actions";

const actions = {
  fetchInitialPosts: fetchInitialPosts,
  fetchMore: fetchMore,
  setListEnd: setListEnd,
};

function useDribbblePostsReducer() {
  const [state, dispatch] = useLoggingThunkReducer(
    useReducer(dribbblePostsReducer, dribbblePostsInitialState),
  );

  return [state, dispatch, actions, dribbblePostsTypes];
}

export default useDribbblePostsReducer;
