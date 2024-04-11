import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const App = ({titleContainer1, titleContainer2}) => {
  return (
    <View style={styles.container}>
      <View style={styles.sideBySide}>
        <TouchableOpacity style={styles.ViewContainer}>
        <Text style={styles.Text}>{titleContainer1}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ViewContainer}>
        <Text style={styles.Text}>{titleContainer2}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  sideBySide: {
    flexDirection: 'row',
  },
  Text: {
    width: 100,
    height: 100,
    color: "white",
    padding: 8,
    fontWeight: "bold"

  },
  ViewContainer: {
    width: 180,
    height: 100,
    backgroundColor: "#b3b3b3",
    margin: 8,
    borderRadius: 8

  }
});

export default App;



