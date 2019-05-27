import React from "react";
import axios from "axios";
import * as Sentry from "@sentry/browser";

import PropTypes from "prop-types";

export const DribbblePostsContext = React.createContext();

const GATSBY_DRIBBBLE_TOKEN = process.env.GATSBY_DRIBBBLE_TOKEN;

const reducer = (state, action) => {
  switch (action.type) {
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
      throw new Error(`Unhandled action type received: ${action.type}`);
  }
};

function DribbblePostsProvider(props) {
  const initialState = {
    dribbblePage: 1,
    shotsPerPage: 4,
    dribbblePosts: [],
    isLoading: true,
    isLoadingMore: false,
    isError: false,
    inView: false,
  };

  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    let source = axios.CancelToken.source();

    if (state.inView) {
      const fetchData = async () => {
        try {
          const dribbbleRes = await axios.get(
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
            Sentry.captureException(error);
            dispatch({ type: "FETCH_ERROR" });
          }
        }
      };

      fetchData();
    }

    return () => {
      // Prevent memory leak when moving to another page and cancel axios request
      source.cancel();
    };
  }, [state.dribbblePage, state.inView, state.shotsPerPage]);

  return (
    <DribbblePostsContext.Provider value={{ state, dispatch }}>
      {props.children}
    </DribbblePostsContext.Provider>
  );
}

DribbblePostsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DribbblePostsProvider;