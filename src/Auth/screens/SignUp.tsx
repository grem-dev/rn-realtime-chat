import React, { Dispatch, useState } from 'react';
import { Text, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { useDispatch, useStore } from 'react-redux';
import { StackScreenProps } from '@react-navigation/stack';

import { AuthReducerAction, AuthStackParamList, AuthState } from '../types';
import { AuthActions } from '../actions';
import { GlobalReducerAction } from '../../global/types';


type Props = StackScreenProps<AuthStackParamList, 'SignUp'>;

export function SignUpScreen(props: Props) {
  const { route: { params } } = props;

  const authDispacher = useDispatch<Dispatch<AuthReducerAction>>();

  // Local state
  const [email, setEmail] = useState<string>(params.email || '');
  const [password, setPassword] = useState<string>(params.password || '');
  const [name, setName] = useState<string>('');
  const [processing, setProcessing] = useState<boolean>(false);

  return (
    <>
      <TextInput
        value={name}
        onChangeText={setName}
        autoCompleteType="name"
        placeholder="Name" />
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
        secureTextEntry
        placeholder="password" />
      <TouchableOpacity
        disabled={processing}
        onPress={() => {
          AuthActions.SignUp({ email, password, name })(authDispacher);
          setProcessing(true);
        }}
      >
        <Text style={{
          textAlign: 'center', justifyContent: 'center',
          textAlignVertical: 'center',
          height: 40,
          padding: 5, margin: 5,
          borderRadius: 15,
          backgroundColor:
            processing ?
              'rgb(200, 20, 50)' :
              'rgb(100, 20, 200)',
          color: 'white'
        }}>{processing ? 'Loading...' : 'SignIn'}</Text>
      </TouchableOpacity>
    </>
  );
}

// const ConnectedScreen = connect(
//   (s: AuthState) => s, {}, null, { context: AuthContext })(SignUpScreen);
// export { ConnectedScreen as SignUpScreen };