import React, { useEffect } from "react";
import ConnectedAnecdoteForm from "./components/AnecdoteForm";
import ConnectedAnecdotes from "./components/AnecdotesList";
import ConnectedFilter from "./components/Filter";
import { useDispatch } from "react-redux";
import { initializeAnecdotes } from "./reducers/anecdoteReducer";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeAnecdotes());
  }, [dispatch]);

  return (
    <div>
      <h2>Anecdotes</h2>
      <ConnectedFilter />
      <ConnectedAnecdotes />
      <ConnectedAnecdoteForm />
    </div>
  );
};

export default App;
