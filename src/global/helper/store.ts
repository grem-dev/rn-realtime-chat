import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { globalReducer } from "../reducers";

export const GlobalStore = createStore(
  globalReducer,
  applyMiddleware(
    thunk,
  )
);