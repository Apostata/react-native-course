import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import ListItem from './ListItem/ListItem';

 
const list = (props) => { 
    return (
        <FlatList
            style = {componentStyles.list}
            data={props.places}
            renderItem={(data)=>(
                <ListItem 
                    placeName={data.item.place}
                    placeImage={data.item.image}
                    onPressed={() => props.onDeleteItem(data.item.key)}
                />
            )}
        />
    );
};
 
const componentStyles = StyleSheet.create({
    list:{
        width: "100%"
    }
}) 
 
export default list;