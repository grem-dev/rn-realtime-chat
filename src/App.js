import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

// Components and Screens
import { AuthStore } from './Auth/helpers/store';
import { AppRouter } from './router';

export function App() {
  return (
    <NavigationContainer>
      <Provider store={AuthStore} >
        <AppRouter />
      </Provider>
    </NavigationContainer>
  );
}
