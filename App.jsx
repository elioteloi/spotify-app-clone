// Import necessary dependencies
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import LibraryScreen from './src/screens/LibraryScreen';
import TestScreen from "./src/screens/test"
import HomeIcon from './assets/images/homepage.png';
import searchIcon from './assets/images/search.png';
import libraryIcon from './assets/images/library.png';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'grey',
      }} >
        <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false, tabBarIcon: ({ color, size }) => (
      <Image source={HomeIcon} style={{ tintColor: color, width: size, height: size }} />
    ), }}/>
        <Tab.Screen name="Search" component={SearchScreen} options={{ headerShown: false, tabBarIcon: ({ color, size }) => (
      <Image source={searchIcon} style={{ tintColor: color, width: size, height: size }} />
    ), }}/>
        <Tab.Screen name="Library" component={LibraryScreen} options={{ headerShown: false, tabBarIcon: ({ color, size }) => (
      <Image source={libraryIcon} style={{ tintColor: color, width: size, height: size }} />
    ), }}/>
     
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
