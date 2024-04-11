import React from 'react';
import { FlatList, View, Text, StyleSheet, ScrollView } from 'react-native';
import ContainerLibrary from '../components/Container/ContainerLibrary';
import { useEffect, useState } from 'react';  


import { ACCESS_TOKEN } from "@env"

const renderItem = ({ item }) => (
  <ContainerLibrary  imageUri={item.images[0].url} nameArtist={item.name} type={item.type}/>
);

const FlatListWithNumColumns = () => {
  const [artists, setArtists] = useState([])

  useEffect(() => {
    
    fetch("https://api.spotify.com/v1/artists?ids=6Ghvu1VvMGScGpOUJBAHNH,06HL4z0CvFAxyc27GXpf02,1O7aMVbDeSXY2LiVBhb13w,3gd8FJtBJtkRxdfbTu19U2,3HqSLMAZ3g3d5poNaI7GOU,1vyhD5VmyZ7KMfW5gqLgo5,3wcj11K77LjEY1PkEazffa,7n2wHs1TKAczGzO7Dd2rGr,0Y5tJX1MQlPlqiwlOH1tJY,5H1nN1SzW0qNeUEZvuXjAj,1RyvyyTE3xzB2ZywiAwp0i,6eUKZXaKkcviH0Ku9w2n3V,3KV3p5EY4AvKxOlhGHORLg,0oSGxfWSnnOXhD2fKuz2Gy,6PfSUFtkMVoDkx4MQkzOi3 ", {
      headers: {
        "Authorization": `Bearer ${ACCESS_TOKEN}`
      }
      })
      .then(response => response.json())
      .then(json => {
        console.log("the artist is ",json.artists[0].name);
        setArtists(json.artists)
    })
    .catch(error => console.error(error))
  },[])

  return (
    <FlatList
      data={artists}
      renderItem={renderItem}
      keyExtractor={item => item.key}
      numColumns={3}
      contentContainerStyle={styles.Container}
    />
  );
};

const styles = StyleSheet.create({
 Container: {
  backgroundColor: "#212121"
 }
});

export default FlatListWithNumColumns;
