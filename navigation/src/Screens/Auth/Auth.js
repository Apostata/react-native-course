import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import startMainTabs from '../MainTabs/MainTabs';

class AuthScreen extends Component {
    loginHandler(){
        startMainTabs();
    }

    render(){
        return (
            <View style={authStyles.btnContainer}>
                <Text style={authStyles.text}>Auth screen</Text>
                <Button style={authStyles.btn} title="Login" onPress={this.loginHandler.bind(this)} />
            </View>
        )
    }
}

export default AuthScreen;

const authStyles = StyleSheet.create({
    btnContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    text:{
        textAlign: 'center',
        width: '100%',
        marginBottom: 20,
    },
    btn:{
        width: 200,
        alignItems: "center"
    }
})