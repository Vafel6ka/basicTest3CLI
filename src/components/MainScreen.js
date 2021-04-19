import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { State } from "react-native-gesture-handler";
import Card from "../styles/styleComponents/Card";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2"

const Main = () => {

    const [value, setValue] = useState(0);

    let screen = "";

    if (value === 0) {screen = <Text>Default screen</Text>} else if  (value%2 == 0) {screen = <Screen1/>} else {screen = <Screen2/>}

    const onChange = () => {
        setValue((value)=>value+1)
    }

    return (
        <View style={styled.conteiner}>
            <Card>
                <View style={styled.content}>
                    <Text style={styled.title}>Try to change screen!</Text>
                    {screen}
                    <TouchableOpacity onPress={onChange}>
                        <Text style={styled.btn}>Push to try!</Text>
                        <Text>{value}</Text>
                    </TouchableOpacity>
                </View>
            </Card>
        </View>
    )
}

export default Main

const styled = StyleSheet.create({
    conteiner:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    },
    title:{
        fontSize:22,
        fontFamily:"DancingScript-SemiBold",
        margin:10
    },
    btn:{
        color:"blue",
        margin:10
    },
    content: {
        alignItems:"center",
        justifyContent:"center",
    }
})