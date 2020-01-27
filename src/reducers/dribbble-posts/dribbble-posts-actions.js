import * as Sentry from "@sentry/browser";
import axios from "axios";

import dribbblePostsTypes from "./dribbble-posts-types";

const __DEV__ = process.env.NODE_ENV;
const GATSBY_DRIBBBLE_TOKEN = process.env.GATSBY_DRIBBBLE_TOKEN;
const BASE_URL = `https://api.dribbble.com/v2/user/shots?`;

export function fetchInitialPosts(source) {
  return async function thunk(dispatch, state) {
    const { dribbblePage, shotsPerPage, initialFetchDone } = state || {};

    const URL = BASE_URL + "page=" + dribbblePage + "&per_page=" + shotsPerPage;

    try {
      const posts = await axios({
        method: "get",
        url: URL,
        cancelToken: source && source.token ? source.token : null,
        headers: {
          Authorization: `Bearer ${GATSBY_DRIBBBLE_TOKEN}`,
        },
      });

      if (!initialFetchDone) {
        dispatch({
          type: dribbblePostsTypes.INITIAL_FETCH_SUCCESS,
          payload: posts.data,
        });
      }
    } catch (error) {
      Sentry.captureException(error);

      if (__DEV__ && axios.isCancel(error)) {
        console.warn("Cancelled axios request");
      } else {
        if (__DEV__) {
          console.warn(error);
        }
        dispatch({ type: dribbblePostsTypes.FETCH_ERROR });
      }
    }
  };
}

export function fetchMore(source) {
  return async function thunk(dispatch, state) {
    const { dribbblePage, shotsPerPage } = state || {};

    // It’s not updating the page before I fetch,
    // so I need to pass in the updated page count
    const newPage = dribbblePage + 1;

    dispatch({
      type: dribbblePostsTypes.FETCH_MORE,
      payload: newPage,
    });

    const URL = BASE_URL + "page=" + newPage + "&per_page=" + shotsPerPage;

    try {
      const posts = await axios({
        method: "get",
        url: URL,
        cancelToken: source && source.token ? source.token : null,
        headers: {
          Authorization: `Bearer ${GATSBY_DRIBBBLE_TOKEN}`,
        },
      });

      dispatch({
        type: dribbblePostsTypes.FETCH_MORE_SUCCESS,
        payload: posts.data,
      });
    } catch (error) {
      Sentry.captureException(error);

      if (__DEV__ && axios.isCancel(error)) {
        console.warn("Cancelled axios request");
      } else {
        if (__DEV__) {
          console.warn(error);
        }
        dispatch({ type: dribbblePostsTypes.FETCH_ERROR });
      }
    }
  };
}

export function setListEnd() {
  return {
    type: dribbblePostsTypes.LIST_END,
  };
}
