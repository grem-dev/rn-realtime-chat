
export enum EventActionType {
  "ADD_EVENT",
  "DELETE_EVENT",
}

export enum AuthReducerActionType {
  "SIGNIN_REQUEST",
  "SIGNIN_FAILURE",
  "SIGNIN_SUCCESS",

  "SIGNUP_REQUEST",
  "SIGNUP_FAILURE",
  "SIGNUP_SUCCESS",

  "SIGNOUT_REQUEST",
  "SIGNOUT_SUCCESS",

  "LOCALSIGNIN_FAIL",
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

/* AUTH STATE */

export interface AuthStateData {
  token: string;
  refreshToken: string;
  accountId: string;
}

export interface AuthState {
  authData: Partial<AuthStateData>;
  loading: boolean;
}

export interface AuthReducerAction {
  type: AuthReducerActionType;
  data: Partial<AuthStateData>;
}


// ROUTER TYPES

export type AuthStackParamList = {
  SignIn: {},
  SignUp: {
    email: string;
    password: string;
  }
}

// FINAL REDUX STATE
export interface AuthReduxState {
  auth: AuthState,
  events: EventState
}
