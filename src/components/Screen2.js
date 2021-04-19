import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Card from "../styles/styleComponents/Card";
import Colors from "../styles/constants/colors"

const Screen2 = () => {
    return (
        <View>
            <Card>
                <View>
                    <Text style={styled.innerText}> This is the SECOND screen! </Text>
                </View>
            </Card>        
        </View>
    )
}

export default Screen2

const styled = StyleSheet.create({
    innerText:{
        color:Colors.mainScreenTextColor,
    }
})