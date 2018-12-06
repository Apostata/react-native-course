import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
//import ListItem from './src/components/List//ListItem/ListItem';
import List from './src/components/List/List';
import InputContainer from './src/components/InputContainer/InputContainer';
import {guid} from './src/utils/helperFunctions';
import placeImage from './src/assets/demo_image.jpg';


export default class App extends Component{
  state = {
      places: []
  };
  
  onItemAdded(placeName){
    const id = `${guid()}`;//FlatList precisa receber uma key como string

    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: id,
          place: placeName,
          image: placeImage
        })
      };
    });
  }

  deletePlace(key){
    this.setState(prevState => {
      return{
        places: prevState.places.filter((place)=>{
          return key !== place.key;
        })
      }
    })
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
          onDeleteItem={this.deletePlace.bind(this)}
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
