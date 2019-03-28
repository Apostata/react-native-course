import React from 'react';
import {View, Image, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const placeDetail = (props)=>{
    return (
        <View style={placeDetailStyles.container}>
            <View >
                <Image resizeMode="contain" source={props.place.image} style={placeDetailStyles.placeImage}/>
                <Text style={placeDetailStyles.placeName}>{props.place.name}</Text>
            </View>
            
            <View style={placeDetailStyles.btnContainer}>
                <View style={placeDetailStyles.btn}>   
                    <TouchableOpacity onPress={props.deletePlace}>
                        <Icon  size={30} name="ios-trash" color="#F00" />
                    </TouchableOpacity>
                </View>
                
            </View>
        </View>
    );
};

export default placeDetail;

const placeDetailStyles = StyleSheet.create({
    container:{
        margin: 20
    },

    placeName:{
        fontWeight: "bold",
        textAlign:"center",
        fontSize: 28
    },
    placeImage:{
        height: 200,
        width: "100%"
    },

    btnContainer:{
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    btn:{
        width: 200,
        alignItems: "center"
    }
})