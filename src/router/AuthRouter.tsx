import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export function AuthRoter() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="" component={React.Fragment} />
    </Stack.Navigator>
  );
}
