import React, { Component } from 'react';
import {View, Text, Dimensions, StyleSheet } from 'react-native';


const width = Dimensions.get('window').width * 0.7;

class SideDrawer extends Component{
   
    render(){
        return(
            <View style={sideDrawerStyles.container}>
                <Text>
                    SideDrawer
                </Text>
            </View>
        )
    }
};


export default SideDrawer;
const sideDrawerStyles = StyleSheet.create({
    container:{
        paddingTop: 22,
        width: width,
        backgroundColor: 'white',
        //height: '100%'
        flex: 1
    }
})