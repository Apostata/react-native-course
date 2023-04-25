import { useCallback, useState } from "react"
import { ScrollView,StyleSheet } from "react-native"
import Place from "../../models/place-model"
import { GeolocationType } from "../../types/location"
import Input from "../UI/input"
import RegularButton from "../UI/regular-button"
import ImagePicker from "./image-picker"
import LocationPicker from "./location-picker"

const PlaceAddForm = ({onCreatePlace}:{onCreatePlace:(place:Place)=>void})=>{
	const [name, setName] = useState('')
	const [pickedImage, setPickedImage] = useState<string>()
	const [pickedLoaction, setPickedLocation] = useState<GeolocationType>()

	const onChangeNameHandler= (value:string) =>{
		setName(value)
	}

	const onPickedImageHandler = (image:string)=>{
		setPickedImage(image)
	}
	const onPickedLocationHandler = useCallback((geolocation:GeolocationType)=>{
		setPickedLocation(geolocation)
	},[])

	const saveHandler = ()=>{
		const newPlace = new Place(name, pickedImage!, pickedLoaction!);
		onCreatePlace(newPlace)
	}

	return (
		<ScrollView style={Styles.root}>
			<Input 
				label='Title' 
				onChangeText={onChangeNameHandler} 
				value={name}
			/>
			<ImagePicker onPickedImage={onPickedImageHandler}/>
			<LocationPicker onPickedLocation={onPickedLocationHandler}/>
			<RegularButton onPress={saveHandler} >Add place</RegularButton>
		</ScrollView>
	)
}

export default PlaceAddForm

const Styles = StyleSheet.create({
	root:{
		flex:1,
		padding:24
	}
})