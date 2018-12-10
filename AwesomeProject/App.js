import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
//import ListItem from './src/components/List//ListItem/ListItem';
import List from './src/components/List/List';
import InputContainer from './src/components/InputContainer/InputContainer';
import {guid} from './src/utils/helperFunctions';
//import placeImage from './src/assets/demo_image.jpg';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
import placeDetail from './src/components/PlaceDetail/PlaceDetail';

export default class App extends Component{
  state = {
      places: [],
      selectedPlace  :null
  };
  
  onItemAdded(placeName){
    const id = `${guid()}`;//FlatList precisa receber uma key como string

    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: id,
          name: placeName,
          image: {
            uri: "https://demo.yootheme.com/themes/wordpress/2013/showroom/wp-content/uploads/yootheme/widgetkit/lightbox/image6_lightbox.jpg"
          }
        })
      };
    });
  }

  selectPlace(key){
    this.setState(prevState => {
      return{
        selectedPlace: prevState.places.find(place=>{
          return place.key === key;
        })
      }
    });
  }

  deletePlace(){
    this.setState(prevState => {
      return{
        places: prevState.places.filter((place)=>{
          return prevState.selectedPlace.key !== place.key;
        }),
        selectedPlace:null
      }
    })
  }

  hideModal(){
    this.setState({
      selectedPlace: null
    });
  }
 
  render() {
    
    return (
      <View style={componentStyles.container}>
         <PlaceDetail
          place={this.state.selectedPlace}
          deletePlace={this.deletePlace.bind(this)}
          hideModal={this.hideModal.bind(this)}
        />
 
        <InputContainer
          onItemAdded={this.onItemAdded.bind(this)}
        />
        <List 
          places={this.state.places}
          onSelectItem={this.selectPlace.bind(this)}
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
