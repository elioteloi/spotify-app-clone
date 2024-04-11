import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

const ContainerSongs = ({imageUri, title}) => {
    return (
        <View style={styles.Container}>
            <TouchableOpacity style={styles.Image}>
            <Image
        source={{
          uri: imageUri,
        }}
        style={{width: 150, height: 150}}
      /> 
            </TouchableOpacity>
            <View style={styles.ContainerTitle}>
                <Text style={styles.Title} numberOfLines={1} ellipsizeMode="tail">{title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        color: "black",       
        margin: 7,
        marginBottom: 10
        
    },
    Image: {

    },
    ContainerTitle: {
       
    },
    Title: {
        color: "white",
        width: 150, 
    }
})

export default ContainerSongs;