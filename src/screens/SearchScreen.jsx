  import React, { useState } from 'react';
  import { Text, View, StyleSheet, ScrollView, TouchableOpacity, TextInput,  } from 'react-native';

  import HorizontalSection from '../components/Section/HorizontalSection';
  import VerticalSection from '../components/Section/VerticalSection';

  import ContainerGenres from '../components/Container/Container-genres';
  import ContainerBrowseAll from '../components/Container/Container-Browse-all';
  import SearchBarScreen from './SearchBarScreen';

  const json = [{ title1: "Music", title2: "Podcasts"},{ title1: "Live Events", title2: "Made for you"},{ title1: "New Releases", title2: "Merch"},{ title1: "Summer", title2: "Podcasts"},{ title1: "Sertanejo", title2: "In the car"},{title1: "Podcast Charts", title2: "Brazil Podcast Release"}];

  import { createNativeStackNavigator } from '@react-navigation/native-stack';
  const Stack = createNativeStackNavigator();


  const SearchScreen = ({navigation}) => {
 
      return  (
          <ScrollView style={styles.container}>
              <TouchableOpacity style={styles.SearchBar} onPress={() => navigation.navigate('SearchBarScreen')}>
                  <Text style={styles.SearchBarText}>What do you want to listen to ?</Text>
              </TouchableOpacity>
              <HorizontalSection title="Explore your genres">
                <ContainerGenres title="#alternative rock"/>
                <ContainerGenres title="#alternative rock"/>
                <ContainerGenres title="#alternative rock"/>
              </HorizontalSection>
              <VerticalSection title="Browse all">
                  {json.map((item, index) => (
                      <ContainerBrowseAll  key={index} titleContainer1={item.title1} titleContainer2={item.title2}/>
                  ))}
              </VerticalSection>
          </ScrollView>
          
      );
  };


  const StackNavigation = ({textInputValue, setTextInputValue}) => {
      return (
        <Stack.Navigator >
          <Stack.Screen name='SearchScreen' component={SearchScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="SearchBarScreen" component={SearchBarScreen}/>
        </Stack.Navigator>
      );
    }

  const styles = StyleSheet.create({
      container: {
        padding: 10,
          flex: 1,
          backgroundColor: '#212121', 
      },
      SearchBar: {
          backgroundColor: 'white',
          padding: 10,
          marginBottom: 8,
          borderRadius: 5,
        },
        SearchBarText: {
          color: 'gray',
          fontSize: 16,
        },
  });

  export default StackNavigation;


