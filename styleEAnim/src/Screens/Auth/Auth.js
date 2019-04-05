import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Input from '../../components/UI/Input/Input';
import Header from '../../components/UI/Header/Header';
import MainText from '../../components/UI/MainText/MainText'
import startMainTabs from '../MainTabs/MainTabs';

class AuthScreen extends Component {
    loginHandler(){
        startMainTabs();
    }

    render(){
        return (
            <View style={styles.container}>
                <MainText>
                    <Header>Por favor, Logue-se</Header>
                </MainText>    
                <Button style={styles.btn} title="Ir para o Login" onPress={this.loginHandler.bind(this)} />
                <View style={styles.inputContainer}>   
                    <Input placeholder="seuemail@domínio.com" style={styles.input} />
                    <Input placeholder="Senha" style={[styles.input, {borderColor: "red"}]} />
                    <Input placeholder="Confirme sua senha" style={styles.input} />
                </View>
                <Button style={styles.btn} title="Enviar" />
            </View>
        )
    }
}

export default AuthScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    text:{
        textAlign: 'center',
        width: '100%',
        marginBottom: 20
    },
    inputContainer:{
        width: "80%"
    },
    input:{
       backgroundColor: "#eee"
    },
    btn:{
        alignItems: "center"
    }
})