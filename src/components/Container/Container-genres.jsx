import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native";

const ContainerGenres = ({ title }) => {
   return (
    <TouchableOpacity style={styles.Container}>
        <Text style={styles.Text}>{title}</Text>
    </TouchableOpacity>
   )
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: "#b3b3b3",
        width: 120,
        height: 200,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
       margin: 2,
        padding: 10,
        justifyContent: "flex-end",
    },
    Text: {
        color: "white"
    }
})

export default ContainerGenres;