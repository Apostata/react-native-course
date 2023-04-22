import { Image, Pressable, View, Text, StyleSheet } from "react-native"
import { IPlace } from "../../models/place-model"

const PlaceItem = (
	{place:{id, imageUrl, title, address, location}, onSelect}
	:{place: IPlace, onSelect:()=>void}
	)=>{
	return (
		<Pressable>
			<Image source={{uri:imageUrl}} />
			<View>
				<Text>{title}</Text>
				<Text>{address}</Text>
			</View>
		</Pressable>
	)
}

export default PlaceItem

const Styles = StyleSheet.create({
	
})