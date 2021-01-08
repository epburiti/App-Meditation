import React, { useState } from 'react';

import { ButtonCustomDate, TextButton } from './styles';

function ButtonCustomDay({ desc }) {
  const [check, setCheck] = useState(false);

  return (
    <ButtonCustomDate color={check} onPress={() => { setCheck(!check) }}><TextButton color={check} >{desc}</TextButton></ButtonCustomDate>
  );
}

export default ButtonCustomDay;