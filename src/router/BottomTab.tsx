import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Ionicons';
import { ChatHomeScreen } from '../delete/screens/Home';
import { FeedScreen } from '../Products/screens';

const Tab = createBottomTabNavigator<any>();

export function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => setIcon({ color, size, name: "chatbubble-sharp" })
        }}
        name="Chats" component={ChatHomeScreen} />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => setIcon({ color, size, name: "cart" })
        }}
        name="Feed" component={FeedScreen} />
    </Tab.Navigator>
  );
}

function setIcon({ color, size, name }: any) {
  return (
    <Icon name={name} size={size} color={color} />
  )
}