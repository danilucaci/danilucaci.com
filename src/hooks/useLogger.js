import { useEffect, useRef } from "react";

/**
 * Receives an array with the values of [state, dispatch]
 * returned by the `useReducer()` hook and logs the `action`.
 *
 * @param {array} Array The values returned by the `useReducer()` hook
 *
 * @example
 * const [state, dispatch] = useLogger(
 *   useReducer(reducer, state),
 * );
 *
 * @returns [state, dispatch]
 */
function useLogger([state, dispatch]) {
  const actionRef = useRef();

  /**
   * Store a function in the `current` property of the ref
   * that receives the action dispatched as a parameter
   * and return from the hook that function
   * which calls the original dispatch so it stays the same.
   *
   * React ensures that dispatch stays the same between renders,
   * so we need to keep the dispatch function the same.
   */
  const dispatchRef = useRef((action) => {
    // Keep track of the action received and store it in a ref
    // so we can log it in the `useEffect` bellow.
    actionRef.current = action;
    dispatch(action);
  });

  useEffect(() => {
    const action = actionRef.current;

    if (action && typeof action === "function") {
      console.log(
        "%c Action is a thunk: ",
        "color: #07E33A; font-weight: 700",
        action,
      );
    }

    if (action && action.type && process.env.NODE_ENV === "development") {
      console.group(
        "%c useReducer Action: %c %s",
        "color: #FF0081; font-weight: 700",
        "color: #07E33A; font-weight: 700",
        action.type,
      );
      console.log(
        "%c Payload: ",
        "color: #FD01E4; font-weight: 700",
        action.payload,
      );
      console.log("%c State: ", "color: #07E33A; font-weight: 700", state);
      console.groupEnd();
    }
  }, [dispatch, state]);

  return [state, dispatchRef.current];
}

export default useLogger;
