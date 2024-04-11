import React from "react";
import {View, TouchableOpacity, Image, Text, StyleSheet} from "react-native"
const ContainerSearch = ({imageUri, title, nameArtist}) => {
    return (
        <TouchableOpacity style={styles.Container}>
            <View style={styles.ContainerImage}>
            <Image
        source={{
          uri: imageUri,
        }}
        style={styles.Image}
      /> 
            </View>
            <View style={styles.ContainerTitle}>
                <Text style={styles.Title} ellipsizeMode="tail">{title}</Text>
                <Text style={styles.Title} ellipsizeMode="tail">{nameArtist}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    Container: {
        color: "black",       
        margin: 7,
        marginBottom: 10,
        flexDirection: 'row', 
        alignItems: 'center',
        
    },
    ContainerImage: {
        borderRadius: 10
    },
    Image: {
        width: 80, 
        height: 80,
        borderRadius: 10
    },
    ContainerTitle: {
       padding: 10
    },
    Title: {
        color: "white",
        
    },

    container: {
        flexDirection: 'row', // This sets the direction to horizontal
        alignItems: 'center', // This aligns the children vertically in the center
      },
      div1: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
      },
      div2: {
        width: 100,
        height: 100,
        backgroundColor: 'blue',
      },
})

export default ContainerSearch;