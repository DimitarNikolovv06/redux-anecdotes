import React from "react";
import { vote } from "../reducers/anecdoteReducer";
import { useDispatch, useSelector } from "react-redux";
import { setNotification } from "../reducers/notificationReducer";
import Notification from "./Notification";

export const AnecdotesList = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);
  const anecdotes = useSelector((state) =>
    state.anecdotes[0].content
      ? state.anecdotes.filter((a) =>
          a.content.includes(filter.filter) ? a : null
        )
      : state.anecdotes
  );

  const Anecdote = ({ anecdote }) => (
    <div className="anecdote">
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button
          onClick={() => {
            dispatch(vote(anecdote.id));
            dispatch(setNotification(`you voted ${anecdote.content}`, 2));
          }}
        >
          vote
        </button>
      </div>
    </div>
  );

  return (
    <>
      <Notification />
      <div className="anecdotes">
        {anecdotes
          .sort((a, b) => a.votes - b.votes)
          .map((anecdote) => (
            <Anecdote key={anecdote.id} anecdote={anecdote} />
          ))}
      </div>
    </>
  );
};
