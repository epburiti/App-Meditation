import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';

import { Container, ViewTop, TextBold, TextOpacity, IconCustom, ViewIcons, ContainerIcons, TextIcon, IconCustomFontisto, TextTabs, ContainerScroll, FlatListCustom, ViewImgContainer, TxtFooter, TxtFooterOpacity, ImageTopHeader } from './styles';
import { useNavigation } from '@react-navigation/native';

const PlayOption = () => {
  const navigation = useNavigation();
  const [dataFlatList, setDataFlatList] = useState([]);
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
  useEffect(() => {
    setDataFlatList(DATA);
  }, [])
  function loadPage() {
    setDataFlatList([...dataFlatList, ...DATA]);
  }
  return (
    <ContainerScroll contentContainerStyle={{ flexGrow: 1 }} >
      <ImageTopHeader source={require("./../../assets/Play-Option-sleep/main.png")} />
      <Container>
        <ViewTop>
          <TextBold>Night Island</TextBold>
          <TextOpacity>45 MIN - SLEEP MUSIC</TextOpacity>
          <TextOpacity>Ease the mind into a restful night’s sleep with these deep, amblent tones.</TextOpacity>
          <ViewIcons>
            <ContainerIcons>
              <IconCustom name={"heart"} size={20} color={"#E6E7F2"} />
              <TextIcon >24.234 Favorits</TextIcon>
            </ContainerIcons>
            <ContainerIcons>
              <IconCustomFontisto name={"headphone"} size={20} color={"#E6E7F2"} />
              <TextIcon >34.234 Lestening</TextIcon>
            </ContainerIcons>
          </ViewIcons>
        </ViewTop>

        <TextTabs>Related</TextTabs>
      </Container>
      <FlatListCustom
        onEndReachedThreshold={0.2}
        onEndReached={() => loadPage()}
        data={dataFlatList}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <ViewImgContainer onPress={() => navigation.navigate("PlaySong", true)}>
            <Image source={item.src} />
            <TxtFooter>{item.Txt}</TxtFooter>
            <TxtFooterOpacity>{item.TxtSub}</TxtFooterOpacity>
          </ViewImgContainer>
        )}
      />
    </ContainerScroll>
  );
}

export default PlayOption;      