import React from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
import Input from '../UI/Input/Input';
const placeInput = props =>(
    <Input
        placeholder="Place Name"
        value={props.placeName}
        onChangeText={props.onChangePlaceName}
    />
);

export default placeInput
 
const componentStyles = StyleSheet.create({
    placeInput:{
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