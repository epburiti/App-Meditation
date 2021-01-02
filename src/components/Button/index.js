import React from 'react';

import { Button, TextBtn } from './styles';

function ButtonCustom({ desc, onPress, color = "#8E97FD" }) {
  return (
    <Button onPress={onPress} BckColor={color}><TextBtn>{desc}</TextBtn></Button>
  );
}

export default ButtonCustom;