import { AuthState } from "../Auth/types.d";

export enum EventActionType {
  "ADD_EVENT",
  "DELETE_EVENT",
}

/* EVENT STATE */
export interface Event {
  key: string;
  payload?: string;
}

export interface EventState {
  events: Event[]
}

export interface EventReducerAction {
  type: EventActionType;
  data: Event;
}

// FINAL REDUX STATE
export interface AppCombinedState {
  auth: AuthState,
  event: EventState
}
