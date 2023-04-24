# Using Native Devices features

## Image picker
`expo install expo-image-picker`
 configure permissions:

at `app.json` file. add a plugins sections, if isn't already there, with the folloing instructions:
```json
"expo":{
	...
	"plugins": [
		[
			"expo-image-picker",
			{
			"cameraPermission": "The app accesses your camera to let you register your favorite places."
			}
		]
	]
	...
}
```
### Take an Image
 ```tsx
 import { launchCameraAsync } from 'expo-image-picker'
import {Button, View} from 'react-native'

const ImagePicker = () =>{
	const takeImageHandler = async() =>{
		const cameraImage = await launchCameraAsync({
			allowsEditing: true,
			aspect:[16,9],
			quality: 0.5
		});
		console.log(cameraImage)
	}

	return (
		<View>
			<View>

			</View>
			<Button title='Take Image' onPress={takeImageHandler}/>
		</View>
	)
}

export default ImagePicker

```

### Handle permissions oi IOS
```tsx
import { launchCameraAsync, useCameraPermissions, PermissionStatus } from 'expo-image-picker'
import {Button, View, Alert} from 'react-native'

const ImagePicker = () =>{
	const [pickedImage, setImagePicker] = useState()
	const [cameraPersmissionsInformation, requestPermission] = useCameraPermissions()
	
	const verifypersmissions = async ()=>{
		if(cameraPersmissionsInformation?.status === PermissionStatus.UNDETERMINED){
			const permissionsResponse = await requestPermission()
			return permissionsResponse.granted
		}
		if(cameraPersmissionsInformation?.status === PermissionStatus.DENIED){
			Alert.alert('Insuficient Permissions!', 'You need to grant camera permissions, to use this app')
			return false
		}
		return true
	}

	const takeImageHandler = async() =>{
		const hasPermission = await verifypersmissions()
		if(!hasPermission){
			return;
		}
		const cameraImage = await launchCameraAsync({
			allowsEditing: true,
			aspect:[16,9],
			quality: 0.5
		});
		console.log(cameraImage)
	}

	return (
		<View>
			<View>
				<Image source={{uri:}} />
			</View>
			<Button title='Take Image' onPress={takeImageHandler}/>
		</View>
	)
}

export default ImagePicker

```
## Location picker
`expo install expo-location`

 configure permissions:

at `app.json` file. add a plugins sections, if isn't already there, with the folloing instructions:
```json
"expo":{
	...
	"plugins": [
		[
        "expo-location",
        {
          "locationAlwaysAndWhenInUsePermission": "Allow the app to use your location."
        }
      ]
	]
	...
}
```

### Get users Location
create a component to render get a location an a image Preview
```tsx
import { getCurrentPositionAsync, useForegroundPermissions, PermissionStatus, Accuracy, LocationObject } from "expo-location"
...

const LocationPicker = ()=>{
	const [pickedLocation, setPickedLocation] = useState<LocationObject>()
	const [locationPermissionInformation, requestPermission] = useForegroundPermissions()

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
			const location = await getCurrentPositionAsync({ accuracy: Accuracy.Highest })
			setPickedLocation(location)
		}catch(e){
			console.log(e)
		}
	}

	return (
		<View>
			<View style={Styles.imagePreview}>
				{pickedLocation? 
					<Image  style={Styles.image} source={{uri: getMapImagePreviewUrl(pickedLocation.coords.latitude, pickedLocation.coords.longitude)}}/>
					:
					<Text>No images taken yet!</Text>
				}
			</View>
			<View style={Styles.actions}>
				<OutlinedButton onPress={getLocationHandler} icon='location'>Locate User</OutlinedButton>
				<OutlinedButton onPress={()=>{}} icon='map'>Pick on map</OutlinedButton>
			</View>
		</View>
	)
}

export default LocationPicker

const Styles = StyleSheet.create({
	...
})

```

#### adding image Preview with googleMaps
Create an project in GCP (Google Clound Platfomr), get the api-key, then you can use a simple function to return a image from google map static,
```ts
import {GOOGLE_MAP_API_KEY} from "@env"

export const getMapImagePreviewUrl = (lat:number,lng:number) =>{
	const ImagePreview = `https://maps.googleapis.com/maps/api/staticmap?
	center=${lat},${lng}&
	zoom=13&size=400x200&maptype=roadmap&
	markers=color:red%7Clabel:S%7C${lat},${lng}&
	key=${GOOGLE_MAP_API_KEY}`
	return ImagePreview
}

```
### Select an location on map
`expo install react-native-maps`