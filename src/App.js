import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

// Components and Screens
import { AppStore } from './global/helper';
import { AppRouter } from './router';

export function App() {
  return (
    <NavigationContainer>
      <Provider store={AppStore} >
        <AppRouter />
      </Provider>
    </NavigationContainer>
  );
}
