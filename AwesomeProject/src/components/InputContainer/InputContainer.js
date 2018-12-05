import React, {Component} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
 
export default class InputContainer extends Component{
    state ={
        placeName : ""
    };

    placeSubmitHandler(){
        if(this.state.placeName.trim() === "" ) return;
       this.props.onItemAdded(this.state.placeName);
       this.onChangePlaceName('');
    }

    onChangePlaceName(val){
        this.setState({
          ...this.setState,
          placeName: val
        })
    }

    render(){
        return (
            <View style={componentStyles.inputContainer}>
                <TextInput
                    style={componentStyles.placeInput}
                    value={this.state.placeName}
                    placeholder={"Awesome Place for an input"}
                    onChangeText={this.onChangePlaceName.bind(this)}
                />
                <Button
                    style={componentStyles.placeButton}
                    title={"ADD"}
                    onPress={this.placeSubmitHandler.bind(this)}
                />
            </View>
        )
    }
}
 
const componentStyles = StyleSheet.create({
    inputContainer:{
        //flex:1,
        flexDirection:"row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%"
    },
    placeInput:{
        width:"70%"
    },
    placeButton:{
        width:"30%"
    },
});