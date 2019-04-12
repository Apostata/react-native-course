import React, {Fragment as F} from 'React'
import { TouchableOpacity, TouchableNativeFeedback, Platform, Text, View, StyleSheet } from 'react-native';

const buttonWithBg = props =>{
    const content = (
        <View style={[style.button, {backgroundColor: props.color}, props.disabled ? style.disabled: null]} >
            <Text style={style.disabledText}>{props.children}</Text>
        </View>
    );
    
    if(props.disabled){
        return(
            <F>
                {content}
            </F>    
        );
    }

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
    );
};


const style = StyleSheet.create({
    button:{
        margin: 5,
        padding: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "black"

    },
    disabled:{
        backgroundColor:"#eee",
        
        borderColor:"#aaa"
    },
    disabledText:{
        color: "#aaa",
    }
});

export default buttonWithBg;