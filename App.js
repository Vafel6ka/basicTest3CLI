import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from "./src/components/MainScreen"
import SplashScreen from "react-native-splash-screen"

export default function App() {
  useEffect(()=>{
    SplashScreen.hide()
  }, []);


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
