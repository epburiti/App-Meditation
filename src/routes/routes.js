import React from 'react';
import { Image, Text, ImageBackground } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Welcome from "../pages/welcome";
import Topic from "../pages/Topic";


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
            headerStyle: { backgroundColor: 'white', height: 140 }

          }} />
        <Stack.Screen name="Topic" component={Topic}
          options={{
            headerTitle: () => (
              <Image source={require("./../assets/Logo.png")} />
            ),
            headerTitleAlign: "center",
            headerTransparent: true,
            headerStyle: { backgroundColor: 'white', height: 140 }

          }} />
      </Stack.Navigator>

    </NavigationContainer>

  );
}