import React, { useState, useEffect } from 'react';
import { Image, View } from 'react-native';

import { Container, ViewMiddle, ButtonImage, ViewTxtMid, ButtonImageMid, FlatListCustom, LinkToView, ImageCustomFooter, ScrollViewCustom, TxtFooter, TxtFooterOpacity, ImageTop } from './styles';

import { ViewTop, TextBold, SubTitle, ImageCustom } from './../Topic/styles';

const Home = () => {
  const [dataFlatList, setDataFlatList] = useState([]);
  const DATA = [
    {
      id: "1",
      src: require("./../../assets/Home/footer-1.png"),
      Txt: "Focus",
      TxtSub: "MEDITATION - 3-10 MIN",
    },
    {
      id: "2",
      src: require("./../../assets/Home/footer-2.png"),
      Txt: "Happiness",
      TxtSub: "MEDITATION - 3-10 MIN",
    },
    {
      id: "3",
      src: require("./../../assets/Home/footer-1.png"),
      Txt: "Focus",
      TxtSub: "MEDITATION - 3-10 MIN",
    },
    {
      id: "4",
      src: require("./../../assets/Home/footer-2.png"),
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
    <ScrollViewCustom contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <Container>
        <ImageTop source={require("./../../assets/Logo.png")} />

        <ViewTop>
          <TextBold>Good Morning, Erick</TextBold>
          <SubTitle>We Wish you have a good day</SubTitle>
        </ViewTop>

        <ViewMiddle>
          <ButtonImage>
            <ImageCustom source={require("./../../assets/Home/left.png")} />
          </ButtonImage>
          <ButtonImage>
            <ImageCustom source={require("./../../assets/Home/right.png")} />
          </ButtonImage>
        </ViewMiddle>

        <ViewMiddle>
          <ButtonImageMid>
            <ImageCustom source={require("./../../assets/Home/middle.png")} />
          </ButtonImageMid>

        </ViewMiddle>

        <ViewTxtMid>
          <TextBold>Recomended for you</TextBold>
        </ViewTxtMid>

        <FlatListCustom
          onEndReachedThreshold={0.2}
          onEndReached={() => loadPage()}
          data={dataFlatList}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <LinkToView onPress={() => { }}>
              <ImageCustomFooter source={item.src} />
              <TxtFooter>{item.Txt}</TxtFooter>
              <TxtFooterOpacity>{item.TxtSub}</TxtFooterOpacity>
            </LinkToView>
          )}
        />

      </Container>
    </ScrollViewCustom>

  );
}

export default Home;