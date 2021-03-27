
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

// Navigation Definitions

export type AuthStackParamList = {
  SignIn: {},
  SignUp: {
    email: string;
    password: string;
  }
}