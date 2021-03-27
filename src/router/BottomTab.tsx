import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ChatHomeScreen } from '../chat/screens/Home';
import { FeedScreen } from '../Products/screens';

import Icon from 'react-native-vector-icons/Ionicons';
import { ProfileScreen } from '../Profile/screens/Profile';


type MainBottomTabParamList = {
  Chats: {

  },
  Feed: {

  },
  Profile: {

  }
}
// TODO: Completa los tipos de esta cosa xD
// Al igual que las demas rutas, esta cosa necesita una definición de tipos para poder funcionar correctamente
const Tab = createBottomTabNavigator<MainBottomTabParamList>();

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
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => setIcon({ color, size, name: "person-circle-sharp" })
        }}
        name="Profile" component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}

function setIcon({ color, size, name }: any) {
  return (
    <Icon name={name} size={size} color={color} />
  )
}