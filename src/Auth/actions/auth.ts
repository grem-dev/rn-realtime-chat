import AsyncStorage from "@react-native-async-storage/async-storage";
import { Dispatch } from "react";
import { AuthServices } from "../services";
import { AuthReducerAction, AuthReducerActionType } from "../types.d";

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
    dispatch({ type: AuthReducerActionType.LOGIN_REQUEST, data: {} });
    try {
      const res = await AuthServices.SignIn({ email, password });

      // Persisting user credentials
      const recordName = 'user';
      await AsyncStorage.setItem(`@${recordName}`, JSON.stringify(res));

      return dispatch({ type: AuthReducerActionType.LOGIN_SUCCESS, data: res });
    } catch (err) {
      console.log(err.message);
      dispatch({ type: AuthReducerActionType.LOGIN_FAILURE, data: {} });
    }
  }
}

function SignUp({ email, password, name }: SignUpActionProps) {
  return (dispatch: Dispatch<AuthReducerAction>) => {

  }
}

// Username props is for multiaccout purpouse
function SignOut() {
  return async function (dispatch: Dispatch<AuthReducerAction>) {
    const recordName = 'user';
    await AsyncStorage.removeItem(`@${recordName}`);
    return dispatch({ type: AuthReducerActionType.LOGOUT_SUCCESS, data: {} })
  }
}

// Username props is for multilogin purpouse
function SignInFromAsyncStorage(username?: string) {
  return async function (dispatch: Dispatch<AuthReducerAction>) {
    const recordName = username || 'user';
    const data = await AsyncStorage.getItem(`@${recordName}`);

    if (!data) return dispatch({ type: AuthReducerActionType.LOCALSIGNIN_FAIL, data: {} })

    const sessionPayload = JSON.parse(data);
    return dispatch({ type: AuthReducerActionType.LOGIN_SUCCESS, data: sessionPayload })
  }
}

export const AuthActions = {
  SignIn,
  SignUp,
  SignOut,
  SignInFromAsyncStorage
}
