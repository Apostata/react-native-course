import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = props =>(
    <TextInput
        {...props} 
        style={[Styles.input, props.style, !props.valid && props.updated ? Styles.invalid : null ]}
    />
);

export default Input;
const Styles = StyleSheet.create({
    input:{
        width: "100%",
        borderWidth: 1,
        borderColor: "#bbb",
        padding: 5,
        marginTop: 8,
        marginBottom: 8
    },
    invalid:{
        backgroundColor:"#f9c0c0",
        borderColor: "red"
    }
});