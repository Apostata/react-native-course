import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import InputContainer from '../../components/InputContainer/InputContainer';
import * as actions from '../../store/actions';

class SharePlacesScreens extends Component {

    constructor(props){
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this))
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

    placeAddedHandler(placeName) {
        this.props.onPlaceAdded(placeName);
    }

    render(){
        return (
            <View>
                <InputContainer onItemAdded={(name)=>this.placeAddedHandler(name)}/>
            </View>
        )
    }
}

const matchDsipatchToProps = dispatch => {
    return {
        onPlaceAdded: placeName => dispatch(actions.addPlace(placeName))
    }
}

export default connect(null, matchDsipatchToProps)(SharePlacesScreens);