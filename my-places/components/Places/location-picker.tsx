import { useNavigation, NavigationAction, useRoute } from "@react-navigation/native"
import { getCurrentPositionAsync, useForegroundPermissions, PermissionStatus, Accuracy, LocationObject } from "expo-location"
import { useEffect, useState } from "react"
import { View, StyleSheet, Alert, Image, Text } from "react-native"
import { Colors } from "../../theme/colors"
import { MapLocation } from "../../types/location"
import { NavigationStack, RouteStack } from "../../types/navigation"
import { getAddressByCoors, getMapImagePreviewUrl } from "../../utils/location"
import OutlinedButton from "../UI/outlined-button"

const LocationPicker = ({onPickedLocation}:{onPickedLocation:({coords, address}:{coords:MapLocation, address:string})=>void})=>{
	const [pickedLocation, setPickedLocation] = useState<MapLocation>()
	
	const [locationPermissionInformation, requestPermission] = useForegroundPermissions()
	const nagivation = useNavigation<NavigationStack<'Map'>>()
	const route = useRoute<RouteStack<'AddPlace'>>()
	const routeLocation = route.params?.location 

	const verifyPermisssions = async()=>{
		if(locationPermissionInformation?.status === PermissionStatus.UNDETERMINED){
			const permissionsResponse = await requestPermission()
			return permissionsResponse.granted
		}
		if(locationPermissionInformation?.status === PermissionStatus.DENIED){
			Alert.alert('Insuficient Permissions!', 'You need to grant location	permissions, to use this app')
			return false
		}
		return true
	}

	const getLocationHandler = async()=>{
		try{
			const permission = await verifyPermisssions()

			if(!permission){
				return;
			}

			const {coords} = await getCurrentPositionAsync({ accuracy: Accuracy.Highest })
			
			setPickedLocation(coords)
			console.log(coords)
		}catch(e){
			console.log(e)
		}
	}

	const pickOnMapHandler = ()=>{
		nagivation.navigate('Map')
	}

	useEffect(()=>{
		setPickedLocation(routeLocation)
	},[routeLocation])

	useEffect(()=>{
		if(pickedLocation){
			const {latitude, longitude} = pickedLocation
			getAddressByCoors(latitude, longitude)
			.then((resp)=>{
				onPickedLocation({coords:pickedLocation, address: resp})
			})
			
		} 
	},[pickedLocation, onPickedLocation])

	return (
		<View>
			<View style={Styles.imagePreview}>
				{pickedLocation? 
					<Image  style={Styles.image} source={{uri: getMapImagePreviewUrl(pickedLocation.latitude, pickedLocation.longitude)}}/>
					:
					<Text>No images taken yet!</Text>
				}
			</View>
			<View style={Styles.actions}>
				<OutlinedButton onPress={getLocationHandler} icon='location'>Locate User</OutlinedButton>
				<OutlinedButton onPress={pickOnMapHandler} icon='map'>Pick on map</OutlinedButton>
			</View>
		</View>
	)
}

export default LocationPicker

const Styles = StyleSheet.create({
	imagePreview:{
		width:'100%',
		height:200,
		marginVertical:8,
		justifyContent:'center',
		alignItems: 'center',
		backgroundColor: Colors.primary100,
		borderRadius:4
	},
	image:{
		width: '100%',
		height:'100%',
		borderRadius:4
	},
	actions:{
		flexDirection:'row',
		justifyContent:'space-between',
		alignItems:'center'
	}
})