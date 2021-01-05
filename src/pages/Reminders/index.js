import React from 'react';

import { Container, ViewTop, TextBold, TextOpacity, SubTitle, ImageCustom, FlatListCustom, ScrollViewCustom } from './styles';

const Reminders = () => {
  return (

    <ScrollViewCustom contentContainerStyle={{ flexGrow: 1 }}>
      <Container >

        <ViewTop>
          <TextBold>What Brings you</TextBold>
          <TextOpacity> to Silent Moon?</TextOpacity>
          <SubTitle>choose a topic to focuse on:</SubTitle>
        </ViewTop>

      </Container>
    </ScrollViewCustom>

  );
}

export default Reminders;