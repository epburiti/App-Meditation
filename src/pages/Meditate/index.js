import React from 'react';
import { Image } from 'react-native';

import { Container, ScrollViewCustom, ViewTop, SubTitle, ViewIconsTop, IconCustom, ButtonImgTop, ContainerImgs, ViewImgContainer, ContainerImgsSub } from './styles';
import { TextBold } from './../Topic/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Meditate = ({ navigation }) => {
  return (
    <ScrollViewCustom contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={true}>
      <Container>
        <ViewTop>
          <TextBold>Meditate</TextBold>
          <SubTitle>we can learn how to recognize when our minds are doing their normal everyday acrobatics.</SubTitle>
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

        <ButtonImgTop onPress={() => navigation.navigate("Course")}>
          <Image source={require("./../../assets/Meditate/1.png")} />
        </ButtonImgTop>


        <ContainerImgs>

          <ContainerImgsSub>
            <ViewImgContainer>
              <Image source={require("./../../assets/Meditate/2.png")} />
            </ViewImgContainer>
            <ViewImgContainer>
              <Image source={require("./../../assets/Meditate/4.png")} />
            </ViewImgContainer>
          </ContainerImgsSub>

          <ContainerImgsSub>
            <ViewImgContainer>
              <Image source={require("./../../assets/Meditate/3.png")} />
            </ViewImgContainer>

            <ViewImgContainer>
              <Image source={require("./../../assets/Meditate/5.png")} />
            </ViewImgContainer>
          </ContainerImgsSub>

        </ContainerImgs>

      </Container>
    </ScrollViewCustom>
  );
}

export default Meditate;