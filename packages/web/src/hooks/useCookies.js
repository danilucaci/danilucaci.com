import { useEffect } from "react";
import useCookiesReducer from "./useCookiesReducer";

function useCookies({ pathname = "" }) {
  const [state, dispatch, actions, types] = useCookiesReducer();

  const { openCookieConsent } = state;
  const { checkCookies } = actions;

  // Keep pathname in the dependencies array to have it trigger on each page
  useEffect(() => {
    if (!openCookieConsent) {
      dispatch(checkCookies());
    }
  }, [checkCookies, dispatch, openCookieConsent, pathname]);

  return [state, dispatch, actions, types];
}

export default useCookies;
