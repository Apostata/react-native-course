import React, { Component } from 'react';
import {View, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('window').width * 0.7;

class SideDrawer extends Component{
   
    render(){
        return(
            <View style={style.container}>
                <TouchableOpacity>
                    <View style={style.drawerItem}>
                        <Icon style={style.drawerItemIcon} name="ios-log-out" size={30} color="#aaa"/>
                        <Text>Deslogar-se</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
};


export default SideDrawer;
const style = StyleSheet.create({
    container:{
        paddingTop: 50,
        width: width,
        backgroundColor: 'white',
        //height: '100%'
        flex: 1
    },
    drawerItem:{
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        backgroundColor:"#eee"
    },
    drawerItemIcon:{
        marginRight: 10
    }
})