import React, { createContext } from "react";
import { useCookies } from "../hooks";
import cookiesInitialState from "../reducers/cookies/cookies-initial-state";

const contextInitialState = [
  cookiesInitialState,
  () => {},
  {
    checkCookies: () => {},
    setAcceptedCookies: () => {},
    setDeniedCookies: () => {},
  },
  {},
];

export const CookiesContext = createContext(contextInitialState);

function CookiesProvider({ children, location }) {
  const [state, dispatch, actions, types] = useCookies(location);

  return (
    <CookiesContext.Provider value={[state, dispatch, actions, types]}>
      {children}
    </CookiesContext.Provider>
  );
}

export default CookiesProvider;
