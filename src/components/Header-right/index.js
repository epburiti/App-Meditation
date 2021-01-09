import React from 'react';
import { View } from 'react-native';

import { Container, Btn, IconCustom } from './styles';

const HeaderRight = () => {
  return (
    <Container>
      <Btn onPress={() => {
      }}>
        <IconCustom name={'heart-o'} size={28} color={"white"} />
      </Btn>
      <Btn onPress={() => {
      }}>
        <IconCustom name={'download'} size={28} color={"white"} />
      </Btn>
    </Container>
  );
}

export default HeaderRight;