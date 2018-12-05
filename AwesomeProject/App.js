import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';
//import ListItem from './src/components/List//ListItem/ListItem';
import List from './src/components/List/List';
import InputContainer from './src/components/InputContainer/InputContainer';
type Props = {};
export default class App extends Component<Props> {
  state = {
      placeName: '',
      places: []
  };
 
  onChangePlaceName(val){
    //alert(event);
 
    this.setState({
      ...this.setState,
      placeName: val
    })
  }
 
  placeSubmitHandler(){
    if(this.state.placeName.trim() === "" ) return;
    this.setState(prevState => {
      return {
        placeName:"",
        places: prevState.places.concat(prevState.placeName)
      };
    });
  }
 
  render() {
    return (
      <View style={componentStyles.container}>
        <Text>{this.state.placeName}</Text>
 
       
        <InputContainer
          inputValue={this.state.placeName}
          placeholder={"Awesome Place for an input"}
          changeText={this.onChangePlaceName.bind(this)}
          btnTitle={"Adiciona item à lista"}
          clickButton={this.placeSubmitHandler.bind(this)}
        />
 
        <List 
          places={this.state.places}
        />
 
      </View>
      
    );
  }
}
 
const componentStyles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});
