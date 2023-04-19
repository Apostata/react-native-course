import { Pressable, StyleSheet } from "react-native"
import {Ionicons} from '@expo/vector-icons'

const IconButton = ({iconName, size=24, color='white', onPress}:{iconName:string, size?:number, color?:string, onPress:()=>void})=>{
	return(
		<Pressable onPress={onPress} style={({pressed})=>pressed && Styles.pressed}>
			<Ionicons name={iconName as 'text'} size={size} color={color}/>
		</Pressable>
	)
}

export default IconButton

const Styles = StyleSheet.create({
	pressed:{
		opacity:0.7
	}
})