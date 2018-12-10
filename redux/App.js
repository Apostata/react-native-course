import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import * as actions from './src/store/actions/index';
import List from './src/components/List/List';
import InputContainer from './src/components/InputContainer/InputContainer';
import {guid} from './src/utils/helperFunctions';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';

export class App extends Component{
  onAddPlace = (placeName)=>{
    console.log('Add place');
    this.props.onItemAdded(placeName);
  }

  render() {  
    
    return (
      <View style={componentStyles.container}>
         <PlaceDetail
          place={this.props.selectedPlace}
          deletePlace={this.props.deletePlace}
          hideModal={this.props.hideModal}
        />
 
        <InputContainer
          onItemAdded={/*this.props.onItemAdded*/ this.onAddPlace}
        />
         <List 
          places={this.props.places}
          onSelectItem={this.props.onSelectPlace}
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

const mapStateToProps = state =>{
  return{
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  }
};

const mapDispatchToProps = dispatch =>{
  return{
    onItemAdded: placeName => dispatch(actions.addPlace(placeName)),
    deletePlace: () => dispatch(actions.deletePlace()),
    onSelectPlace: key => dispatch(actions.selectPlace(key)),
    hideModal: () => dispatch(actions.deselectPlace())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);