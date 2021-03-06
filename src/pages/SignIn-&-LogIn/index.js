import React from 'react';
import { View, ImageBackground, Image } from 'react-native';
import { Container, ViewImg, TitleRef, Title, LoginTxt, LinkToView, ViewTxts, ViewLogin } from './styles';
import DecorationBottom from "../../components/DecorationBottom";

import ButtonCustom from "../../components/Button/index";

const HomeSignInLogIn = ({ navigation }) => {
  return (
    <>
      <ImageBackground
        // resizeMode={'stretch'} // or cover
        style={{ flex: 1, height: "60%", width: '100%', backgroundColor: "#FFFFFF" }} // must be passed from the parent, the number may vary depending upon your screen size
        source={require('./../../assets/SingUp-SignIn/banner.png')}
      >
        <Container>

          <ViewImg>
            <Image
              source={require('./../../assets/SingUp-SignIn/main.png')}
            />
          </ViewImg>

          <ViewTxts>
            <Title>We Are what we do</Title>
            <TitleRef>Thousand of people are usign silent moon for smalls meditation</TitleRef>
          </ViewTxts>


          <View>
            <ButtonCustom desc="Sign Up" color="#8E97FD"
              onPress={() => navigation.navigate('SignUp')}
            />
          </View>

          <ViewLogin>
            <LoginTxt>ALREADY HAVE AN ACCOUNT? <LinkToView onPress={() => { navigation.navigate('LogIn') }}>LOG IN</LinkToView>

            </LoginTxt>
          </ViewLogin>
          <DecorationBottom />

        </Container >
      </ImageBackground >
    </>
  );
}


export default HomeSignInLogIn;