import { getAllAnecdotes, addNewAnecdote, incVotes } from "../api/anecdotes";

export const asObject = (anecdote) => {
  return {
    content: anecdote,
    votes: 0,
  };
};

export const vote = (id) => async (dispatch) => {
  const data = await (await incVotes(id)).data;

  dispatch({ type: "VOTE", data });
};

export const addAnecdote = (anecdote) => async (dispatch) => {
  const data = await addNewAnecdote(anecdote);
  dispatch({ type: "ADD_ANECDOTE", data });
};

export const initializeAnecdotes = () => async (dispatch) => {
  const data = await getAllAnecdotes();
  dispatch({ type: "INIT_ANECDOTES", data });
};

const anecdotesReducer = (state = [""], action) => {
  switch (action.type) {
    case "VOTE":
      return [
        ...state.map((s) =>
          s.id !== action.data.id ? s : { ...s, votes: Number(s.votes) + 1 }
        ),
      ];

    case "ADD_ANECDOTE":
      return [...state, action.data];

    case "INIT_ANECDOTES":
      return action.data;

    default:
      return state;
  }
};

export default anecdotesReducer;
