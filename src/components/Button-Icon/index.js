import React from 'react';

import { Button, TextBtn, ViewBtn, } from './styles';
import Icon from 'react-native-vector-icons/Fontisto';
function ButtonMidia({ media }) {
  if (media == 'Facebook') {
    return (
      <Button color="#7583CA" border="none">
        <ViewBtn>
          <Icon name="facebook" size={22} color="#ffff" />
          <TextBtn fontColor="#F6F1FB">CONTINUE WITH FACEBOOK</TextBtn>
        </ViewBtn>
      </Button>
    );
  } else {
    // <Button ><TextBtn>{desc}</TextBtn></Button>
    return (
      <Button color="#EBEAEC" border="1px solid #3F414E">
        <ViewBtn>
          <Icon name="google" size={22} color="black" />
          <TextBtn fontColor="#3F414E">CONTINUE WITH GOOGLE</TextBtn>
        </ViewBtn>
      </Button>
    );
  }

}

export default ButtonMidia;