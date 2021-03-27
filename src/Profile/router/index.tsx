import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ProfileScreen } from '../screens/Profile';
import { ProfileStackParamList } from '../types';

const Stack = createStackNavigator<ProfileStackParamList>();

export function ProfileStack(props: any) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}
