import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import Input from '../../components/UI/Input/Input';
import Header from '../../components/UI/Header/Header';
import MainText from '../../components/UI/MainText/MainText'
import ButtonWithBg from  '../../components/UI/ButtonWithBg/ButtonWithBg'
import startMainTabs from '../MainTabs/MainTabs';
import backgroundImage from '../../assets/images/background.jpg';

class AuthScreen extends Component {
    loginHandler(){
        startMainTabs();
    }

    render(){
        return (
            <ImageBackground source={backgroundImage} style={styles.bgImage} >   
                <View style={styles.container}>
                        
                        <MainText>
                            <Header>Por favor, Logue-se</Header>
                        </MainText>    
                        <ButtonWithBg color="#29aaf4" onPress={this.loginHandler.bind(this)}>Logar-se</ButtonWithBg>
                        <View style={styles.inputContainer}>   
                            <Input placeholder="seuemail@domínio.com" style={styles.input} />
                            <Input placeholder="Senha" style={styles.input} />
                            <Input placeholder="Confirme sua senha" style={styles.input} />
                        </View>
                        <ButtonWithBg color="#29aaf4">Enviar</ButtonWithBg>
                    
                </View>
            </ImageBackground>
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

    bgImage:{
        width: "100%",
        flex: 1
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
    }
})