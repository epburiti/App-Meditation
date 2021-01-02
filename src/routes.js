import React from 'react';
import { Image, Text, ImageBackground } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";


const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={Home}
          options={{
            headerTitle: () => (
              <Image source={require("./assets/Logo.png")} />
            ),
            headerTitleAlign: "center",
            headerTransparent: true,
            headerStyle: { backgroundColor: 'white', height: 140 }

          }} /> */}
        {/* <Stack.Screen options={{
          headerTitle: () => (
            // <Image source={require("./assets/LogIn/Header.png")} />
            <Text></Text>
          ),
          headerTransparent: true,
          // headerStyle: { backgroundColor: 'white', height: 350, width: "100%", position: 'absolute' }

        }} name="LogIn" component={LogIn}
        /> */}
        <Stack.Screen options={{
          headerTitle: () => (
            <ImageBackground source={require("./assets/LogIn/Header.png")} style={{ flex: 1, height: "60%", width: '100%', backgroundColor: "red" }}></ImageBackground>
          ),
          headerTransparent: true,
          headerStyle: {}

        }} name="SignUp" component={SignUp}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}