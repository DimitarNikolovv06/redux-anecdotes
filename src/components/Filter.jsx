import React from "react";
import { useDispatch } from "react-redux";
import { createFilterAction } from "../reducers/filterReducer";

export const Filter = () => {
  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch(createFilterAction(e.target.value));
  };

  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter <input onChange={onChange} name="filter" type="text" />
    </div>
  );
};
