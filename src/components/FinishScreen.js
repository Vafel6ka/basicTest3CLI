import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Card from "../styles/styleComponents/Card"

const FinishScreen = () => {
    return (
        <View style={styled.conteiner}>
            <Card>
                <Text style={styled.title}>Great! You did it!</Text>
                <Image/>
            </Card>
        </View>
    )
}

export default FinishScreen;

const styled = StyleSheet.create({
    conteiner:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    },
    title: {
        alignItems:"center",
        justifyContent:"center",
        fontSize: 26
    }
})
