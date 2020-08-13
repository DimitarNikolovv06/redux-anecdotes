import axios from "axios";

const baseURL = "http://localhost:3001/anecdotes";

export const getAllAnecdotes = async () => {
  const anecdotes = await axios.get(baseURL);

  return anecdotes.data;
};

export const addNewAnecdote = async (anecdote) => {
  const res = await axios.post(baseURL, anecdote);

  return res.data;
};

export const incVotes = async (id) => {
  const anecdote = await (await axios.get(`${baseURL}/${id}`)).data;

  const newAnecdote = { ...anecdote, votes: anecdote.votes + 1 };

  return axios.put(`${baseURL}/${id}`, newAnecdote);
};
