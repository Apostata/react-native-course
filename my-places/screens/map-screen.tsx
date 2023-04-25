import { useNavigation, useRoute } from '@react-navigation/native'
import { useCallback, useLayoutEffect, useState } from 'react'
import {Alert, ColorValue, StyleSheet} from 'react-native'
import MapView, { MapPressEvent, Marker } from "react-native-maps"
import IconButton from '../components/UI/icon-button'
import { MapLocation } from '../types/location'
import { NavigationStack, RouteStack } from '../types/navigation'
import { getInitialCoords } from '../utils/location'

const MapScreen = ()=>{
	const route = useRoute<RouteStack<'Map'>>()
	const routeLocation = route?.params?.location || undefined
	const [selectedLocation, setSelectedLocation] = useState<MapLocation>(routeLocation as MapLocation)
	const navigation = useNavigation<NavigationStack<'AddPlace'>>()

	
	const initialCoorsd = !routeLocation? getInitialCoords() : routeLocation

	const region ={
		latitude:  initialCoorsd.latitude,
		longitude:  initialCoorsd.longitude,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421,
	}


	const selectLocationHandler = (event: MapPressEvent)=>{
		const {latitude, longitude} = event.nativeEvent.coordinate
		setSelectedLocation({latitude, longitude})
	}

	const savePickLocationHandler = useCallback(()=>{
		if(!selectedLocation){
			Alert.alert('No location picked',
			'To pcick a location tap on the map first!'
			)
			return
		}
		navigation.navigate('AddPlace',{location:selectedLocation})
	},[navigation, selectedLocation])

	useLayoutEffect(()=>{
		if(!routeLocation){
			navigation.setOptions({
				headerRight:({tintColor}:{tintColor:ColorValue})=> 
					<IconButton 
						icon='save' 
						color={tintColor} 
						size={24} 
						onPress={savePickLocationHandler}
					/>
			})
		}
	},[navigation, savePickLocationHandler, routeLocation])

	return(
		<MapView
		style={Styles.root}
		initialRegion={region}
		onPress={selectLocationHandler}
	>
		{selectedLocation && 
		<Marker
			title='My Location'
			coordinate={{...selectedLocation}}
		/>}
	</MapView>
	)
}

export default MapScreen

const Styles = StyleSheet.create({
	root:{
		flex: 1
	}
})