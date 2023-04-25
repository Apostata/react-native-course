import PlaceAddForm from "../components/Places/place-add-form"
import Place from "../models/place-model"
import { useNavigation } from "@react-navigation/native"
import { NavigationStack } from "../types/navigation"
import { insertPlace } from "../db"

const AddPlaceScreen = ()=>{
	const navigation = useNavigation<NavigationStack<'AllPlaces'>>()
	const onCreatePlaceHandler = async(place:Place)=>{
		await insertPlace(place)
		navigation.navigate('AllPlaces')
	}

	return <PlaceAddForm onCreatePlace={onCreatePlaceHandler}/>
}

export default AddPlaceScreen