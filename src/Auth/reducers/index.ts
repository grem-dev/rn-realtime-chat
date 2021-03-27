import { combineReducers } from "redux";
import { AuthReduxState } from "../types";
import { AuthReducerFunction } from "./auth";
import { EventReducerFunction } from "./event";

export const AuthReducer = combineReducers<AuthReduxState>({
  auth: AuthReducerFunction,
  events: EventReducerFunction,
});