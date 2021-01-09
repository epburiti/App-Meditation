import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';

import { Container, ViewTop, TextBold, TextOpacity, IconCustom, ViewIcons, ContainerIcons, TextIcon, IconCustomFontisto, ViewTabBars, ViewTabBarsHeader, ButtonHeader, TextButtonHeader, TextTabs, IconPlay, ContainerSongs, ButtonPlaySong, ContainerSongsTitles, TitleSong, SubTitleSong, ContainerScroll, ImageTopHeader } from './styles';

const Course = ({ navigation }) => {
  const [male, setMale] = useState(true);
  const [female, setFemale] = useState(false);
  return (
    <ContainerScroll contentContainerStyle={{ flexGrow: 1 }} >
      <ImageTopHeader source={require("./../../assets/Course/Header.png")} />

      <Container>
        <ViewTop>
          <TextBold>Happy Morning</TextBold>
          <TextOpacity>COURSE</TextOpacity>
          <TextOpacity>Ease the mind into a restful night’s sleep with these deep, amblent tones.</TextOpacity>
          <ViewIcons>
            <ContainerIcons>
              <IconCustom name={"heart"} size={20} color={"#FF84A2"} />
              <TextIcon >24.234 Favorits</TextIcon>
            </ContainerIcons>
            <ContainerIcons>
              <IconCustomFontisto name={"headphone"} size={20} color={"#67C8C1"} />
              <TextIcon >34.234 Lestening</TextIcon>
            </ContainerIcons>
          </ViewIcons>
        </ViewTop>

        <TextTabs>Pick a Narrator</TextTabs>
        <ViewTabBars>
          <ViewTabBarsHeader>
            <ButtonHeader onPress={() => { setMale(!male); setFemale(!female); }}><TextButtonHeader color={male}>Male</TextButtonHeader></ButtonHeader>
            <ButtonHeader onPress={() => { setFemale(!female); setMale(!male) }}><TextButtonHeader color={female}>Female</TextButtonHeader></ButtonHeader>
          </ViewTabBarsHeader>

        </ViewTabBars>
      </Container>

      <ContainerSongs>
        <ButtonPlaySong onPress={() => navigation.navigate("PlaySong")}>
          <IconPlay name={"playcircleo"} size={40} color={"#A1A4B2"} />
          <ContainerSongsTitles>
            <TitleSong>Focus Attention</TitleSong>
            <SubTitleSong>10 min</SubTitleSong>
          </ContainerSongsTitles>
        </ButtonPlaySong>
        <ButtonPlaySong onPress={() => navigation.navigate("PlaySong")}>
          <IconPlay name={"playcircleo"} size={40} color={"#A1A4B2"} />
          <ContainerSongsTitles>
            <TitleSong>Focus Attention</TitleSong>
            <SubTitleSong>10 min</SubTitleSong>
          </ContainerSongsTitles>
        </ButtonPlaySong>
        <ButtonPlaySong onPress={() => navigation.navigate("PlaySong")}>
          <IconPlay name={"playcircleo"} size={40} color={"#A1A4B2"} />
          <ContainerSongsTitles>
            <TitleSong>Focus Attention</TitleSong>
            <SubTitleSong>10 min</SubTitleSong>
          </ContainerSongsTitles>
        </ButtonPlaySong>
        <ButtonPlaySong onPress={() => navigation.navigate("PlaySong")}>
          <IconPlay name={"playcircleo"} size={40} color={"#A1A4B2"} />
          <ContainerSongsTitles>
            <TitleSong>Focus Attention</TitleSong>
            <SubTitleSong>10 min</SubTitleSong>
          </ContainerSongsTitles>
        </ButtonPlaySong>
      </ContainerSongs>
    </ContainerScroll>

  );
}

export default Course;