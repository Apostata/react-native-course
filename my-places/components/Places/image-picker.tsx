import { launchCameraAsync, useCameraPermissions, PermissionStatus, ImagePickerResult } from 'expo-image-picker'
import { useState } from 'react'
import { View, Alert, Image, Text, StyleSheet} from 'react-native'
import { Colors } from '../../theme/colors'
import OutlinedButton from '../UI/outlined-button'

const ImagePicker = ({onPickedImage}:{onPickedImage:(image:string)=>void}) =>{
	const [cameraPersmissionsInformation, requestPermission] = useCameraPermissions()
	const [pickedImage, setPickedImage] = useState<string>()

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
		if(!(cameraImage.canceled)){
			const {assets} = cameraImage
			setPickedImage(assets[0].uri)
			onPickedImage(assets[0].uri)
		}
	}

	return (
		<View>
			<View style={Styles.imageContainer}>
				{pickedImage? <Image style={Styles.image}  source={{uri:pickedImage}} />:
				<Text>No images taken yet!</Text>}
			</View>
			<OutlinedButton icon='camera' onPress={takeImageHandler}>Take Image</OutlinedButton>
		</View>
	)
}

export default ImagePicker

const Styles = StyleSheet.create({
	imageContainer:{
		width:'100%',
		height:200,
		marginVertical:8,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.primary100,
		borderRadius:4
	},
	image:{
		width:'100%',
		height:'100%',
		borderRadius:4
	}
})