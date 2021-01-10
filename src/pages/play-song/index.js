import React from 'react';
import { View, Text, ImageBackground } from 'react-native';

import { Container, ScrollViewCustom, ImageBackgroundCustom, TextBold, TextOpacity, ViewMid, ViewIconstPlayer } from './styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useRoute } from '@react-navigation/native';

const PlaySong = () => {

  const route = useRoute();
  console.log(route.params.sleep)
  return (
    <>
      { !route.params.sleep &&
        < ImageBackgroundCustom source={require("./../../assets/Play-song/Light.png")}
        >
          <Container>
            <ViewMid>
              <TextBold color="#3F414E">Focus Attention</TextBold>
              <TextOpacity color="#A1A4B2">7 DAYS OF CALM</TextOpacity>
            </ViewMid>
            <ViewIconstPlayer>
              <Ionicons name={"md-play-skip-back-circle-outline"} color={"#A0A3B1"} size={50} />
              <Ionicons name={"ios-pause-circle"} color={"#3F414E"} size={90} />
              <Icon name={"skip-next-circle-outline"} color={"#A0A3B1"} size={50} />

            </ViewIconstPlayer>
          </Container>
        </ImageBackgroundCustom>
      }
      { route.params.sleep &&
        < ImageBackgroundCustom source={require("./../../assets/Play-song/sleep.png")}
        >
          <Container>
            <ViewMid>
              <TextBold color="#E6E7F2">Night Island</TextBold>
              <TextOpacity color="#E6E7F2">SLEEP MUSIC</TextOpacity>
            </ViewMid>
            <ViewIconstPlayer>
              <Ionicons name={"md-play-skip-back-circle-outline"} color={"#E6E7F2"} size={50} />
              <Ionicons name={"ios-pause-circle"} color={"#E6E7F2"} size={90} />
              <Icon name={"skip-next-circle-outline"} color={"#E6E7F2"} size={50} />

            </ViewIconstPlayer>
          </Container>
        </ImageBackgroundCustom>
      }
    </>
  );
}

export default PlaySong;