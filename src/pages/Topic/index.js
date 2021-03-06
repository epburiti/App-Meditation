import React from 'react';
import { ImageBackground, Image } from "react-native";

import { Container, ViewTop, TextBold, TextOpacity, SubTitle, ImageCustom, FlatListCustom, ScrollViewCustom, LinkToView, ContainerImgs, ContainerImgsSub, ViewImgContainer } from './styles';

const Topic = ({ navigation }) => {
  const DATA = [
    {
      id: "1",
      src: require("./../../assets/Topic/1.png"),
    },
    {
      id: "2",
      src: require("./../../assets/Topic/2.png"),
    },
    {
      id: "3",
      src: require("./../../assets/Topic/3.png"),
    },
    {
      id: "4",
      src: require("./../../assets/Topic/4.png"),
    },
    {
      id: "5",
      src: require("./../../assets/Topic/5.png"),
    },
    {
      id: "6",
      src: require("./../../assets/Topic/6.png"),
    },
    {
      id: "7",
      src: require("./../../assets/Topic/1.png"),
    },
    {
      id: "8",
      src: require("./../../assets/Topic/8.png"),
    },

  ];
  return (
    <ImageBackground
      style={{ flex: 1, height: "280%", width: '100%' }}
      source={require('./../../assets/Topic/background.png')}>

      <ScrollViewCustom contentContainerStyle={{ flexGrow: 1 }}>
        <Container >

          <ViewTop>
            <TextBold>What Brings you</TextBold>
            <TextOpacity> to Silent Moon?</TextOpacity>
            <SubTitle>choose a topic to focuse on:</SubTitle>
          </ViewTop>

          {/* <FlatListCustom
            data={DATA}
            keyExtractor={item => item.id}
            numColumns={4}
            renderItem={({ item }) => (
              <LinkToView onPress={() => { navigation.navigate('Reminders') }}>
                <ImageCustom source={item.src} />
              </LinkToView>
            )}
          /> */}
          <ContainerImgs>
            <ContainerImgsSub>
              <ViewImgContainer onPress={() => { navigation.navigate('Reminders') }}>
                <Image source={require("./../../assets/Topic/1.png")} />
              </ViewImgContainer>
              <ViewImgContainer onPress={() => { navigation.navigate('Reminders') }}>
                <Image source={require("./../../assets/Topic/3.png")} />
              </ViewImgContainer>
              <ViewImgContainer onPress={() => { navigation.navigate('Reminders') }}>
                <Image source={require("./../../assets/Topic/5.png")} />
              </ViewImgContainer>
              <ViewImgContainer onPress={() => { navigation.navigate('Reminders') }}>
                <Image source={require("./../../assets/Topic/7.png")} />
              </ViewImgContainer>
            </ContainerImgsSub>
            <ContainerImgsSub>
              <ViewImgContainer onPress={() => { navigation.navigate('Reminders') }}>
                <Image source={require("./../../assets/Topic/2.png")} />
              </ViewImgContainer>
              <ViewImgContainer onPress={() => { navigation.navigate('Reminders') }}>
                <Image source={require("./../../assets/Topic/4.png")} />
              </ViewImgContainer>
              <ViewImgContainer onPress={() => { navigation.navigate('Reminders') }}>
                <Image source={require("./../../assets/Topic/6.png")} />
              </ViewImgContainer>
              <ViewImgContainer onPress={() => { navigation.navigate('Reminders') }}>
                <Image source={require("./../../assets/Topic/8.png")} />
              </ViewImgContainer>
            </ContainerImgsSub>
          </ContainerImgs>

        </Container>
      </ScrollViewCustom>

    </ImageBackground>
  );
}

export default Topic;