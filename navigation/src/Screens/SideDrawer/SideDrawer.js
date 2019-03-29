import React, { Component } from 'react';
import {View, Text, Dimensions, StyleSheet } from 'react-native';


const width = Dimensions.get('window').width * 0.7;

class SideDrawer extends Component{
   
    render(){
        return(
            <View style={sideDrawerStyles.container}>
                <Text>
                    side drawer
                </Text>
            </View>
        )
    }
};


export default SideDrawer;
const sideDrawerStyles = StyleSheet.create({
    container:{
        width: width,
        backgroundColor: 'white',
        height: '100%'
    }
})