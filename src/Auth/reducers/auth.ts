import { AuthReducerAction, AuthReducerActionType, AuthState } from "../types.d";

const InitialState: AuthState = { loading: true, authData: {} };

export function AuthReducerFunction(prevState = InitialState, action: AuthReducerAction): AuthState {
  switch (action.type) {
    case AuthReducerActionType.SIGNIN_REQUEST:
      return {
        ...prevState, loading: false,
      }
    case AuthReducerActionType.SIGNIN_FAILURE:
      return {
        ...prevState,
        loading: false,
      }
    case AuthReducerActionType.SIGNIN_SUCCESS:
      return {
        ...prevState,
        loading: false,
        authData: action.data,
      }
    case AuthReducerActionType.SIGNOUT_REQUEST:
      return {
        ...prevState,
        loading: true,
      };
    case AuthReducerActionType.SIGNOUT_SUCCESS:
      return {
        loading: false,
        authData: {},
      };
    case AuthReducerActionType.LOCALSIGNIN_FAIL:
      return {
        loading: false,
        authData: {},
      };
    case AuthReducerActionType.SIGNUP_REQUEST:
      return {
        ...prevState,
        loading: false,
      }
    case AuthReducerActionType.SIGNUP_SUCCESS:
      return {
        ...prevState,
        loading: false,
        authData: action.data
      }
    case AuthReducerActionType.SIGNUP_FAILURE:
      return {
        ...prevState,
        loading: false,
        authData: {}
      }
    default:
      return { ...prevState };
  }
}