import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { SDepartmentCard } from './style';
const { BgCard, DepartmentCardContainer, SDepartmentTitle } = SDepartmentCard;
import { IDepartment } from '../product';

export function DepartmentCard({ name, color, bgColor, image }: IDepartment) {
  const { navigate } = useNavigation();

  return (
    <DepartmentCardContainer key={name}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => navigate('ProductStack', { category: name })}>
        <BgCard bgColor={bgColor}>
          <Image
            source={{ uri: `asset:/${image}` }}
            style={{
              flex: 1,
              position: 'absolute',
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
            }}></Image>
          <SDepartmentTitle color={color}>{name}</SDepartmentTitle>
        </BgCard>
      </TouchableOpacity>
    </DepartmentCardContainer>
  );
}
