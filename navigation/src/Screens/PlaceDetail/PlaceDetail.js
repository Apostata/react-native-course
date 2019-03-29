import React, { Component } from 'react';
import {View, Image, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

class PlaceDetail extends Component{
    placeDeletedHandler(){
        const { onDeletePlace, place, navigator } = this.props;
        onDeletePlace(place.key);
        navigator.pop();
    }

    render(){
        const { place } = this.props;
        return (
            <View style={placeDetailStyles.container}>
                <View >
                    <Image resizeMode="contain" source={place.image} style={placeDetailStyles.placeImage}/>
                    <Text style={placeDetailStyles.placeName}>{place.name}</Text>
                </View>
                
                <View style={placeDetailStyles.btnContainer}>
                    <View style={placeDetailStyles.btn}>   

                        <TouchableOpacity onPress={this.placeDeletedHandler.bind(this)}>
                            <Icon  size={30} name="ios-trash" color="#F00" />
                        </TouchableOpacity>
                    </View>
                    
                </View>
            </View>
        );
    }
};

const mapDispatchToProps = dispatch =>{
    return {
        onDeletePlace: (key) => dispatch(actions.deletePlace(key))
    }
}

export default connect(null, mapDispatchToProps)(PlaceDetail);

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