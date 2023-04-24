import { Platform } from "expo-modules-core"
import {  Pressable, Text, StyleSheet } from "react-native"
import { Colors } from "../../theme/colors"

const RegularButton  = ({children, onPress}:{children:string, onPress:()=>void})=>{
	return (
		<Pressable onPress={onPress} style={({pressed})=>[Styles.root, pressed && Styles.pressed]}>
			<Text style={Styles.text}>{children}</Text>
		</Pressable>
	)
}

export default RegularButton
const Styles = StyleSheet.create({
	root:{
		paddingHorizontal:12,
		paddingVertical:8,
		margin:4,
		backgroundColor: Colors.primary800,
		...Platform.select({
			ios:{
				shadowColor: 'black', //ios only
				shadowOffset: { width: 1, height:1,}, //ios only
				shadowRadius: 2, //ios only
				shadowOpacity: 0.5, ///ios only
			},
			android:{
				elevation:2
			}
		})
	},
	pressed:{
		opacity:.7
	},
	text:{
		textAlign:"center",
		fontSize:16,
		color: Colors.primary50
	}
})