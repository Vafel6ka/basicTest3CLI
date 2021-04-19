import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from "./src/components/MainScreen"

export default function App() {
  return (
    <View style={styles.container}>
      <Main/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  text1:{
    fontFamily:""
  }

});
