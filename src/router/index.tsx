import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Importing main Routers
import {MainRouter} from './MainRouter';

const Stack = createStackNavigator();

// TODO: Authenticate access and return auth or main as needed
export function AppRouter() {
  return (
    <NavigationContainer>
      <MainRouter />
    </NavigationContainer>
  );
}
