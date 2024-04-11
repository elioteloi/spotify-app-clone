import { useEffect } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ContainerLibrary = ({imageUri, nameArtist, type}) => {
    return (
        <TouchableOpacity style={styles.Container}>
            <Image source={{uri: imageUri}} style={styles.Image} />
            
            <Text style={styles.TitleNameArtist}>{nameArtist}</Text>
            <Text style={styles.TitleType}>{type}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    Container: {
        margin: 20,
    },
    Image: {
        width: 90, 
        height: 90,
        borderRadius: 40
    },
    TitleNameArtist: {
        color: "white"
    },
    TitleType: {
        color: "gray"
    }
})
export default ContainerLibrary;