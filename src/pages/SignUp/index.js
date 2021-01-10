import React, { useState } from 'react';
import CheckBox from "@react-native-community/checkbox";
import { ImageBackground } from "react-native";
import ButtonMidia from "./../../components/Button-Icon";
import ButtonCustom from "./../../components/Button";
import DecorationBottom from "./../../components/DecorationBottom";
import { Container, TextTop, TxtLogIn, InputCustom, TxtBottom, ViewTxtBottom, ScrollViewCustom } from './styles';


const SignIn = ({ navigation }) => {
  const [isSelected, setSelection] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");
  return (
    <ScrollViewCustom contentContainerStyle={{ flexGrow: 1 }}>
      <ImageBackground source={require("./../../assets/LogIn/Header.png")}
        style={{ flex: 1, width: '100%', height: '50%' }} >

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
      </ImageBackground >
    </ScrollViewCustom >
  );
}

export default SignIn;