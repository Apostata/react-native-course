import React from 'react';
import { Text, StyleSheet } from 'react-native';

const mainText = props =>(
    <Text style={style.mainText}>{props.children}</Text>
);

const style = StyleSheet.create({
    mainText:{
        color: "#bbb",
        marginBottom: 20,
        backgroundColor: 'transparent'
    }
});

export default mainText;