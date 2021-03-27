import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { AppReducer } from "../reducers";

export const AppStore = createStore(
  AppReducer,
  applyMiddleware(
    thunk,
  )
);