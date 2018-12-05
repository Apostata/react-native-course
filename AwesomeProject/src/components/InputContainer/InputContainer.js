import React from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
 
const inputContainer = (props)=>{
    return (
        <View style={componentStyles.inputContainer}>
            <TextInput
                style={componentStyles.placeInput}
                value={props.inputValue}
                placeholder={props.placeholder}
                onChangeText={props.changeText}
            />
            <Button
                style={componentStyles.placeButton}
                title={props.btnTitle}
                onPress={props.clickButton}
            />
        </View>
    )
}
 
const componentStyles = StyleSheet.create({
    inputContainer:{
        //flex:1,
        flexDirection:"row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%"
    },
    placeInput:{
        width:"70%"
    },
    placeButton:{
        width:"30%"
    },
});

export default inputContainer;