import React from "react";
import { asObject, addAnecdote } from "../reducers/anecdoteReducer";
import { connect } from "react-redux";
import { setNotification } from "../reducers/notificationReducer";

const AnecdoteForm = (props) => {
  return (
    <>
      <div className="form">
        <h2>create new</h2>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const anecdote = asObject(e.target.anecdote.value);
            e.target.anecdote.value = "";
            props.addAnecdote(anecdote);
            props.setNotification(`you created ${anecdote.content}`, 5);
          }}
        >
          <input
            onChange={(e) => console.log(e.target.value)}
            name="anecdote"
          />
          <button type="submit">create</button>
        </form>
      </div>
    </>
  );
};

const mapDispatchToProps = {
  addAnecdote,
  setNotification,
};

const ConnectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm);

export default ConnectedAnecdoteForm;
