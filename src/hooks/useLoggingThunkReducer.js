import { useLogger, useThunk } from "./";
import composeReducers from "../helpers/composeReducers";

/**
 * Runs `useLogger` and `useThunk` middleware React hooks from right to left.
 *
 * @param {Array} [state, dispatch] The result of calling the `useReducer` hook from React.
 *
 * @example
 *
 * const [state, dispatch] = useLoggingThunkReducer(
 *   useReducer(reducer, initialState),
 * );
 */
function useLoggingThunkReducer([state, dispatch]) {
  return composeReducers(useThunk, useLogger)([state, dispatch]);
}

export default useLoggingThunkReducer;
