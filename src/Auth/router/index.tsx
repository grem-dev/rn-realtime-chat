import React from 'react';
import { } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { SignInScreen } from '../screens/SignIn';
import { SignUpScreen } from '../screens/SignUp';
import { AuthStackParamList } from '../types';

const Stack = createStackNavigator<AuthStackParamList>();

export function AuthRouter() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
}
