import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { connect } from 'react-redux';

import List from '../../components/List/List';

class FindPlacesScreens extends Component {
    static navigatorStyle = {
        navBarButtonColor: "orange"
    };

    state = {
        placesLoaded : false,
        removeAnim : new Animated.Value(1),
        placesAnim: new Animated.Value(0)
    };

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

    placesSearch = () =>{
        Animated.timing(this.state.removeAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true
        }).start(()=>{
            this.setState({
                placesLoaded: true
            });
            this.placesLoaded();
        })
    }

    placesLoaded = () =>{
        Animated.timing(this.state.placesAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true
        }).start()
    }

    render(){
        const {places} = this.props;
        const {placesLoaded} = this.state;
        let content = (
            <Animated.View style={{
                opacity: this.state.removeAnim,
                transform:[
                    {scale: this.state.removeAnim.interpolate({
                        inputRange:[0, 1], //os valores reais utilizados
                        outputRange:[12, 1]
                    })}
                ]
            }}>
                <TouchableOpacity onPress={this.placesSearch}>
                    <View style={styles.searchButton}>
                        <Text style={styles.searchButtonText}>Buscar lugares</Text>
                    </View>
                </TouchableOpacity>
            </Animated.View>
        );

        if(placesLoaded){
            content = (
                <Animated.View style={{
                    opacity: this.state.placesAnim
                }}>
                    <List places={places} onSelectItem={this.itemSelectedHandler.bind(this)}/>
                </Animated.View>
            );
        }
        
        return (
            <View style={!placesLoaded ? styles.buttonContainer : null }>
               {content}
            </View>
        )
    }
}

const mapStateToProps = state =>{
    return{
        places: state.places.places
    }
}

const styles = StyleSheet.create({
    buttonContainer:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    searchButton:{
        borderColor: "orange",
        borderWidth: 1,
        borderRadius: 50,
        padding: 20
    },
    searchButtonText:{
        color: "orange",
        fontWeight: "bold",
        fontSize: 26
    }
});

export default connect(mapStateToProps)(FindPlacesScreens);