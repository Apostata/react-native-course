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
        viewMode: Dimensions.get('window').height < 500 ? "landscape" : "portrait"
    };

    constructor(props){
        super(props);
    }

    componentDidMount(){
        Dimensions.addEventListener('change', this.updateStyles);
    }

    componentWillUnmount(){
        Dimensions.removeEventListener('change', this.updateStyles);
    }

    updateStyles = (dims) =>{
        this.setState({
            viewMode: dims.window.height < 500 ? "landscape" : "portrait"
        });
    }

    loginHandler(){
        startMainTabs();
    }

    render(){
        const {viewMode} = this.state;
        let headingText = null;
        if(viewMode === "portrait"){
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
                            
                            <View style={styles[`${viewMode}PasswordContainer`]}>
                                <View style={styles[`${viewMode}PasswordWrapper`]}>
                                    <Input placeholder="Senha" style={[styles.input, styles.inputInside]} />
                                </View>
                                <View style={styles[`${viewMode}PasswordWrapper`]}>
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
    landscapePasswordContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
    },

    portraitPasswordContainer:{
        flexDirection: "column",
        justifyContent: "flex-start",
    },

    landscapePasswordWrapper:{
        width: "45%"
    },

    portraitPasswordWrapper:{
        width: "100%"
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
    }
})