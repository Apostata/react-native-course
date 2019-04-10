import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import Input from '../../components/UI/Input/Input';
import Header from '../../components/UI/Header/Header';
import MainText from '../../components/UI/MainText/MainText'
import ButtonWithBg from  '../../components/UI/ButtonWithBg/ButtonWithBg'
import startMainTabs from '../MainTabs/MainTabs';
import backgroundImage from '../../assets/images/background.jpg';

class AuthScreen extends Component {

    state = {
        resStyles:{
            direction: "column",
            justifyContent: 'flex-start',
            width: '100%',
            showHeader: true
        }
    };

    constructor(props){
        super(props);
        Dimensions.addEventListener('change', dim =>{
            this.setState({
                resStyles:{
                    direction: Dimensions.get('window').height < 500? "row" : "column",
                    justifyContent: Dimensions.get('window').height < 500? 'space-between' : "flex-start",
                    width: Dimensions.get('window').height < 500? '45%' : '100%',
                    showHeader: Dimensions.get('window').height < 500? false : true
                }
            });
        });
    }

    loginHandler(){
        startMainTabs();
    }

    render(){
        const {resStyles} = this.state;
        let headingText = null;
        if(resStyles.showHeader){
            headingText = (
                <MainText>
                    <Header>Por favor, Logue-se</Header>
                </MainText>
            );
        }

        return (
            <ImageBackground source={backgroundImage} style={styles.bgImage} >   
                <View style={styles.container}>
                        {headingText}                            
                        <ButtonWithBg color="#29aaf4" onPress={this.loginHandler.bind(this)}>Logar-se</ButtonWithBg>
                        <View style={styles.inputContainer}>   
                            <Input placeholder="seuemail@domínio.com" style={styles.input} />
                            
                            <View style={{
                                flexDirection: resStyles.direction, 
                                justifyContent: resStyles.justifyContent
                            }}>
                                <View style={{width: resStyles.width}}>
                                    <Input placeholder="Senha" style={[styles.input, styles.inputInside]} />
                                </View>
                                <View style={{width: resStyles.width}}>
                                    <Input placeholder="Confirme sua senha" style={[styles.input, styles.inputInside]} />
                                </View>
                            </View>
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
    passwordContainer:{
        flexDirection: Dimensions.get('window').height < 500 ? "row" : "column",
        justifyContent: "space-between",
    },

    passwordWrapper:{
        width:  Dimensions.get('window').height < 500 ? "45%" : "100%"
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
        width: "80%",
        justifyContent: "space-between",
    },
    
    input:{
       backgroundColor: "#eee"
    },

    // inputInside:{
    //     width: "45%"
    // }
})