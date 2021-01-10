import React from 'react';
import { ImageBackground, StatusBar } from 'react-native';

import { Container, ViewTop, TxtStrong, TxtWithOpacity, TxtInfo } from './styles';
import ButtonCustom from "./../../components/Button";
import DecorationBottom from "./../../components/DecorationBottom";
const welcome = ({ navigation }) => {
  return (
    <>
      <StatusBar backgroundColor="#99A1FF" barStyle="light-content" />

      <ImageBackground

        // resizeMode={'stretch'} // or cover
        style={{ flex: 1, height: "100%", width: '100%', backgroundColor: "#FFFFFF" }} // must be passed from the parent, the number may vary depending upon your screen size
        source={require('./../../assets/Welcome/welcome.png')}
      >
        <Container>
          <ViewTop>
            <TxtStrong>Hi Erick, Welcome</TxtStrong>
            <TxtWithOpacity> to Silent Moon</TxtWithOpacity>

            <TxtInfo>Explore the app, Find some peace of mind to prepare for meditation.</TxtInfo>

          </ViewTop>

          <ButtonCustom desc="Get Started" onPress={() => { navigation.navigate("Topic") }} color="white" className="CustomButton" />

          <DecorationBottom color="#ffff" />
        </Container>

      </ImageBackground >
    </>
  );
}

export default welcome;