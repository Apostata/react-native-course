import React from 'react';
import {Modal, View, Image, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const placeDetail = (props)=>{
    let modalContent = null;
    if(props.place){
        modalContent =(
            <View style={placeDetailStyles.container}>
                <Image resizeMode="contain" source={props.place.image} style={placeDetailStyles.placeImage}/>
                <Text style={placeDetailStyles.placeName}>{props.place.name}</Text>
            </View>
        )
    }
    return (
        <Modal
            visible={props.place !== null}
            animationType="slide"
            onRequestClose={props.hideModal}
        >
            {modalContent}
            
            <View style={placeDetailStyles.btnContainer}>
                <View style={placeDetailStyles.btn}>   
                    <TouchableOpacity onPress={props.deletePlace}>
                        <Icon  size={30} name="ios-trash" color="#F00" />
                    </TouchableOpacity>
                </View>
                <Button
                    style={placeDetailStyles.btn}
                    title="Close"
                    onPress={props.hideModal}
                />
            </View>
        </Modal>
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