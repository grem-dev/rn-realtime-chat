import AsyncStorage from "@react-native-async-storage/async-storage";
import { Dispatch } from "react";
import { AuthServices } from "../services";
import { AuthReducerAction, AuthReducerActionType, AuthState, AuthStateData } from "../types.d";

export interface SignInActionProps {
  email: string;
  password: string;
}

export interface SignUpActionProps {
  email: string;
  password: string;
  name: string;
}

function SignIn({ email, password }: SignInActionProps) {
  return async (dispatch: Dispatch<AuthReducerAction>) => {
    dispatch({ type: AuthReducerActionType.SIGNIN_REQUEST, data: {} });
    try {
      const res = await AuthServices.SignIn({ email, password });

      // Persisting user credentials
      await SaveSession('usersession', res);

      return dispatch({ type: AuthReducerActionType.SIGNIN_SUCCESS, data: res });
    } catch (err) {
      console.error(err.message);
      dispatch({ type: AuthReducerActionType.SIGNIN_FAILURE, data: {} });
    }
  }
}

function SignUp({ email, password, name }: SignUpActionProps) {
  return (dispatch: Dispatch<AuthReducerAction>) => {
    dispatch({ type: AuthReducerActionType.SIGNUP_REQUEST, data: {} });
  }
}

// Username props is for multiaccout purpouse
function SignOut() {
  return async function (dispatch: Dispatch<AuthReducerAction>) {
    await RemoveSession('usersession');
    return dispatch({ type: AuthReducerActionType.SIGNOUT_SUCCESS, data: {} })
  }
}

// Username props is for multilogin purpouse
function SignInFromAsyncStorage(username?: string) {
  return async function (dispatch: Dispatch<AuthReducerAction>) {
    const sessionPayload = await GetSession('usersession');

    if (sessionPayload === null) return dispatch({ type: AuthReducerActionType.LOCALSIGNIN_FAIL, data: {} })

    const data = sessionPayload as AuthStateData;
    const res = await CallAuthTokenVerifycation(data.token, data.refreshToken);

    if (res.code == 200)
      return dispatch({ type: AuthReducerActionType.SIGNIN_SUCCESS, data: res.value as AuthStateData });

    RemoveSession('usersession');
    return dispatch({ type: AuthReducerActionType.LOCALSIGNIN_FAIL, data: {} });
  }
}

async function SaveSession(key: string, data: object) {
  await AsyncStorage.setItem(`@${key}`, JSON.stringify(data));
}

async function GetSession(key: string): Promise<object | null> {
  const stringRes = await AsyncStorage.getItem(`@${key}`);
  if (!stringRes)
    return null;
  return JSON.parse(stringRes);
}

async function RemoveSession(key: string) {
  await AsyncStorage.removeItem(`@${key}`);
}


function CallAuthTokenVerifycation(token: string, refreshToken: string) {
  return AuthServices.VerifyCredentials({
    refreshToken, token
  });
}

export const AuthActions = {
  SignIn,
  SignUp,
  SignOut,
  SignInFromAsyncStorage
}
