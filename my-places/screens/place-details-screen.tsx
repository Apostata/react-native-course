import { useRoute, useNavigation } from "@react-navigation/native"
import { useEffect, useLayoutEffect, useState } from "react"
import { ScrollView, Text, Image, View, StyleSheet } from "react-native"
import OutlinedButton from "../components/UI/outlined-button"
import { fetchPlaceById } from "../db"
import Place from "../models/place-model"
import { Colors } from "../theme/colors"
import { NavigationStack, RouteStack } from "../types/navigation"

const PlaceDetailsScreen = ()=>{
	const route = useRoute<RouteStack<'PlaceDetails'>>()
	const navigation =  useNavigation<NavigationStack<'PlaceDetails'>>()

	const id = route?.params?.id
	const [place, setPlace] = useState<Place>()

	useEffect(()=>{
		if(id){
			fetchPlaceById(id).then((result)=>{
				
				setPlace(result as Place)
				navigation.setOptions({
					title: (result as Place)?.title
				})
			})
		}
	},[id])

	const ViwOnMapHandler = ()=>{
		console.log(place?.location)
		navigation.navigate('Map',{
			location:place?.location
		})
	}


	if(!place){
		return (
			<View style ={Styles.fallback}>
				<Text style={Styles.address} >Loadgin place data...</Text>
			</View>
		)
	}

	return (
		<ScrollView>
			<Image source={{uri:place.imageUrl}} style={Styles.image}/>
			<View style={Styles.locationContainer}>
				<View style={Styles.addressContainer}>
					<Text style={Styles.address}>{place.address}</Text>
				</View>
				<OutlinedButton icon='map' onPress={ViwOnMapHandler}>View on Map</OutlinedButton>
			</View>
			
		</ScrollView>
	)
}

export default PlaceDetailsScreen

const Styles = StyleSheet.create({
	fallback:{
		flex:1,
		justifyContent:'center',
		alignItems:'center'
	},
	image:{
		height: '35%',
		minHeight: 300,
		width:'100%'
	},
	locationContainer:{
		justifyContent:'center',
		alignItems: 'center',
	}, 
	addressContainer:{
		padding:20,
	},
	address:{
		color: Colors.primary500,
		textAlign:'center',
		fontWeight:'bold',
		fontSize:16
	}
})