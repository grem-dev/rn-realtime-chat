
export interface AuthState {
  authData: Partial<AuthStateData>;
  loading: boolean;
}

export interface AuthReduxState {
  auth: AuthState
}

export interface AuthStateData {
  token: string;
  refreshToken: string;
  accountId: string;
}

export interface AuthReducerAction {
  type: AuthReducerActionType;
  data: Partial<AuthStateData>;
}

export enum AuthReducerActionType {
  "LOGIN_REQUEST",
  "LOGIN_FAILURE",
  "LOGIN_SUCCESS",
  "LOGOUT_REQUEST",
  "LOGOUT_SUCCESS",
  "LOCALSIGNIN_FAIL"
}

export type AuthStackParamList = {
  SignIn: {},
  SignUp: {
    email: string;
    password: string;
  }
}