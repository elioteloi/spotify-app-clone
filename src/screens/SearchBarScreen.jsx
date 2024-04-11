import React, { useState, useEffect } from 'react';
import { ScrollView, TextInput, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { ACCESS_TOKEN } from "@env"
import VerticalSection from '../components/Section/VerticalSection';
import ContainerSearch from '../components/Container/ContainerSearch';
import { useNavigation } from '@react-navigation/native';

const SearchBarScreen = ({ route }) => {
  const [textInputValue, setTextInputValue] = useState('');
  const [searchAlbums, setSearchAlbums] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: "#535353", 
      },
      headerTitle: props => (
        <View>
          <TextInput
            style={{ backgroundColor: "#535353"}}
            onChangeText={setTextInputValue}
            value={textInputValue}
            placeholder={"What do you want to search?"}
          />
        </View>
      )   
    });
  }, [navigation, textInputValue]);

  useEffect(() => {
  
    if (!textInputValue) {
      setSearchAlbums([]);
      return;
    }

    fetch(`https://api.spotify.com/v1/search?q=${textInputValue}&type=album`, {
      headers: {
        'Authorization': `Bearer ${ACCESS_TOKEN}`
      }
    })
      .then(response => response.json())
      .then(json => {
        console.log(json.albums.items[0].name);
        setSearchAlbums(json.albums.items);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [textInputValue]);

  return (
    <ScrollView style={styles.container}>
      <VerticalSection title="">
        {searchAlbums.map((album, index) => (
          <ContainerSearch key={index} imageUri={album.images[0].url} title={album.name} nameArtist={album.artists[0].name} />
        ))}
      </VerticalSection>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#212121',
  },
  Text: {
    color: "white"
  }
});

export default SearchBarScreen;
