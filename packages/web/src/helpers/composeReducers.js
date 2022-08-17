/**
 * Calls the functions from right to left with the result of calling the `useReducer` hook.
 *
 * Same as calling: const [state, dispatch] = useThunk(useLogger(useReducer(reducer, initialState)));
 *
 * @param {Array} Functions The functions to call with the result of calling the `useReducer` hook
 * @param {Array} [state, dispatch] The result of calling the `useReducer` hook
 *
 * @example
 * composeReducers(useThunk, useLogger)([state, dispatch])
 *
 * @returns {function} getStateAndDispatch A new function to get the result of calling the `useReducer` hook.
 * @returns [state, dispatch] Enhanced `[state, dispatch]` after calling the middleware functions.
 */
function composeReducers(...fns) {
  return function getStateAndDispatch([initialState, initialDispatch]) {
    return fns.reduceRight(
      ([state, dispatch], fn) => fn([state, dispatch]),
      [initialState, initialDispatch],
    );
  };
}

export default composeReducers;
