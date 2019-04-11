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
        viewMode: Dimensions.get('window').height < 500 ? "landscape" : "portrait",
        controls:{
            email:{
                value: "",
                valid: false,
                rules: {
                    isEmail: true
                }
            },
            password:{
                value: "",
                valid: false,
                rules: {
                    minLength: 6
                }
            },
            confirmPassword:{
                value: "",
                valid: false,
                rules: {
                    equalTo: 'password'
                }
            }
        }    
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

    updateInputState = (key, value) =>{
        this.setState(prevState => {
            return {
                controls:{
                    ...prevState.controls,
                    [key]:{
                        ...prevState.controls[key],
                        value: value,
                    } 
                }
            }
        })
    }

    loginHandler(){
        startMainTabs();
    }

    render(){
        const {viewMode, controls} = this.state;
        const {email, password, confirmPassword} = controls
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
                            <Input 
                                placeholder="seuemail@domínio.com"
                                style={styles.input}
                                value={email.value}
                                onChangeText={(value)=>this.updateInputState('email', value)}
                            />
                            
                            <View style={styles[`${viewMode}PasswordContainer`]}>
                                <View style={styles[`${viewMode}PasswordWrapper`]}>
                                    <Input 
                                        placeholder="Senha"
                                        style={[styles.input, styles.inputInside]}
                                        value={password.value}
                                        onChangeText={(value)=>this.updateInputState('password', value)}
                                    />
                                </View>
                                <View style={styles[`${viewMode}PasswordWrapper`]}>
                                    <Input 
                                        placeholder="Confirme sua senha" 
                                        style={[styles.input, styles.inputInside]}
                                        value={confirmPassword.value}
                                        onChangeText={(value)=>this.updateInputState('confirmPassword', value)}
                                    />
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