import React from "react";
import { StyleSheet, View, Text } from "react-native";

const VerticalSection = ({title, children}) => {
   return (
    <View style={styles.Container}>
        <Text style={styles.Text}>{title}</Text>
        <View>{children}</View>
    </View>
   )
}

const styles = StyleSheet.create({
    Container: {
        
    },
    Text: {
        color: "white",
        fontWeight: 'bold',
        marginTop: 10
    },
    Children: {
        flexDirection: 'column', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginTop: 20,
    }
})

export default VerticalSection;