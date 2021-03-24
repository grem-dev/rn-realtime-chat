import React, { useEffect, useRef, useState } from 'react';
import { Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/core';
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



export const ChatScreen = ({ route: { params }, navigation }: StackScreenProps<any>): any => {
  const { goBack } = useNavigation();

  const [messages, setMessages] = useState<any>([]);
  const [currMsg, setCurrMsg] = useState<any>('');

  const scrollRef = useRef<any>();
  const inputRef = useRef<any>();

  useEffect(() => {
    console.log(navigation);
    console.log(params)
    console.log('Rendering again')
    navigation.setOptions({
      title: params?.name,
    });
    return () => { }
  }, []);

  function _renderMsg({ content, user = '' }: any, index: number) {
    const isSelf = user == 'Fede';
    console.log(isSelf)
    console.log(user)
    const Wrapper = user == 'Fede' ? SelfMessage : Message;
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
