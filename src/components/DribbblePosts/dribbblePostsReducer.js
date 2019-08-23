const dribbblePostsReducer = (state, { type, payload }) => {
  switch (type) {
    case "FETCH_INIT": {
      return {
        ...state,
        inView: true,
      };
    }
    case "FETCH_SUCCESS": {
      return {
        ...state,
        isLoading: false,
        isLoadingMore: false,
        dribbblePosts: [...state.dribbblePosts, ...payload],
      };
    }
    case "FETCH_MORE": {
      return {
        ...state,
        isLoadingMore: true,
        dribbblePage: state.dribbblePage + 1,
      };
    }
    case "FETCH_ERROR": {
      return {
        ...state,
        isLoading: false,
        isLoadingMore: false,
        isError: true,
      };
    }
    default:
      throw new Error(`Unhandled action type received: ${type}`);
  }
};

export default dribbblePostsReducer;
