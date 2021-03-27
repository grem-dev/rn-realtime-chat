import { combineReducers } from "redux";
import { AuthReducerFunction } from "../../Auth/reducers/auth";
import { EventReducerFunction } from "./event";
import { AppCombinedState } from "../types.d";

export const AppReducer = combineReducers<AppCombinedState>({
  event: EventReducerFunction,
  auth: AuthReducerFunction,
});