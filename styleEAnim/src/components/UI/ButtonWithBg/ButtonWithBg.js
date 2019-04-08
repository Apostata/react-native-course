import React from 'React'
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const buttonWithBg = props =>(
    <TouchableOpacity onPress={props.onPress}>
        <View style={[style.button, {backgroundColor: props.color}]} >
            <Text>{props.children}</Text>
        </View>
    </TouchableOpacity>
)

const style = StyleSheet.create({
    button:{
        margin: 5,
        padding: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "black"

    }
});

export default buttonWithBg;