import React from "react";
import { connect } from "react-redux";
import { createFilterAction } from "../reducers/filterReducer";

export const Filter = (props) => {
  const onChange = (e) => {
    props.createFilterAction(e.target.value);
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

const mapDispatchToProps = (dispatch) => {
  return {
    createFilterAction: (value) => dispatch(createFilterAction(value)),
  };
};

const ConnectedFilter = connect(null, mapDispatchToProps)(Filter);

export default ConnectedFilter;
