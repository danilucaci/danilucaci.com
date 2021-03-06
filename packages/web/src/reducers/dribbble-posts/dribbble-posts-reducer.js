import dribbblePostsTypes from "./dribbble-posts-types";

const dribbblePostsReducer = (state, { type, payload }) => {
  switch (type) {
    case dribbblePostsTypes.FETCH_INIT: {
      return {
        ...state,
      };
    }
    case dribbblePostsTypes.INITIAL_FETCH_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        initialFetchDone: true,
        dribbblePosts: [...state.dribbblePosts, ...payload],
      };
    }
    case dribbblePostsTypes.FETCH_MORE: {
      return {
        ...state,
        isLoadingMore: true,
        dribbblePage: payload,
      };
    }
    case dribbblePostsTypes.FETCH_MORE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isLoadingMore: false,
        dribbblePosts: [...state.dribbblePosts, ...payload],
      };
    }
    case dribbblePostsTypes.LIST_END: {
      return {
        ...state,
        listEnd: true,
      };
    }
    case dribbblePostsTypes.FETCH_ERROR: {
      return {
        ...state,
        isLoading: false,
        isLoadingMore: false,
        isError: true,
      };
    }
    default: {
      return state;
    }
  }
};

export default dribbblePostsReducer;
