import React, { Dispatch } from 'react';
import { View, Text } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { AuthActions } from '../../Auth/actions';
import { AuthReducerAction } from '../../Auth/types';

export function ProfileScreen() {

  const authDispacher = useDispatch<Dispatch<AuthReducerAction>>();

  return (
    <View>
      <TouchableHighlight
        onPress={() => {
          AuthActions.SignOut()(authDispacher);
        }}
      >
        <Text style={{
          height: 40,
          color: 'white',
          borderRadius: 14,
          backgroundColor: 'rgb(100, 20, 200)',
          padding: 5,
          margin: 5,
          textAlignVertical: 'center',
          textAlign: 'center',
        }}>LogOut</Text>
      </TouchableHighlight>
      <Text>I am in the profile screen</Text>
    </View>
  );
}
