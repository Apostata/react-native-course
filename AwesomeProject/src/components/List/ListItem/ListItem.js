import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const listItem = (props) => (
    <View style={listItemStyles.listItem}>
        <Text>{props.placeName}</Text>
    </View>
);

const listItemStyles = StyleSheet.create({
    listItem:{
        width: "100%",
        backgroundColor: "#F00",
        marginBottom: 5,
        padding: 10
    }
})

export default listItem;