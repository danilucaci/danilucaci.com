import React, { createContext } from "react";
import { node, shape, string, object } from "prop-types";
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

CookiesProvider.propTypes = {
  children: node.isRequired,
  location: shape({
    hash: string.isRequired,
    host: string.isRequired,
    hostname: string.isRequired,
    href: string.isRequired,
    key: string.isRequired,
    origin: string.isRequired,
    pathname: string.isRequired,
    port: string.isRequired,
    protocol: string.isRequired,
    search: string.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    state: object,
  }),
};

CookiesProvider.defaultProps = {
  location: {
    state: null,
  },
};

export default CookiesProvider;
