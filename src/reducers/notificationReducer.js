const initialState = {
  message: ``,
  time: 0,
};

export const setNotification = (str, time) => async (dispatch) => {
  dispatch({
    type: "NEW_NOTIFICATION",
    data: { str, time },
  });
};

export const clearNotification = () => async (dispatch) => {
  dispatch({
    type: "CLEAR",
  });
};

export const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEW_NOTIFICATION":
      return {
        message: action.data.str,
        time: action.data.time * 1000,
      };

    case "CLEAR":
      return { message: ``, time: 0 };

    default:
      return state;
  }
};
