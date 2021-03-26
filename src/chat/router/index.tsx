import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { ChatScreen } from '../screens/Chat';
import { ChatStackParamList } from '../../types';

const Stack = createStackNavigator<ChatStackParamList>();

export function ChatStack(props: any) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
  );
}
