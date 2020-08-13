const initialState = {
  filter: "",
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FILTER":
      return { filter: action.data };

    default:
      return state;
  }
};

export const createFilterAction = (str) => ({
  type: "FILTER",
  data: str,
});
