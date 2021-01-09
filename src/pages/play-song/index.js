import React from 'react';
import { View, Text, ImageBackground } from 'react-native';

import { Container, ScrollViewCustom, ImageBackgroundCustom, TextBold, TextOpacity, ViewMid, ViewIconstPlayer } from './styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useRoute } from '@react-navigation/native';

const PlaySong = () => {

  const route = useRoute();
  console.log(route.params)
  return (
    <ImageBackgroundCustom source={require("./../../assets/Play-song/Light.png")}
    >
      <Container>
        <ViewMid>
          <TextBold>Focus Attention</TextBold>
          <TextOpacity>7 DAYS OF CALM</TextOpacity>
        </ViewMid>
        <ViewIconstPlayer>
          <Ionicons name={"md-play-skip-back-circle-outline"} color={"#A0A3B1"} size={50} />
          <Ionicons name={"ios-pause-circle"} color={"#3F414E"} size={90} />
          <Icon name={"skip-next-circle-outline"} color={"#A0A3B1"} size={50} />

        </ViewIconstPlayer>
      </Container>
    </ImageBackgroundCustom>

  );
}

export default PlaySong;