import { useRef, useEffect } from "react";

/**
 * Receives an array with the values of [state, dispatch]
 * returned by the `useReducer()` hook
 * and returns a thunk or a regular dispatch function.
 *
 * @param {array} Array The values returned by the `useReducer()` hook
 * @returns [state, enhancedDispatch] The original state and the enhancedDispatch
 *
 * @example
 * const [state, dispatch] = useThunk(
 *   useReducer(reducer, state),
 * );
 *
 * @returns [state, dispatch]
 */
function useThunk([state, dispatch]) {
  /**
   * Store a function in the `current` property of the ref
   * that receives the action dispatched as a parameter
   * and return from the hook that function
   * which calls the original dispatch so it stays the same.
   *
   * React ensures that dispatch stays the same between renders,
   * so we need to keep the dispatch function the same.
   */

  // Keep track of the state, otherwise `action(dispatchRef.current, state)`
  // will have a reference to the first value of `state` because of closure.
  const stateRef = useRef();

  useEffect(() => {
    // Update the state ref when state changes
    stateRef.current = state;
  }, [state]);

  const dispatchRef = useRef((action) => {
    if (typeof action === "function") {
      // It’s a thunk, so we need to call the action and pass in the dispatch ref
      // Optionally, you can pass the state ref to the thunk.
      action(dispatchRef.current, stateRef.current);
    } else {
      // Otherwise just dispatch the action received because it’s not a thunk
      dispatch(action);
    }
  });

  return [state, dispatchRef.current];
}

export default useThunk;
