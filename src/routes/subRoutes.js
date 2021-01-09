import React from 'react';

import Home from './../pages/Home';
import HomeSleep from '../pages/Home-Sleep';
import Meditate from './../pages/Meditate';
import PlaySong from './../pages/play-song';
import Perfil from './../pages/Perfil';

import Icon from 'react-native-vector-icons/FontAwesome';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();


const settingsTab = (route) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === 'Home') {
      iconName = 'home';
    } else if (route.name === 'Sleep') {
      iconName = 'moon-o';
    } else if (route.name === 'Meditate') {
      iconName = 'battery-2';
    } else if (route.name == 'Music') {
      iconName = 'music';
    } else if (route.name == 'Perfil') {
      iconName = 'user-circle';
    }

    return <Icon name={iconName} size={22} color={color} />;
  },
});

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => settingsTab(route)}
      activeTintColor='#8E97FD'
      activeColor='#8E97FD'
      inactiveTintColor='#FFF'
      activeBackgroundColor={true}
      barStyle={{ backgroundColor: '#ffff' }}
      labelStyle={{ fontWeight: 'bold', fontSize: "22px" }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Sleep" component={HomeSleep} />
      <Tab.Screen name="Meditate" component={Meditate} />
      <Tab.Screen name="Music" component={PlaySong}
        tabBarVisible={true}

      />
      <Tab.Screen name="Perfil" component={Perfil} />

    </Tab.Navigator>
  );
}