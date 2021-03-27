import React, { Dispatch, useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackScreenProps } from '@react-navigation/stack';

import { useDispatch } from 'react-redux';
import { AuthActions } from '../actions';

import { AuthReducerAction, AuthStackParamList } from '../types.d';


// Props interface
type Props = StackScreenProps<AuthStackParamList, 'SignIn'>;


// COMPONENT 
export function SignInScreen(props: Props) {
  const { navigation } = props;

  // Redux state
  const authDispacher = useDispatch<Dispatch<AuthReducerAction>>();

  // Local state
  const [email, setEmail] = useState<string>('gremin@gmail.com');
  const [password, setPassword] = useState<string>('nice123');
  const [signinDisabled, setSigninDisabled] = useState<boolean>(false);

  return (
    <View>
      <>
        <TextInput
          value={email}
          onChangeText={setEmail}
          autoCompleteType="email"
          autoCapitalize="none"
          placeholderTextColor="rgb(100, 100, 100)"
          placeholder="Email" />
        <TextInput
          value={password}
          onChangeText={setPassword}
          textContentType="password"
          placeholderTextColor="rgb(100, 100, 100)"
          secureTextEntry={true}
          autoCompleteType="password"
          placeholder="password" />
      </>
      <TouchableOpacity
        disabled={signinDisabled}
        onPress={() => {
          AuthActions.SignIn({ email, password })(authDispacher);
          setSigninDisabled(true);
        }}
      >
        <Text style={{
          textAlign: 'center', justifyContent: 'center',
          textAlignVertical: 'center',
          height: 40,
          padding: 5, margin: 5,
          borderRadius: 15,
          backgroundColor:
            signinDisabled ?
              'rgb(200, 20, 50)' :
              'rgb(100, 20, 200)',
          color: 'white'
        }}>{signinDisabled ? 'Loading...' : 'SignIn'}</Text>
      </TouchableOpacity>
      <Text
        style={{
          textAlign: 'center', justifyContent: 'center',
          textAlignVertical: 'center',
          color: 'rgb(120, 120, 160)',
          margin: 10, width: '100%',
        }}
        onPress={() => { navigation.navigate('SignUp', { email, password }) }}
      >Sin cuenta aún?</Text>
    </View >
  );
}


// const ConnectedScreen = connector(SignInScreen);
// export { ConnectedScreen as SignInScreen };