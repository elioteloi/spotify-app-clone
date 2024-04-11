import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";

const HorizontalSection = ({title, children}) => {
    
   return (
    <>
     <Text style={styles.Text}>{title}</Text>
    <ScrollView style={styles.Container} horizontal={true}>
       
        <View style={styles.Children}>{children}</View>
    </ScrollView>
    </>
   )
}

const styles = StyleSheet.create({
    Container: {
        
    },
    Text: {
        color: "white",
        fontWeight: 'bold',
        margin: 4
    },
    Children: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        
    }
})

export default HorizontalSection;