import React from "react";
import { vote } from "../reducers/anecdoteReducer";
import { connect } from "react-redux";
import {
  setNotification,
  clearNotification,
} from "../reducers/notificationReducer";
import Notification from "./Notification";

const AnecdotesList = (props) => {
  const Anecdote = ({ anecdote }) => (
    <div className="anecdote">
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button
          onClick={() => {
            props.vote(anecdote.id);
            props.clearNotification();
            props.setNotification(`you voted ${anecdote.content}`, 5);
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
        {props.anecdotes
          .sort((a, b) => a.votes - b.votes)
          .map((anecdote) => (
            <Anecdote key={anecdote.id} anecdote={anecdote} />
          ))}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  if (state.filter.filter) {
    return {
      anecdotes: state.anecdotes[0].content
        ? state.anecdotes.filter((a) =>
            a.content.includes(state.filter.filter) ? a : null
          )
        : state.anecdotes,
    };
  }
  return {
    anecdotes: state.anecdotes,
  };
};

const mapDispatchToProps = {
  vote,
  setNotification,
  clearNotification,
};

const ConnectedAnecdotes = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdotesList);

export default ConnectedAnecdotes;
