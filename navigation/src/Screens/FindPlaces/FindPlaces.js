import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

import List from '../../components/List/List';

class FindPlacesScreens extends Component {
    constructor(props){
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this))
    }
    
    onNavigatorEvent(event){
        console.log(event);
        if(event.type ==='NavBarButtonPress'){
            if(event.id === 'sideDrawerToggle'){
                this.props.navigator.toggleDrawer({
                    side: 'left'
                })
            }
        }
    }

    itemSelectedHandler(key){
        let {places} = this.props;
        let place = places.find(place => {
            return place.key === key
        });
        this.props.navigator.push({
            screen: 'navigation.PlaceDetailScreen',
            title: place.name,
            passProps:{
                place: place
            }
        });
    }

    render(){
        const {places} = this.props;
        return (
            <View>
               <List places={places} onSelectItem={this.itemSelectedHandler.bind(this)}/>
            </View>
        )
    }
}

const mapStateToProps = state =>{
    return{
        places: state.places.places
    }
}

export default connect(mapStateToProps)(FindPlacesScreens);