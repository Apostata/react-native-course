import * as actionTypes from '../actions/actionTypes';
import {guid} from '../../utils/helperFunctions';

const initialState ={
    places: [],
    selectedPlace: null
};

const reducer = (state = initialState, action)=>{
    switch(action.type){
        
        case actionTypes.ADD_PLACE:
            
            const id = `${guid()}`;//FlatList precisa receber uma key como string
            return {
                ...state,
                places: state.places.concat({
                    key: id,
                    name: action.placeName,
                    image: {
                        uri: "https://demo.yootheme.com/themes/wordpress/2013/showroom/wp-content/uploads/yootheme/widgetkit/lightbox/image6_lightbox.jpg"
                    }
                })
            };

        case actionTypes.DELETE_PLACE:
            return{
                ...state,
                places: state.places.filter((place)=>{
                    return state.selectedPlace.key !== place.key;
                }),
                selectedPlace: null
            };

        case actionTypes.SELECT_PLACE:
            return{
                ...state,
                selectedPlace: state.places.find(place=>{
                    return place.key === action.key;
                })
            };

        case actionTypes.DESELECT_PLACE:
            return{
                ...state,
                selectedPlace: null
            };

        default:
            return state;
    }
}

export default reducer;
