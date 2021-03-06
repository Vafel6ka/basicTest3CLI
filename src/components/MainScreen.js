import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import Card from "../styles/styleComponents/Card";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import { connect } from "react-redux";
import PushTryBtn from "../store/actions/pushTryBtn";
import FinishScreen from "../components/FinishScreen"

const Main = (props) => {
    console.log(props.all)

    let screen = <Text>Default screen</Text>;
    let value = props.count.count
    console.log(value)

    if (value == null) {screen = <Text>Default screen</Text>} 
        else if  (value%2 == 0) {screen = <Screen1/>} 
            else if  (value%2 != 0) {screen = <Screen2/>} 

    if (value == "finish") {screen = <FinishScreen/>}

    const onChange = () => {
        let data = value+1;
        props.PushTryBtnFn(data);
        if (data > 10) Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
              {text: 'Do something else', onPress: () => console.log('Do something pressed')},
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false},
          );
    }

    const getFinish = () => {
        let data = value;
        data = "finish";
        props.PushTryBtnFn(data);
    }

    return (
        <View style={styled.conteiner}>
            <Card>
                <View style={styled.content}>
                    <Text style={styled.title}>Try to change screen!</Text>
                    {screen}
                    <TouchableOpacity onPress={onChange}>
                        <Text style={styled.btn}>Push to try!</Text>
                    </TouchableOpacity>
                    <Text>{value}</Text>
                    <TouchableOpacity onPress={getFinish}>
                        <Text style={styled.btn}>Finish it!</Text>
                    </TouchableOpacity>
                </View>
            </Card>
        </View>
    )
}

const mapStateToProps = (state) => ({
    all:state,
    count: state.count
  })

  const mapDispatchToProps = (dispatch)=> {
    return {
        PushTryBtnFn: (data) => dispatch(PushTryBtn(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)

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