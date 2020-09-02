import composeReducers from "../composeReducers";

describe("composeReducers", () => {
  test("calls every function passed with the state and dispatch", () => {
    const mockHook = ([state, dispatch]) => [state, dispatch];

    const fn1 = jest.fn().mockImplementationOnce(mockHook);
    const fn2 = jest.fn().mockImplementationOnce(mockHook);
    const fn3 = jest.fn().mockImplementationOnce(mockHook);

    const initialState = { data: "test data" };
    const dispatch = jest.fn();

    composeReducers(fn1, fn2, fn3)([initialState, dispatch]);

    expect(fn3).toHaveBeenCalledTimes(1);
    expect(fn3).toHaveBeenCalledWith([initialState, dispatch]);
    expect(fn2).toHaveBeenCalledTimes(1);
    expect(fn2).toHaveBeenCalledWith([initialState, dispatch]);
    expect(fn1).toHaveBeenCalledTimes(1);
    expect(fn1).toHaveBeenCalledWith([initialState, dispatch]);
  });
});
