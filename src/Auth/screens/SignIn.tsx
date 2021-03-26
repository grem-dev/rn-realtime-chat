import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { connect, ConnectedProps } from 'react-redux';
import { AuthActions } from '../actions';
import { TouchableOpacity } from 'react-native-gesture-handler';
// Props Types
import { StackScreenProps } from '@react-navigation/stack';
import { AuthStackParamList } from '../types.d';


// Redux
const actionsCreator = {
  signin: AuthActions.SignIn
}
const connector = connect(state => state, actionsCreator)

// Props interface
type Props = ConnectedProps<typeof connector> & StackScreenProps<AuthStackParamList>;


// COMPONENT 
function SignInScreen(props: Props) {
  const { navigation } = props;

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
          placeholder="Email" />
        <TextInput
          value={password}
          onChangeText={setPassword}
          textContentType="password"
          autoCompleteType="password"
          placeholder="password" />
      </>
      <TouchableOpacity
        disabled={signinDisabled}
        onPress={() => {
          props.signin({ email, password })
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


const ConnectedScreen = connector(SignInScreen);
export { ConnectedScreen as SignInScreen };