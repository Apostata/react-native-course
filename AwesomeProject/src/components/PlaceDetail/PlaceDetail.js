import React from 'react';
import {Modal, View, Image, Text, Button, StyleSheet} from 'react-native';

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
                <Button
                    style={placeDetailStyles.btn} 
                    title="Delete"
                    color="#F00"
                    onPress={props.deletePlace}
                />
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
        width: 200
    }
})