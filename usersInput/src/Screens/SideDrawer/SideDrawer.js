import React, { Component } from 'react';
import {View, Text, Dimensions, StyleSheet, Platform, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('window').width * 0.7;

class SideDrawer extends Component{
   
    render(){
        if(Platform.OS !== "android"){
            return(
                <View style={styles.container}>
                    <TouchableOpacity onPress={()=>alert('Logout!')}>
                        <View style ={styles.logoutBtn}>
                            <Icon style={styles.btnIcon} name="ios-log-out" size={30} color="#bbb"/><Text>Deslogar-se</Text>
                        </View>
                    </TouchableOpacity>
                </View>        
            );
        }
        return(
            <View style={styles.container}>
                <TouchableNativeFeedback onPress={()=>alert('Logout!')}>
                    <View style={styles.logoutBtn}>
                        <Icon style={styles.btnIcon} name="md-log-out" size={30} color="#bbb"/><Text>Deslogar-se</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }
};


export default SideDrawer;
const styles = StyleSheet.create({
    container:{
        paddingTop: 22,
        width: width,
        backgroundColor: 'white',
        //height: '100%'
        flex: 1
    },
    logoutBtn:{
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'flex-start',
        padding: 10,
        backgroundColor: '#eee',
        marginTop:30
    },
    btnIcon:{
        marginRight: 10
    }
})