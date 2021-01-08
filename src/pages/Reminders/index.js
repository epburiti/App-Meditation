import React, { useState } from 'react';

import { Container, ViewTop, TextBold, SubTitle, ScrollViewCustom, ViewButtons, ViewButtonsDate } from './styles';

import DatePicker from 'react-native-date-picker';
import ButtonCustom from "./../../components/Button";
import ButtonCustomDay from "./../../components/Button-Days";

const Reminders = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  return (
    <ScrollViewCustom contentContainerStyle={{ flexGrow: 1 }}>
      <Container >

        <ViewTop>
          <TextBold>What time would you </TextBold>
          <TextBold>like to meditate?</TextBold>
          <SubTitle>Any time you can choose but We recommend first thing in th morning.</SubTitle>
        </ViewTop>

        <DatePicker
          date={date}
          onDateChange={setDate}
          mode="time"
        />

        <ViewTop>
          <TextBold>Which day would you </TextBold>
          <TextBold>like to meditate?</TextBold>
          <SubTitle>Everyday is best, but we recommend picking at least five.</SubTitle>
        </ViewTop>
        <ViewButtonsDate>
          <ButtonCustomDay desc="SU" />
          <ButtonCustomDay desc="M" />
          <ButtonCustomDay desc="T" />
          <ButtonCustomDay desc="W" />
          <ButtonCustomDay desc="TH" />
          <ButtonCustomDay desc="F" />
          <ButtonCustomDay desc="S" />
        </ViewButtonsDate>

        <ViewButtons>
          <ButtonCustom desc="Save" onPress={() => { navigation.navigate("Home") }} />
          <ButtonCustom desc="No Thanks" onPress={() => { navigation.navigate("Home") }} color="transparent" />
        </ViewButtons>
      </Container>
    </ScrollViewCustom >

  );
}

export default Reminders;