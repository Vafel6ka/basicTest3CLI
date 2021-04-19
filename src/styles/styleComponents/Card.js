import React from "react";
import { View, StyleSheet } from "react-native";

const Card = (props) => {
    return (
        <View style={{...props.style,...styled.Card}}>
            {props.children}
        </View>
    )
}

export default Card

const styled = StyleSheet.create({
    Card: {
        alignItems:"center",
        justifyContent:"center",
        padding: 10,
        margin: 10,
        shadowOpacity: 0.26,
        shadowColor: "black",
        shadowRadius:10,
        backgroundColor:"white",
        borderRadius:10
    }
})