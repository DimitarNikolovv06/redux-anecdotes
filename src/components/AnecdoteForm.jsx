import React from "react";
import { asObject, addAnecdote } from "../reducers/anecdoteReducer";
import { useDispatch } from "react-redux";
import { setNotification } from "../reducers/notificationReducer";

export const AnecdoteForm = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="form">
        <h2>create new</h2>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const anecdote = asObject(e.target.anecdote.value);
            e.target.anecdote.value = "";
            dispatch(addAnecdote(anecdote));
            dispatch(setNotification(`you created ${anecdote.content}`, 5));
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
