import { useReducer } from "react";
import useLoggingThunkReducer from "./useLoggingThunkReducer";

import cookiesInitialState from "../reducers/cookies/cookies-initial-state";
import cookiesReducer from "../reducers/cookies/cookies-reducer";
import cookiesTypes from "../reducers/cookies/cookies-types";

import {
  checkCookies,
  setAcceptedCookies,
  setDeniedCookies,
  removeTransition,
} from "../reducers/cookies/cookies-actions";

const actions = {
  checkCookies,
  setAcceptedCookies,
  setDeniedCookies,
  removeTransition,
};

function useCookiesReducer() {
  const [state, dispatch] = useLoggingThunkReducer(
    useReducer(cookiesReducer, cookiesInitialState),
  );

  return [state, dispatch, actions, cookiesTypes];
}

export default useCookiesReducer;
