import { useNavigation } from "@react-navigation/native"
import { useCallback } from "react"
import { FlatList, StyleSheet, View, Text } from "react-native"
import { IPlace } from "../../models/place-model"
import { Colors } from "../../theme/colors"
import { NavigationStack } from "../../types/navigation"
import PlaceItem from "./place-item"


const PlacesList = ({places}:{places:IPlace[]})=>{
	const navigation = useNavigation<NavigationStack<'PlaceDetails'>>()

	const onSelectHandler = useCallback((id:string)=>{
		navigation.navigate('PlaceDetails',{id: id})
	},[navigation])

	return (
		<>
			{places?.length > 0?
				<FlatList 
					style={Styles.root}
					data={places} 
					keyExtractor={(item)=>item.id} 
					renderItem={
						({item})=><PlaceItem place={item} onSelect={onSelectHandler} />
					} 
				/>
			:
				<View style={Styles.no_places}>
					<Text style={Styles.no_places_text}>No Places added yet! add a new one</Text>
				</View>
			}
		</>
	)
}

export default PlacesList

const Styles = StyleSheet.create({
	root:{
		margin:12,
	},
	no_places:{
		flex:1,
		justifyContent:'center',
		alignItems:'center'
	},
	no_places_text:{
		fontSize:16,
		color: Colors.primary200
	}
})