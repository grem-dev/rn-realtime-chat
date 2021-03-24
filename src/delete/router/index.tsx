import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { ChatScreen } from '../screens/Chat';

const Stack = createStackNavigator();

export function ChatStack(props: any) {
  useEffect(() => {
    console.log('========================================00');
    console.log(props.route.params);
  })
  return (
    // <View>
    //   <Text>xD</Text>
    // </View>
    <Stack.Navigator>
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
  );
}
