const subscribeReducer = (state, { type, payload }) => {
  switch (type) {
    case "FETCH_ERROR_TOO_MANY": {
      return {
        ...state,
        errorMessageType: "many",
        isError: true,
      };
    }
    case "FETCH_ERROR_ALREADY": {
      return {
        ...state,
        errorMessageType: "already",
        isError: true,
      };
    }
    case "FETCH_ERROR_GENERIC": {
      return {
        ...state,
        errorMessageType: "generic",
        APIErrorResponse: payload,
        isError: true,
      };
    }
    case "FETCH_SUCCESS": {
      return {
        ...state,
        isMCSent: true,
      };
    }
    case "FETCH_ERROR": {
      return {
        ...state,
        errorMessageType: "generic",
        isError: true,
      };
    }
    default:
      throw new Error(`Unhandled action type received: ${type}`);
  }
};

export default subscribeReducer;
