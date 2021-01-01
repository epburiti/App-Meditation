import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";

import { Image } from "react-native";
const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}
          options={{
            headerTitle: () => (
              <Image source={require("./assets/Logo.png")} />
            ),
            headerTitleAlign: "center",
            headerTransparent: true,
            headerStyle: { backgroundColor: 'white', height: 140 }

          }} />
        <Stack.Screen name="LogIn" component={LogIn}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}