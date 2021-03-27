import { combineReducers } from "redux";
import { AuthReducerFunction } from "../../Auth/reducers/auth";
import { GlobalReduxState } from "../types";
import { GlobalReducer } from "./global";

export const globalReducer = combineReducers<GlobalReduxState>({
  global: GlobalReducer,
  auth: AuthReducerFunction
});