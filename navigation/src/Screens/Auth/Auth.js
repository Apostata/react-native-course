import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import startMainTabs from '../MainTabs/MainTabs';

class AuthScreen extends Component {
    loginHandler(){
        startMainTabs();
    }

    render(){
        return (
            <View>
                <Text>Auth screen</Text>
                <Button title="Login" onPress={this.loginHandler.bind(this)} />
            </View>
        )
    }
}

export default AuthScreen;