/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

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
    const {places} = this.state
    const placesOutput = places.map((place, idx)=><Text key={idx}>{place}</Text>)

    return (
      <View style={testeStyle.container}>
        <Text>{this.state.placeName}</Text>

        <View style={testeStyle.inputContainer}>
          <TextInput
            style ={testeStyle.placeInput}
            placeholder="Awesome Place for an input"
            value={this.state.placeName}
            onChangeText={this.onChangePlaceName.bind(this)} />

            <Button title="Add" style={testeStyle.placeButton} onPress={this.placeSubmitHandler.bind(this)}/>
        </View>
        <View>
          {placesOutput}
        </View>
      </View>
      
    );
  }
}

const testeStyle = StyleSheet.create({
  container:{
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  inputContainer:{
    //flex:1,
    flexDirection:"row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%"
  },
  placeInput:{
    width:"70%"
  },
  placeButton:{
    width:"30%"
  }
});
























const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
