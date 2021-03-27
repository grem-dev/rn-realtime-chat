import React from 'react';

import { SHistoriBubble } from './styles';
const { Container, Bubble, User } = SHistoriBubble;

export function HistoriBubble() {
  return (
    <Container>
      <Bubble></Bubble>
      <User numberOfLines={1} >Ajam xD asd asd asd asd asd</User>
    </Container>
  );
}
