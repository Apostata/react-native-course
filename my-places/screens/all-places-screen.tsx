import { useIsFocused, useRoute } from "@react-navigation/native"
import { useEffect, useState } from "react"
import { View, Text } from "react-native"
import PlacesList from "../components/Places/places-list"
import { fetchPlaces } from "../db"
import Place from "../models/place-model"

const AllPlacesScreen = ()=>{

	const isFocused =  useIsFocused()
	const [places, setPlaces] =useState<Place[]>([])
	
	useEffect(()=>{
		fetchPlaces()
		.then((result)=>{
			setPlaces(result as Place[])
		}).catch((e)=>{
			console.log(e)
		})
		
	},[isFocused])

	return <PlacesList places={places} />
}

export default AllPlacesScreen