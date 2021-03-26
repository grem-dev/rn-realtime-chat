import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, Button, Touchable } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

import { connect, ConnectedProps } from 'react-redux';
import socket from 'socket.io-client';
import { AuthActions } from '../../Auth/actions';
import { AuthReduxState } from '../../Auth/types';
import { MainRouterParamList } from '../../types';

interface ILastMessage {
  content: string;
  date: string;
}

interface IChat {
  email: string;
  id: string;
  name: string;
  lastMessage: ILastMessage | undefined;
}

// Props definition
const ActionsCreator = {
  signout: AuthActions.SignOut,
};
const connector = connect((state: AuthReduxState) => state, ActionsCreator);

type Props = ConnectedProps<typeof connector> & StackScreenProps<MainRouterParamList, 'ChatStack'>;

const ChatHomeScreen = (props: Props): any => {
  const { auth: { authData }, navigation } = props;
  const { refreshToken, token } = authData;

  const [io, setIO] = useState(socket.io('http://192.168.43.23:3003', {
    auth: {
      token, refreshToken
    }
  }));

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
            console.log(data)
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
    }
  }, []);

  function _onPressChat(chatData: IChat) {
    navigation.navigate('ChatStack', { screen: 'Chat', params: { chatId: chatData.id, chatName: chatData.name } });
  }

  function _renderChat(c: IChat) {
    return (
      <TouchableHighlight key={c.id} onPress={() => _onPressChat(c)}>
        <View style={{ backgroundColor: 'white', minHeight: 60, padding: 10, elevation: 1 }}>
          <Text>{c.name}</Text>
          <Text style={{ fontSize: 10, color: 'gray' }}>{c.id}</Text>
          {c.lastMessage && (
            <>
              <Text style={{ fontWeight: 'bold' }}>{c.lastMessage.content}</Text>
              <Text style={{ fontSize: 9, color: 'gray', textAlign: 'right' }}>{c.lastMessage.date}</Text>
            </>
          )}
        </View>
      </TouchableHighlight>
    )
  }

  return (
    <View>
      <TouchableHighlight
        onPress={() => {
          props.signout();
        }}
      >
        <Text style={{
          height: 40,
          color: 'white',
          backgroundColor: 'rgb(100, 20, 200)',
          padding: 5,
          margin: 5,
          textAlignVertical: 'center',
          textAlign: 'center',
        }}>LogOut</Text>
      </TouchableHighlight>
      <Text>User: {authData.accountId}</Text>
      {/* <Text>RefreshToken: {auth.authData.refreshToken}</Text> */}
      <ScrollView>
        {
          chats.map(_renderChat)
        }
      </ScrollView>
    </View >
  )
}

const ConnectedScreen = connector(ChatHomeScreen);
export { ConnectedScreen as ChatHomeScreen };