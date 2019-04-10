import React from "react";
import axios from "axios";

const GATSBY_DRIBBBLE_TOKEN = process.env.GATSBY_DRIBBBLE_TOKEN;

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT": {
      return {
        ...state,
      };
    }
    case "FETCH_SUCCESS": {
      return {
        ...state,
        isLoading: false,
        isLoadingMore: false,
        dribbblePosts: [...state.dribbblePosts, ...action.payload],
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
      return state;
  }
};

function useDribbbleReducer() {
  const initialState = {
    dribbblePage: 1,
    shotsPerPage: 4,
    dribbblePosts: [],
    isLoading: true,
    isLoadingMore: false,
    isError: false,
  };

  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    let dribbbleRes = {};
    let source = axios.CancelToken.source();

    dispatch({ type: "FETCH_INIT" });

    const fetchData = async () => {
      try {
        dribbbleRes = await axios.get(
          `https://api.dribbble.com/v2/user/shots?access_token=${GATSBY_DRIBBBLE_TOKEN}&page=${
            state.dribbblePage
          }&per_page=${state.shotsPerPage}`,
          {
            cancelToken: source.token,
          },
        );

        dispatch({ type: "FETCH_SUCCESS", payload: dribbbleRes.data });
      } catch (error) {
        if (axios.isCancel(error)) {
          console.warn("Cancelled axios request");
        } else {
          console.warn(error);
          dispatch({ type: "FETCH_ERROR" });
        }
      }
    };

    fetchData();

    return () => {
      // Prevent memory leak when moving to another page and cancel axios request
      source.cancel();
    };
  }, [state.dribbblePage, state.shotsPerPage]);

  function loadMorePosts() {
    // Load posts with pagination, shotsPerPage on each page
    dispatch({ type: "FETCH_MORE" });
  }

  return { ...state, loadMorePosts };
}

export default useDribbbleReducer;
