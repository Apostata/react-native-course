import React from 'react';
import {View, StyleSheet} from 'react-native';
import ListItem from './ListItem/ListItem';
 
const list = (props) => {
    const outoPutList = props.places.map((place, idx)=>{
        return (<ListItem key={idx} placeName={place} />);
    });
 
    return (
        <View style = {componentStyles.list}>
            {outoPutList}
        </View>
    );
};
 
const componentStyles = StyleSheet.create({
    list:{
        width: "100%"
    }
}) 
 
export default list;