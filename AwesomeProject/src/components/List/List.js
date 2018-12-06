import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import ListItem from './ListItem/ListItem';
 
const list = (props) => {
    const outoPutList = props.places.map((place, idx)=>{
        return (
            <ListItem 
                key={idx}
                placeName={place}
                onPressed={() => props.onDeleteItem(idx)}/>
        );
    });
 
    return (
        <ScrollView style = {componentStyles.list}>
            {outoPutList}
        </ScrollView>
    );
};
 
const componentStyles = StyleSheet.create({
    list:{
        width: "100%"
    }
}) 
 
export default list;