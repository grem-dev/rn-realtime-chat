import { combineReducers } from "redux";
import { AuthReduxState } from "../types";
import { AuthReducerFunction } from "./auth";

export const AuthReducer = combineReducers<AuthReduxState>({
  auth: AuthReducerFunction,
});