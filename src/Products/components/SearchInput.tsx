import React from 'react';
import {} from 'react-native';
import {ISearchBarProps} from '../product';

import Icon from 'react-native-vector-icons/EvilIcons'

import {SSearchInput} from './style';
const {Container, IconContainer, Input} = SSearchInput;

export function SearchBar({}: ISearchBarProps) {
  return (
    <Container>
      <Input placeholder="Search for products" />
      <IconContainer>
        <Icon name="search" size={32} color="#222" />
      </IconContainer>
    </Container>
  );
}
