import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = props =>(
    <TextInput
        {...props} 
        style={[Styles.input, props.style]}
    />
);

export default Input;
const Styles = StyleSheet.create({
    input:{
        width: "100%",
        borderWidth: 1,
        borderColor: "#bbb",
        padding: 5,
        margin: 8
    },
});