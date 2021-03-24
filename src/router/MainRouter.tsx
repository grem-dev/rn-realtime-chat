import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { BottomTab } from './BottomTab';
import { ProductListScreen } from '../Products/screens/ProdList';
import { ChatStack } from '../delete/router';

const Stack = createStackNavigator();

export function MainRouter() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="BottomTab" component={BottomTab} />
      {/* Real Stacks */}
      <Stack.Screen options={{ headerShown: false }} name="ChatStack" component={ChatStack} />
      <Stack.Screen name="ProductStack" component={ProductListScreen} />
    </Stack.Navigator>
  );
}


