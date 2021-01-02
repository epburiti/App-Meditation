import React from 'react';
import { View, ImageBackground, Image } from 'react-native';
import { Container, ViewImg, TitleRef, Title, LoginTxt, LinkToView, ViewTxts, ViewLogin, Line } from './styles';

import ButtonCustom from "./../../components/Button/index";

const Home = ({ navigation }) => {
  return (
    <>
      <ImageBackground
        // resizeMode={'stretch'} // or cover
        style={{ flex: 1, height: "60%", width: '100%', backgroundColor: "#FFFFFF" }} // must be passed from the parent, the number may vary depending upon your screen size
        source={require('./../../assets/Home/banner.png')}
      >
        <Container>

          <ViewImg>
            <Image
              source={require('./../../assets/Home/main.png')}
            />
          </ViewImg>

          <ViewTxts>
            <Title>We Are what we do</Title>
            <TitleRef>Thousand of people are usign silent moon for smalls meditation</TitleRef>
          </ViewTxts>


          <View>
            <ButtonCustom desc="Sign Up" color="#8E97FD"
            // onPress={() => Alert.alert('Simple Button pressed')}
            />
          </View>

          <ViewLogin>
            <LoginTxt>ALREADY HAVE AN ACCOUNT? <LinkToView onPress={() => { navigation.navigate('LogIn') }}>LOG IN</LinkToView>

            </LoginTxt>
          </ViewLogin>

          <Line></Line>
        </Container >
      </ImageBackground >
    </>
  );
}


export default Home;