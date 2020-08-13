import { createStore, combineReducers, applyMiddleware } from "redux";
import anecdotesReducer from "./reducers/anecdoteReducer";
import { notificationReducer } from "./reducers/notificationReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { filterReducer } from "./reducers/filterReducer";
import thunk from "redux-thunk";

const reducer = combineReducers({
  anecdotes: anecdotesReducer,
  notifications: notificationReducer,
  filter: filterReducer,
});

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
