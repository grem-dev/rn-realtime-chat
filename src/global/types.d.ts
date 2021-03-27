import { AuthState } from "../Auth/types";


export enum GlobalActionType {
  "ADD_EVENT",
  "DELETE_EVENT",
}
export interface Event {
  key: string;
  payload?: string;
}

export interface GlobalState {
  events: Event[]
}

export interface GlobalReducerAction {
  type: GlobalActionType;
  data: Event;
}


// Redux definitions
export interface GlobalReduxState {
  global: GlobalState,
  auth: AuthState
}