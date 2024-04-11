import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

import {ACCESS_TOKEN} from '@env'
import ContainerSongs from '../components/Container/Container-songs';
import HorizontalSection from '../components/Section/HorizontalSection';

const HomeScreen = () => {
  const [albumsTaylorSwift, setAlbumsTaylorSwift] = useState([]);
  const [albumsTheHerbalizer, setAlbumsTheHerbalizer] = useState([]);
  const [albumsMuse, setAlbumsMuse] = useState([]);
  const [albumsDeftones, setAlbumsDeftones] = useState([]);

  useEffect(() => {
    
    const p1 = fetch(`https://api.spotify.com/v1/artists/06HL4z0CvFAxyc27GXpf02/albums`, {
              headers: {
                'Authorization': `Bearer ${ACCESS_TOKEN}`
              }
            })
            .then(response => response.json())
            .then(json => {
              console.log('The first promise has resolved');

              console.log(json.items[0].album_type);
              return json.items;

            })
            .catch(error => console.error('Error fetching data:', error));
      
   const p2 = fetch(`https://api.spotify.com/v1/artists/12Chz98pHFMPJEknJQMWvI/albums`, {
              headers: {
                'Authorization': `Bearer ${ACCESS_TOKEN}`
              }
            })
            .then(response => response.json())
            .then(json => {
              console.log('The second promise has resolved');

              console.log(json.items[0].artists[0].name);
              return json.items;

            })
            .catch(error => console.error('Error fetching data:', error));

   const p3 = fetch(`https://api.spotify.com/v1/artists/1O7aMVbDeSXY2LiVBhb13w/albums`, {
              headers: {
                'Authorization': `Bearer ${ACCESS_TOKEN}`
              }
            })
            .then(response => response.json())
            .then(json => {
              console.log('The third promise has resolved');

              console.log(json.items[0].artists[0].name);
              return json.items; 

            })
            .catch(error => console.error('Error fetching data:', error));

            const p4 = fetch(`https://api.spotify.com/v1/artists/6Ghvu1VvMGScGpOUJBAHNH/albums`, {
              headers: {
                'Authorization': `Bearer ${ACCESS_TOKEN}`
              }
            })
            .then(response => response.json())
            .then(json => {
              console.log('The forth promise has resolved');

              console.log(json.items[0].artists[0].name);
              return json.items; 

            })
            .catch(error => console.error('Error fetching data:', error));
    
    Promise.all([p1, p2, p3, p4]).then((results) => {
      console.log(`Results: ${results[0].album_type}`);
      setAlbumsTaylorSwift(results[0]);
      setAlbumsMuse(results[1]);
      setAlbumsTheHerbalizer(results[2])
      setAlbumsDeftones(results[3])
    });
    
  
  }, []);

  return (
    <ScrollView style={styles.container}>
     
   
     <HorizontalSection title="Taylor Swift">
      {albumsTaylorSwift.map((album, index) => (
        <ContainerSongs key={index} imageUri={album.images[0].url} title={album.name}/>
      ))}
    </HorizontalSection>

   
    <HorizontalSection title="Muse">
      {albumsMuse.map((album, index) => (
        <ContainerSongs key={index} imageUri={album.images[0].url} title={album.name}/>
      ))}
    </HorizontalSection>


    <HorizontalSection title="The Herbalizer">
      {albumsTheHerbalizer.map((album, index) => (
        <ContainerSongs key={index} imageUri={album.images[0].url} title={album.name}/>
      ))}
    </HorizontalSection>

    <HorizontalSection title="Deftones">
      {albumsDeftones.map((album, index) => (
        <ContainerSongs key={index} imageUri={album.images[0].url} title={album.name}/>
      ))}
    </HorizontalSection>
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

export default HomeScreen;
