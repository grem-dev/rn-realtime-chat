import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

import { useSelector } from 'react-redux';
import socket from 'socket.io-client';

import {
  AppCombinedState, EventState
} from '../../global/types.d';
import { MainRouterParamList } from '../../types';
import { AuthState } from '../../Auth/types';
import { IChat } from '../types.d';
import { ChatMenuCard } from '../components/ChatMenuCard';
import { HistoriList } from '../components/HistoryList';



type Props = StackScreenProps<MainRouterParamList, 'ChatStack'>;

export const ChatHomeScreen = (props: Props) => {

  const { authData } = useSelector<AppCombinedState, AuthState>(s => s.auth);
  const { events } = useSelector<AppCombinedState, EventState>(s => s.event);
  const { refreshToken, token } = authData;

  // Local State and instances
  const [io, setIO] = useState(
    socket.io('http://192.168.43.23:3003', { auth: { token, refreshToken } })
  );
  const [chats, setChats] = useState<IChat[]>([]);

  useEffect(() => {

    fetch('http://192.168.43.23:3003/api/v1/accounts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authentication: `Bearer ${token}`,
        refreshtoken: `${refreshToken}`,
      }
    })
      .then(async data => {
        if (data.status != 200) {
          return;
        }
        const res = await data.json();

        setChats(prev => [...prev, ...res.results]);
      })
      .catch(err => {
        console.error(err);
      })

    io.on('message', (data) => {
      setChats((prev) => {
        return prev.map((c): IChat => {
          if (c.id === data.from) {
            return {
              ...c, lastMessage: {
                content: data.content,
                date: data.createdAt,
              }
            }
          }
          return c
        })
      });
    });

    return () => {
      setChats(_ => []);
      io.close();
    }
  }, []);

  return (
    <View style={{ backgroundColor: 'white' }}>
      <Text>User: {authData.accountId}</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <HistoriList />
        {
          chats.map((c) => <ChatMenuCard key={c.id} {...c} />)
        }
        <Text>---</Text>
      </ScrollView>
    </View >
  )
}
