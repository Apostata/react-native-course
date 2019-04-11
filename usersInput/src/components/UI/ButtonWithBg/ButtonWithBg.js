import React from 'React'
import { TouchableOpacity, TouchableNativeFeedback, Platform, Text, View, StyleSheet } from 'react-native';

const buttonWithBg = props =>{
    const content = (
        <View style={[style.button, {backgroundColor: props.color}]} >
            <Text>{props.children}</Text>
        </View>
    );

    if(Platform.OS === 'android'){
        return(
            <TouchableNativeFeedback onPress={props.onPress}>
                {content}
            </TouchableNativeFeedback>
        )
    }

    return(
        <TouchableOpacity onPress={props.onPress}>
            {content}
        </TouchableOpacity>
    )
};


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