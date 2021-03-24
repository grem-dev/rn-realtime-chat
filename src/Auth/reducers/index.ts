import { combineReducers } from "redux";
import { AuthReducerFunction } from "./auth";

export const AuthReducer = combineReducers({
  auth: AuthReducerFunction,
});