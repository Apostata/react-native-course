import { FlatList, StyleSheet, View, Text } from "react-native"
import { IPlace } from "../../models/place-model"
import { Colors } from "../../theme/colors"
import PlaceItem from "./place-item"


const PlacesList = ({places}:{places:IPlace[]})=>{
	return (
		<>
			{places?.length > 0?
				<FlatList 
					data={places} 
					keyExtractor={(item)=>item.id} 
					renderItem={
						({item})=><PlaceItem place={item} onSelect={()=>{}} />
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