import React, { useState } from 'react';

import { HistoriBubble } from './HistoryBubble';
import { SHistoriList } from './styles';
const {
  Container
} = SHistoriList;

export function HistoriList() {

  const [bubbles, setBubbles] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  return (
    <Container
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {
        bubbles.map(() => (
          <HistoriBubble />
        ))
      }
    </Container>
  );
}
