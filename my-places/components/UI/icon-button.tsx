import { ColorValue, Pressable, StyleSheet } from "react-native"
import {Ionicons} from '@expo/vector-icons'

type IIconButton={
	icon:string,
	size?:number,
	color?: ColorValue,
	onPress:()=>void
}

const IconButton = ({ icon, size=16, color='black', onPress}:IIconButton)=>{
	return (
		<Pressable onPress={onPress} style={({pressed})=>[Styles.root, pressed && Styles.pressed]}>
			<Ionicons name={icon as 'search'} size={size} color={color} />
		</Pressable>
	)
}

export default IconButton

const Styles = StyleSheet.create({
	root:{
		padding:8,
		justifyContent:'center',
		alignItems:"center"
	},
	pressed:{
		opacity: .7
	}
})