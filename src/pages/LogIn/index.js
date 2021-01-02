import React from 'react';
import { View, Text } from 'react-native';


import ButtonMidia from "./../../components/Button-Icon";
import ButtonCustom from "./../../components/Button";
import DecorationBottom from "./../../components/DecorationBottom";
import { Container, TextTop, TxtLogIn, InputCustom, FogPass, TxtBottom } from './styles';
import { LinkToView } from "./../Home/styles";

const LogIn = ({ navigation }) => {
  return (
    <Container>

      <TextTop>Welcome Back!</TextTop>

      <ButtonMidia media="Facebook" />
      <ButtonMidia media="Google" />

      <TxtLogIn>OR LOG IN WITH EMAIL</TxtLogIn>

      <InputCustom placeholder="Email address" autoCompleteType="email" />
      <InputCustom placeholder="Password" autoCompleteType="password" />

      <ButtonCustom desc="Log In" />

      <FogPass>Forgot Password?</FogPass>


      <TxtBottom>ALREADY HAVE AN ACCOUNT?
        <LinkToView onPress={() => { navigation.navigate('Home') }}> SIGN UP</LinkToView>
      </TxtBottom>
      <DecorationBottom />
    </Container>
  );
}

export default LogIn;