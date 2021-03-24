import { useNavigation } from '@react-navigation/core';
import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

import socket from 'socket.io-client';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiI3ZDAzNzNmMi02NjNhLTRjNDgtYjE3Ny02YzExYmNkMWEzYTciLCJpYXQiOjE2MTY1NTY0ODUsImV4cCI6MTYxNjU1NjU0NX0.iGK3S0BgygUvZFLypXGx-ZSTnnLiiZFKeBFRUUR2VwU';
const refreshToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiI3ZDAzNzNmMi02NjNhLTRjNDgtYjE3Ny02YzExYmNkMWEzYTciLCJpYXQiOjE2MTY1NTY0ODUsImV4cCI6MTYxNzg1MjQ4NX0.AIoyjcX9O_rs9fPvDoRQ121wIuBBw0LpJFQtDDTLt7c';


interface IChat {
  email: string;
  id: string;
  name: string;
  lastMessage: string | undefined;
}

const io = socket.io('http://192.168.43.23:3003', {
  auth: {
    token, refreshToken
  }
});

export const ChatHomeScreen = ({ navigation }: StackScreenProps<any>): any => {
  const [chats, setChats] = useState<IChat[]>([]);

  useEffect(() => {
    fetch('http://192.168.43.23:3003/api/v1/accounts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authentication: `Bearer ${token}`,
        refreshtoken: refreshToken,
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
      console.log(data);
      setChats((prev) => {
        return prev.map(c => {
          if (c.id === data.from) {
            return { ...c, lastMessage: data.content }
          }
          return c
        })
      })
    });

    return () => {
      setChats(_ => []);
    }
  }, []);

  function _onPressChat(chatData: IChat) {
    console.log('Goin to ChatStack')
    navigation.navigate('ChatStack', { screen: 'Chat', params: { chatId: chatData.id, name: chatData.name } });
  }

  function _renderChat(c: IChat) {
    return (
      <TouchableHighlight key={c.id} onPress={() => _onPressChat(c)}>
        <View style={{ backgroundColor: 'white', minHeight: 60, padding: 10, elevation: 1 }}>
          <Text>{c.name}</Text>
          {c.lastMessage && <Text>{c.lastMessage}</Text>}
        </View>
      </TouchableHighlight>
    )
  }

  return (
    <View>
      <ScrollView>
        {
          chats.map(_renderChat)
        }
      </ScrollView>
    </View>
  )
}