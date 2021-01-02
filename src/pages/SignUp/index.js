import React, { useState } from 'react';
import CheckBox from "@react-native-community/checkbox";

import ButtonMidia from "./../../components/Button-Icon";
import ButtonCustom from "./../../components/Button";
import DecorationBottom from "./../../components/DecorationBottom";
import { Container, TextTop, TxtLogIn, InputCustom, TxtBottom, ViewTxtBottom } from './styles';


const SignIn = ({ navigation }) => {
  const [isSelected, setSelection] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");
  return (
    <Container>

      <TextTop>Create your account</TextTop>

      <ButtonMidia media="Facebook" />
      <ButtonMidia media="Google" />

      <TxtLogIn>OR LOG IN WITH EMAIL </TxtLogIn>

      <InputCustom placeholder="User Name" onChangeText={text => setUserName(text)} />
      <InputCustom placeholder="Email address" autoCompleteType="email" onChangeText={text => setEmail(text)} />
      <InputCustom placeholder="Password" autoCompleteType="password"
        onChangeText={text => setPassWord(text)} />


      <ViewTxtBottom>
        <TxtBottom>i have read the Privace Policy</TxtBottom>
        <CheckBox value={isSelected}
          onValueChange={setSelection} />
      </ViewTxtBottom>

      <ButtonCustom desc="Get Started" />

      <DecorationBottom />
    </Container>
  );
}

export default SignIn;