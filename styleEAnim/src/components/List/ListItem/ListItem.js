import React from 'react';
import {View, Text, StyleSheet, Image, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback, TouchableHighlight } from 'react-native';

const listItem = (props) => (
    <TouchableOpacity onPress={props.onPressed} >
        <View style={listItemStyles.listItem} >
            <Image resizeMode="contain" style={listItemStyles.placeImage} source={props.placeImage} />
            <Text>{props.placeName}</Text>
        </View>
    </TouchableOpacity>
);

const listItemStyles = StyleSheet.create({
    listItem:{
        width: "100%",
        backgroundColor: "#EEE",
        marginBottom: 5,
        padding: 10,
        flexDirection: "row",
        alignItems: "center"
        
    },
    placeImage:{
        marginRight: 10,
        height: 50,
        width: 50
    }
})

export default listItem;