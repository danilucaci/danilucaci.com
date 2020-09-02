import { renderHook } from "@testing-library/react-hooks";

import useLoggingThunkReducer from "../useLoggingThunkReducer";
import useLogger from "../useLogger";
import useThunk from "../useThunk";

jest.mock("../useLogger");
jest.mock("../useThunk");

describe("useLoggingThunkReducer", () => {
  test("calls the useThunk and useLogger hooks", () => {
    const state = { data: "test state" };
    const dispatch = jest.fn();

    const mockHook = ([mockState, mockDispatch]) => [mockState, mockDispatch];
    const useLoggerMock = useLogger.mockImplementationOnce(mockHook);
    const useThunkMock = useThunk.mockImplementationOnce(mockHook);

    renderHook(() => useLoggingThunkReducer([state, dispatch]));

    expect(useLoggerMock).toHaveBeenCalledWith([state, dispatch]);
    expect(useLoggerMock).toHaveBeenCalledTimes(1);
    expect(useThunkMock).toHaveBeenCalledWith([state, dispatch]);
    expect(useThunkMock).toHaveBeenCalledTimes(1);
  });

  test("calls the hooks and returns the state and dispatch", () => {
    const state = { data: "test state" };
    const dispatch = jest.fn();

    const mockHook = ([mockState, mockDispatch]) => [mockState, mockDispatch];
    useLogger.mockImplementationOnce(mockHook);
    useThunk.mockImplementationOnce(mockHook);

    const { result } = renderHook(() =>
      useLoggingThunkReducer([state, dispatch]),
    );

    expect(result.current).toStrictEqual([state, dispatch]);
  });
});
