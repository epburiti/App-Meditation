import React from 'react';
import { Image, Text, ImageBackground } from "react-native";
import BackButton from "../components/Back-Button";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeSignInLogIn from "../pages/SignIn-&-LogIn";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";


const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeSignInLogIn" component={HomeSignInLogIn}
          options={{
            headerTitle: () => (
              <Image source={require("./../assets/Logo.png")} />
            ),

            headerTitleAlign: "center",
            headerTransparent: true,
            headerStyle: { backgroundColor: 'white', height: 140 }

          }} />
        <Stack.Screen options={{
          headerTitle: () => (
            <></>
          ),
          headerLeft: ({ }) => (
            <BackButton />
          ),
          headerTransparent: true,
          headerStyle: { backgroundColor: 'white', height: 230 },


        }} name="LogIn" component={LogIn}
        />
        <Stack.Screen options={{
          headerTitle: () => (
            <></>
          ),
          headerLeft: ({ }) => (
            <BackButton />
          ),
          headerTransparent: true,
          headerStyle: { backgroundColor: 'white', height: 230 },

        }} name="SignUp" component={SignUp}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}