import React from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';

// TYPES
import { MainRouterParamList } from '../../types';
import { IChat } from '../types';

// Styles 
import { ChatHomeCard } from "./styles";
const {
  ChatContainer, Body,
  Avatar, LastMessageText,
  Username, DateSend
} = ChatHomeCard;

export function ChatMenuCard(props: IChat) {

  const { navigate } = useNavigation<StackNavigationProp<MainRouterParamList, 'ChatStack'>>();

  function _onPressChat() {
    navigate('ChatStack', { screen: 'Chat', params: { chatId: props.id, chatName: props.name } });
  }

  return (
    <TouchableNativeFeedback onPress={_onPressChat}>
      <ChatContainer>
        <Avatar>
        </Avatar>
        <Body>
          <Username>{props.name}</Username>
          {props.lastMessage && (
            <>
              <LastMessageText>{props.lastMessage.content}</LastMessageText>
              <DateSend>
                {new Date(props.lastMessage.date).toDateString()}
              </DateSend>
            </>
          )}
        </Body>
      </ChatContainer>
    </TouchableNativeFeedback>
  );
}
