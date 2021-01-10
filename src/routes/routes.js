import React from 'react';
import { Image, Text, TouchableOpacity } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import BackButton from "../components/Back-Button";
import HeaderRight from "../components/Header-right";
import Welcome from "../pages/welcome";
import Topic from "../pages/Topic";
import Reminders from "../pages/Reminders";
import SubRoutes from "./subRoutes";
import Course from "../pages/course-details";
import PlaySong from "../pages/play-song";
import PlayOption from "../pages/Play-Option-Sleep/index";


const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome}
          options={{
            headerTitle: () => (
              <Image source={require("./../assets/Logo.png")} />
            ),
            headerTitleAlign: "center",
            headerTransparent: true,
            headerStyle: { backgroundColor: 'white', height: 100 }

          }} />
        <Stack.Screen name="Topic" component={Topic}
          options={{
            headerShown: false

          }} />
        <Stack.Screen name="Reminders" component={Reminders}
          options={{
            headerShown: false

          }} />
        <Stack.Screen name="Home" component={SubRoutes}
          options={{
            headerShown: false

          }} />
        <Stack.Screen name="PlaySong" component={PlaySong}
          options={{
            headerTitle: () => (
              <>
              </>
            ),
            headerLeft: () => (
              <BackButton />
            ),
            headerRight: () => (
              <HeaderRight />
            ),
            headerTitleAlign: "center",
            headerTransparent: true,
            headerStyle: { backgroundColor: 'white', height: 230 },

          }} />
        <Stack.Screen name="Course" component={Course}

          options={{
            headerTitle: () => (
              <></>
            ),
            headerRight: () => (
              <HeaderRight />
            ),
            headerLeft: () => (
              <BackButton />
            ),
            headerTitleAlign: "center",
            headerTransparent: true,
            headerStyle: { backgroundColor: 'white', height: 230 },
          }} />
        <Stack.Screen name="PlayOption" component={PlayOption}

          options={{
            headerTitle: () => (
              <></>
            ),
            headerLeft: () => (
              <BackButton />
            ),
            headerRight: () => (
              <HeaderRight />
            ),
            headerTitleAlign: "center",
            headerTransparent: true,
            headerStyle: { backgroundColor: 'white', height: 230 },


          }} />
      </Stack.Navigator>

    </NavigationContainer>

  );
}