import React, { useContext } from 'react';
import { ImageBackground, StatusBar } from "react-native";

import ButtonMidia from "./../../components/Button-Icon";
import ButtonCustom from "./../../components/Button";
import DecorationBottom from "./../../components/DecorationBottom";
import { Container, TextTop, TxtLogIn, InputCustom, FogPass, TxtBottom, ScrollViewCustom } from './styles';
import { LinkToView } from "./../SignIn-&-LogIn/styles";
import { signIn } from "../../services/auth";
import AuthContext from "../../contextjs/auth";

const LogIn = ({ navigation }) => {
  const { signed, signIn, user } = useContext(AuthContext);
  async function handleSign() {
    signIn();
  }

  return (

    <ScrollViewCustom contentContainerStyle={{ flexGrow: 1 }}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />

      <ImageBackground source={require("./../../assets/LogIn/Header.png")}
        style={{ flex: 1, width: '100%', height: '50%' }} >
        <Container>

          <TextTop>Welcome Back!</TextTop>

          <ButtonMidia media="Facebook" />
          <ButtonMidia media="Google" />

          <TxtLogIn>OR LOG IN WITH EMAIL</TxtLogIn>

          <InputCustom placeholder="Email address" autoCompleteType="email" />
          <InputCustom placeholder="Password" autoCompleteType="password" />

          <ButtonCustom desc="Log In" onPress={handleSign} />

          <FogPass>Forgot Password?</FogPass>


          <TxtBottom>ALREADY HAVE AN ACCOUNT?
        <LinkToView onPress={() => { navigation.navigate('SignUp') }}> SIGN UP</LinkToView>
          </TxtBottom>
          <DecorationBottom />

        </Container>
      </ImageBackground >
    </ScrollViewCustom >
  );
}

export default LogIn;