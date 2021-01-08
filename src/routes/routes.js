import React from 'react';
import { Image, Text, ImageBackground } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Welcome from "../pages/welcome";
import Topic from "../pages/Topic";
import Reminders from "../pages/Reminders";
import Home from "../pages/Home";
import SubRoutes from "./subRoutes";
import Course from "../pages/course-details";

import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Welcome" component={Welcome}
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

          }} /> */}
        <Stack.Screen name="Home" component={SubRoutes}
          options={{
            headerShown: false

          }} />
        <Stack.Screen name="Course" component={Course}

          options={{
            headerTitle: () => (
              <Image source={require("./../assets/Course/Header.png")} />
            ),
            headerBackTitle: ({ goBack }) => ({
              left: <Icon name={'arrow-left'} onPress={() => { }} />
            }),
            headerTitleAlign: "center",
            headerTransparent: true,
            headerStyle: { backgroundColor: 'white', height: 230 },


          }} />


      </Stack.Navigator>

    </NavigationContainer>

  );
}