import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {IProduct} from '../product';

import {SProduct} from './style';
const {Container, Data, Picture} = SProduct;

export function Product({name, price}: IProduct) {
  function _onPress() {
  }
  return (
    <TouchableOpacity onPress={_onPress}>
      <Container>
        <Picture>
          <Image
            source={{uri: 'http://192.168.43.23:3000/2.jpg'}}
            style={{
              height: '100%',
              width: '100%',
              resizeMode: 'cover',
            }}
          />
        </Picture>
        <Data>
          <Text style={{fontWeight: 'bold'}}>{name}</Text>
          <Text>$ {price}</Text>
        </Data>
      </Container>
    </TouchableOpacity>
  );
}
