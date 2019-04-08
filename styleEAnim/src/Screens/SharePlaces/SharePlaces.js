import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import MainText from '../../components/UI/MainText/MainText';
import Header from '../../components/UI/Header/Header';
import PlaceInput from '../../components/PlaceInput/PlaceInput';
import PickImage from '../../components/PickImage/PickImage';
import PickLocation from '../../components/PickLocation/PickLocation';

class SharePlacesScreens extends Component {
    state = {
        placeName: ""
    };

    constructor(props){
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this))
    }

    onChangePlaceName(val){
        this.setState({
          ...this.state,
          placeName: val
        })
    }

    onNavigatorEvent(event){
        if(event.type ==='NavBarButtonPress'){
            if(event.id === 'sideDrawerToggle'){
                this.props.navigator.toggleDrawer({
                    side: 'left'
                })
            }
        }
    }

    placeAddedHandler() {
        let {placeName} = this.state;
        if(placeName.trim()){
            this.props.onPlaceAdded(placeName);
            this.onChangePlaceName('');
        }
    }

    render(){
        let {placeName} = this.state;
        return (
            <ScrollView>
                <View style={styles.container}>
                    <MainText>
                        <Header>Compartilhe um local conosco</Header>
                    </MainText>    
                    <PickImage style={styles}/>
                    <PickLocation style={styles}/>
                    <PlaceInput placeName={placeName} onChangePlaceName={this.onChangePlaceName.bind(this)} />
                    <View style={styles.button}>
                        <Button title="Compalrtilhar local"  onPress={this.placeAddedHandler.bind(this)}/>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
    },

    placeholder:{
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "#eee",
        width: "80%",
        height: 200,
    },

    button:{
        margin: 8
    }
});

const matchDsipatchToProps = dispatch => {
    return {
        onPlaceAdded: placeName => dispatch(actions.addPlace(placeName))
    }
}

export default connect(null, matchDsipatchToProps)(SharePlacesScreens);