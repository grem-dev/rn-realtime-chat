import React, { useEffect, useRef, useState } from 'react';
import { Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/Ionicons'
import {
  InputContainer,
  Message,
  MsgContent,
  MsgTextInput,
  MsgUsername,
  MsgWrapper,
  ScrollMessageHolder,
  SelfMessage,
  SendBtn
} from "./style";

// Types declaration
import { ChatStackParamList } from '../../types';
type Props = StackScreenProps<ChatStackParamList, 'Chat'>;

export const ChatScreen = (props: Props): JSX.Element => {
  const { navigation, route: { params } } = props;

  //TODO: This should be on the message store
  const [messages, setMessages] = useState<any>([]);
  const [currMsg, setCurrMsg] = useState<any>('');

  const scrollRef = useRef<any>();
  const inputRef = useRef<any>();

  useEffect(() => {
    navigation.setOptions({
      title: params?.chatName,
    });
    return () => { }
  }, []);

  // TODO: Message factory
  function _renderMsg({ content, user }: any, index: number) {
    const isSelf = user == 'Fede';
    const Wrapper = isSelf ? SelfMessage : Message;
    return (
      <Wrapper key={index}>
        <MsgUsername>{user} </MsgUsername>
        <MsgContent > {content} </MsgContent>
      </Wrapper>
    )
  }

  return (
    <>
      <ScrollMessageHolder
        ref={scrollRef}
      >
        <Text style={{ textAlign: 'center', color: 'rgb(100, 100 ,100)', }}> Este es el chat: {params?.chatId} </Text>
        {
          messages.map((data: any, i: number) => _renderMsg(data, i))
        }
      </ScrollMessageHolder>
      <InputContainer >
        <MsgTextInput
          ref={inputRef}
          onChangeText={(val) => setCurrMsg(val)}
          value={currMsg}
          placeholder="Type here"
          multiline
        />
        <TouchableWithoutFeedback>
          <SendBtn>
            <Icon name="md-send-sharp" size={24} color="rgb(40, 40, 40)" />
          </SendBtn>
        </TouchableWithoutFeedback>
      </InputContainer>
    </>
  );
}
