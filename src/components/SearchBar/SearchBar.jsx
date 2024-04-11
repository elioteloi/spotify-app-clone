import React from "react";
import { TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";

const SearchBar = ({}) => {
    return (
        <TextInput style={[styles.searchBar]} placeholder={"What do you want to listen to ?"}/>   
    )
}

const styles = StyleSheet.create({
    searchBar: {
      backgroundColor: 'white',
      padding: 10,
      marginBottom: 8,
      borderRadius: 5,
     
    },
    searchBarText: {
      color: 'gray',
      fontSize: 16,
    },
  });

  export default SearchBar;