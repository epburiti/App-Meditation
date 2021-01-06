import React, { useState } from 'react';

import { Container, ViewTop, TextBold, TextOpacity, SubTitle, ScrollViewCustom, ViewButtons, ButtonCustomDate, ViewButtonsDate, TextButton } from './styles';

import DatePicker from 'react-native-date-picker';
import ButtonCustom from "./../../components/Button";

const Reminders = () => {
  const [date, setDate] = useState(new Date())
  const [sunday, setSunday] = useState(false)
  const [monday, setMonday] = useState(false)
  const [tuesday, setTuesday] = useState(false)
  const [Wednesday, setWednesday] = useState(false)
  const [thursday, setThursday] = useState(false)
  const [friday, setFriday] = useState(false)
  const [saturday, setSaturday] = useState(false)
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
          <ButtonCustomDate color={sunday} onPress={() => { setSunday(!sunday) }}><TextButton color={sunday} >SU</TextButton></ButtonCustomDate>

          <ButtonCustomDate color={monday} onPress={() => { setMonday(!monday) }}><TextButton color={monday}>M</TextButton></ButtonCustomDate>

          <ButtonCustomDate color={tuesday} onPress={() => { setTuesday(!tuesday) }} ><TextButton color={tuesday}>T</TextButton></ButtonCustomDate>

          <ButtonCustomDate color={Wednesday} onPress={() => { setWednesday(!Wednesday) }}><TextButton color={Wednesday}>W</TextButton></ButtonCustomDate>

          <ButtonCustomDate color={thursday} onPress={() => { setThursday(!thursday) }}><TextButton color={thursday}>TH</TextButton></ButtonCustomDate>

          <ButtonCustomDate color={friday} onPress={() => { setFriday(!friday) }}><TextButton color={friday}>F</TextButton></ButtonCustomDate>

          <ButtonCustomDate color={saturday} onPress={() => { setSaturday(!saturday) }}><TextButton color={saturday}>S</TextButton></ButtonCustomDate>
        </ViewButtonsDate>

        <ViewButtons>
          <ButtonCustom desc="Save" onPress={() => { }} />
          <ButtonCustom desc="No Thanks" onPress={() => { }} color="transparent" />
        </ViewButtons>
      </Container>
    </ScrollViewCustom >

  );
}

export default Reminders;