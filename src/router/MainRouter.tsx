import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { BottomTab } from './BottomTab';

// Components and Screens
import { ChatStack } from '../chat/router';
import { ProductListScreen } from '../Products/screens/ProdList';
import { MainRouterParamList } from '../types';


// Constant declaration
const Stack = createStackNavigator<MainRouterParamList>();

export function MainRouter(props: any) {

  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="BottomTab" component={BottomTab} />
      {/* Real Stacks */}
      <Stack.Screen options={{ headerShown: false }} name="ChatStack" component={ChatStack} />
      <Stack.Screen name="ProductStack" component={ProductListScreen} />
    </Stack.Navigator>
  );
}



