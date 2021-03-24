import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";

import { AuthReducer } from "../reducers/index";

export const AuthStore = createStore(
  AuthReducer,
  applyMiddleware(
    thunk
  )
);