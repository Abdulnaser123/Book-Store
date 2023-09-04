/** @format */

// configureStore.js
import { createStore, applyMiddleware } from "redux";
import { Reducer } from "./Reducers";
import thunk from "redux-thunk"; // Import Redux Thunk middleware

export const ConfigureStore = () => {
  const store = createStore(
    Reducer,
    applyMiddleware(thunk), // Apply Redux Thunk middleware
  );

  return store;
};
