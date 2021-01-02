import React, { useContext } from 'react';

import ButtonMidia from "./../../components/Button-Icon";
import ButtonCustom from "./../../components/Button";
import DecorationBottom from "./../../components/DecorationBottom";
import { Container, TextTop, TxtLogIn, InputCustom, FogPass, TxtBottom } from './styles';
import { LinkToView } from "./../SignIn-&-LogIn/styles";
import { signIn } from "../../services/auth";
import AuthContext from "../../contextjs/auth";

const LogIn = ({ navigation }) => {
  const { signed, signIn, user } = useContext(AuthContext);
  console.log(signed);
  console.log(user);

  async function handleSign() {
    signIn();
  }

  return (
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
  );
}

export default LogIn;