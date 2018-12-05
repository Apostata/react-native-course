import React from 'react';
import {View, Text, StyleSheet, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback, TouchableHighlight } from 'react-native';

const listItem = (props) => (
    <TouchableOpacity onPress={props.onPressed} >
        <View style={listItemStyles.listItem} >
            <Text>{props.placeName}</Text>
        </View>
    </TouchableOpacity>
);

const listItemStyles = StyleSheet.create({
    listItem:{
        width: "100%",
        backgroundColor: "#EEE",
        marginBottom: 5,
        padding: 10
    }
})

export default listItem;