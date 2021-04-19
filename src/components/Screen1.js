import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Card from "../styles/styleComponents/Card";
import Colors from "../styles/constants/colors"

const Screen1 = () => {
    return (
        <View>
            <Card>
                <View>
                    <Text style={styled.innerText}> This is the FIRST screen! </Text>
                </View>
            </Card>        
        </View>
    )
}

export default Screen1

const styled = StyleSheet.create({
    innerText:{
        color:Colors.mainScreenTextColor,
    }
})
