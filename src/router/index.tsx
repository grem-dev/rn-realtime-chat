import React, { Dispatch, useEffect } from 'react';

// State management
import { useDispatch, useSelector } from "react-redux";
import { AuthRouter } from '../Auth/router';
import { AuthActions } from '../Auth/actions';
import { AuthReducerAction, AuthState } from '../Auth/types';
import { AppCombinedState } from '../global/types';

// Importing Routers and screens
import { MainRouter } from './MainRouter';
import { LoadingScreen } from '../global/screens';


export function AppRouter() {

  const { authData, loading } = useSelector<AppCombinedState, AuthState>(s => s.auth);
  const { refreshToken, token } = authData;
  const dispatch = useDispatch<Dispatch<AuthReducerAction>>();

  useEffect(() => {
    if (!token || !refreshToken)
      AuthActions.SignInFromAsyncStorage()(dispatch);

    return () => { /* Reset state to loading */ }
  }, []);

  // Returning loading screen
  if (loading)
    return <LoadingScreen />;

  // Main router when is logged in
  if (token && refreshToken)
    return <MainRouter />

  // Otherwise Auth router to SignIn or SignUp
  return <AuthRouter />
}