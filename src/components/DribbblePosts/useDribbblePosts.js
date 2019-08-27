import { useEffect, useReducer } from "react";
import axios from "axios";
import * as Sentry from "@sentry/browser";

import dribbblePostsReducer from "./dribbblePostsReducer";

const GATSBY_DRIBBBLE_TOKEN = process.env.GATSBY_DRIBBBLE_TOKEN;

function useDribbblePosts() {
  const initialState = {
    dribbblePage: 1,
    shotsPerPage: 6,
    dribbblePosts: [],
    isLoading: true,
    isLoadingMore: false,
    isError: false,
    inView: false,
  };

  const [state, dispatch] = useReducer(dribbblePostsReducer, initialState);

  useEffect(() => {
    let source = axios.CancelToken.source();

    if (state.inView) {
      const fetchData = async () => {
        try {
          const dribbbleRes = await axios.get(
            `https://api.dribbble.com/v2/user/shots?access_token=${GATSBY_DRIBBBLE_TOKEN}&page=${state.dribbblePage}&per_page=${state.shotsPerPage}`,
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

  return [state, dispatch];
}

export default useDribbblePosts;
