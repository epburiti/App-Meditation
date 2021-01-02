import React from 'react';

import { Button, TextBtn } from './styles';

function ButtonCustom({ desc, color }) {
  return (
    <Button ><TextBtn>{desc}</TextBtn></Button>
  );
}

export default ButtonCustom;