import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { BackButtonCustom, IconCustom } from './styles';

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <BackButtonCustom onPress={() => {
      navigation.goBack();
    }}>
      <IconCustom name={'arrow-back'} size={28} />
    </BackButtonCustom>
  );
}

export default BackButton;