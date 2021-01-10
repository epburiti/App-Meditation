import React from 'react';
import { Image, StatusBar } from 'react-native';

import { Container, ImageTop, ScrollViewCustom, ViewTop, SubTitle, ViewIconsTop, IconCustom, ButtonImgTop, ViewImgContainer, TextBold, TxtFooter, TxtFooterOpacity, FlatListCustom } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const Home = ({ navigation }) => {
  const DATA = [
    {
      id: "1",
      src: require("./../../assets/Home-Sleep/2.png"),
      Txt: "Night Island",
      TxtSub: "sleep - 3-10 MIN",
    },
    {
      id: "2",
      src: require("./../../assets/Home-Sleep/3.png"),
      Txt: "Happiness",
      TxtSub: "MEDITATION - 3-10 MIN",
    },
    {
      id: "3",
      src: require("./../../assets/Home-Sleep/4.png"),
      Txt: "Focus",
      TxtSub: "MEDITATION - 3-10 MIN",
    },
    {
      id: "4",
      src: require("./../../assets/Home-Sleep/5.png"),
      Txt: "Happiness",
      TxtSub: "MEDITATION - 3-10 MIN",
    }
  ];
  return (

    <ScrollViewCustom contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <StatusBar backgroundColor="#03174C" barStyle="light-content" />

      <ImageTop source={require("./../../assets/Home-Sleep/sleep.png")} style={{ flex: 1, height: "500%", width: '100%' }}>
        <Container>
          <ViewTop>
            <TextBold>Sleep Stories</TextBold>
            <SubTitle>Soothing bedtime stories to help you fall into a deep and natural sleep</SubTitle>
          </ViewTop>
          <ViewIconsTop>
            <IconCustom bckColor="#8E97FD">
              <FontAwesome5 name={"fan"} size={22} color={"white"} />
            </IconCustom>
            <IconCustom>
              <Icon name={"heart-o"} size={22} color={"white"} />
            </IconCustom>
            <IconCustom>
              <Ionicons name={"sad-outline"} size={22} color={"white"} />
            </IconCustom>
            <IconCustom>
              <Icon name={"moon-o"} size={22} color={"white"} />
            </IconCustom>
            <IconCustom>
              <MaterialIcons name={"child-care"} size={22} color={"white"} />
            </IconCustom>
          </ViewIconsTop>

          <ButtonImgTop >
            <Image source={require("./../../assets/Home-Sleep/1.png")} />
          </ButtonImgTop>


          <FlatListCustom
            data={DATA}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            numColumns={2}
            renderItem={({ item }) => (
              <ViewImgContainer onPress={() => navigation.navigate("PlayOption")}>
                <Image source={item.src} />
                <TxtFooter>{item.Txt}</TxtFooter>
                <TxtFooterOpacity>{item.TxtSub}</TxtFooterOpacity>
              </ViewImgContainer>
            )}
          />

        </Container>

      </ImageTop>
    </ScrollViewCustom>
  );
}

export default Home;