import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';
//import ListItem from './src/components/List//ListItem/ListItem';
import List from './src/components/List/List';
import InputContainer from './src/components/InputContainer/InputContainer';
type Props = {};
export default class App extends Component<Props> {
  state = {
      places: []
  };
  
  onItemAdded(placeName){
    this.setState(prevState => {
      return {
        places: prevState.places.concat(placeName)
      };
    });
  }
 
  render() {
    return (
      <View style={componentStyles.container}>
        <Text>{this.state.placeName}</Text>
 
       
        <InputContainer
          onItemAdded={this.onItemAdded.bind(this)}
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
