import React, { useEffect } from 'react';

// State management
import { connect, ConnectedProps } from "react-redux";

// Importing main Routers
import { MainRouter } from './MainRouter';
import { LoadingScreen } from '../global/screens';
import { AuthReduxState, AuthState } from '../Auth/types';
import { AuthRouter } from '../Auth/router';
import { AuthActions } from '../Auth/actions';

const actionsCreator = {
  signInFromAsyncStorage: AuthActions.SignInFromAsyncStorage,
};
const connector = connect((state: AuthReduxState) => state, actionsCreator);
type Props = ConnectedProps<typeof connector>;

function AppRouter(props: Props) {
  const { token, refreshToken } = props.auth.authData;

  useEffect(() => {
    if (!token || !refreshToken)
      props.signInFromAsyncStorage();

    return () => { /* Reset state to loading */ }
  }, []);

  // Returning loading screen
  if (props.auth.loading)
    return <LoadingScreen />;

  // Main router when is logged in
  if (token && refreshToken)
    return <MainRouter />

  // Otherwise Auth router to SignIn or SignUp
  return <AuthRouter />
}

const MappedRouter = connector(AppRouter);
export { MappedRouter as AppRouter };