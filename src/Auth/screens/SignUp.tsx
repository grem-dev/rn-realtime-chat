import { ParamListBase } from '@react-navigation/routers';
import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { connect, ConnectedProps } from 'react-redux';
import { AuthStackParamList } from '../types';

const ActionsCreator = {};
const connector = connect(state => state, ActionsCreator);

type Props = ConnectedProps<typeof connector> & StackScreenProps<AuthStackParamList, 'SignUp'>;

function SignUpScreen(props: Props) {
  const { route: { params } } = props;

  const [email, setEmail] = useState<string>(params.email || '');
  const [password, setPassword] = useState<string>(params.password || '');

  const [processing, setProcessing] = useState<boolean>(false);

  return (
    <View>
      <>
        <TextInput
          value={email}
          onChangeText={setEmail}
          autoCompleteType="email"
          placeholder="Email" />
        <TextInput
          value={password}
          onChangeText={setPassword}
          autoCompleteType="password"
          textContentType="password"
          placeholder="password" />
      </>
    </View>
  );
}

const ConnectedScreen = connector(SignUpScreen);
export { ConnectedScreen as SignUpScreen };