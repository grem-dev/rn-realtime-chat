import { AuthReducerAction, AuthReducerActionType, AuthState } from "../types.d";

const InitialState: AuthState = { loading: true, authData: {} };

export function AuthReducerFunction(prevState = InitialState, action: AuthReducerAction): AuthState {
  switch (action.type) {
    case AuthReducerActionType.LOGIN_REQUEST:
      return {
        ...prevState,
        loading: true,
      }
    case AuthReducerActionType.LOGIN_FAILURE:
      return {
        ...prevState,
        loading: false,
      }
    case AuthReducerActionType.LOGIN_SUCCESS:
      return {
        ...prevState,
        loading: false,
        authData: action.data,
      }
    case AuthReducerActionType.LOGOUT_REQUEST:
      return {
        ...prevState,
        loading: true,
      };
    case AuthReducerActionType.LOGOUT_SUCCESS:
      return {
        loading: false,
        authData: {},
      };
    case AuthReducerActionType.LOCALSIGNIN_FAIL:
      return {
        loading: false,
        authData: {},
      };
    default:
      return { ...prevState };
  }
}