import React, { useEffect } from 'react';

// State management
import { connect } from "react-redux";

// Importing main Routers
import { MainRouter } from './MainRouter';
import { LoadingScreen } from '../global/screens';
import { AuthState } from '../Auth/types';

function AppRouter(props: { auth: AuthState }) {
  const { token, refreshToken } = props.auth.authData;

  useEffect(() => {
    if (!token || !refreshToken) {
      // TODO: Call to load data from async storage.
      console.log("No estoy logeado :'v")
    }
    return () => { /* Reset state to loading */ }
  }, []);

  // Returning loading screen
  if (props.auth.loading)
    return <MainRouter />

  // Main router when is logged in
  if (token && refreshToken)
    return <LoadingScreen />;

  // Otherwise Auth router to SignIn or SignUp
  return <MainRouter />
}

const MappedRouter = connect(state => state, {})(AppRouter);
export { MappedRouter as AppRouter };