import { renderHook } from "@testing-library/react-hooks";

import useCookiesReducer from "../useCookiesReducer";
import cookiesTypes from "../../reducers/cookies/cookies-types";
import cookiesInitialState from "../../reducers/cookies/cookies-initial-state";

describe("useCookiesReducer", () => {
  test("returns the state, dispatch, actions and cookieTypes", () => {
    const { result } = renderHook(() => useCookiesReducer());

    expect(result.current[0]).toEqual(cookiesInitialState);
    expect(result.current[1]).toEqual(expect.any(Function));

    expect(result.current[2]).toEqual(
      expect.objectContaining({
        checkCookies: expect.any(Function),
        setAcceptedCookies: expect.any(Function),
        setDeniedCookies: expect.any(Function),
      }),
    );

    expect(result.current[3]).toEqual(cookiesTypes);
  });
});
