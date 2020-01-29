import React, { createContext } from "react";
import { useCookies } from "../hooks";

export const CookiesContext = createContext();

function CookiesProvider({ children, location }) {
  const [state, dispatch, actions, types] = useCookies(location);

  return (
    <CookiesContext.Provider value={[state, dispatch, actions, types]}>
      {children}
    </CookiesContext.Provider>
  );
}

export default CookiesProvider;
