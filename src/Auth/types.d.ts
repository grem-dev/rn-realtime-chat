
export interface AuthState {
  authData: Partial<AuthStateData>;
  loading: boolean;
}

export interface AuthStateData {
  token: string;
  refreshToken: string;
  accountId: string;
}


export interface AuthReducerAction {
  type: AuthReducerActionType;
  data: AuthStateData;
}

export enum AuthReducerActionType {
  "LOGIN_REQUEST",
  "LOGIN_FAILURE",
  "LOGIN_SUCCESS",
  "LOGOUT_REQUEST",
  "LOGOUT_SUCCESS",
}