import { Pressable, Text, TextStyle, StyleSheet} from "react-native"
import {Ionicons} from '@expo/vector-icons'
import { Colors } from "../../theme/colors"

type OutilineButtonType ={
	icon: string,
	children:string,
	onPress: ()=>void,
}

const OutlinedButton = ({icon, children, onPress}: OutilineButtonType)=>{
	return(
		<Pressable onPress={onPress} style={({pressed})=>[Styles.root, pressed && Styles.pressed]}>
			<Ionicons name={icon as 'code'} style={Styles.icon}/>
			<Text style={Styles.text}>{children}</Text>
		</Pressable>
	)
}
export default OutlinedButton

const Styles = StyleSheet.create({
	root:{
		paddingHorizontal:12,
		paddingVertical:6,
		// margin:4,
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center',
		borderWidth:1,
		borderColor:Colors.primary500
	},
	pressed:{
		opacity:.7,
	},
	icon:{
		marginRight:6,
		fontSize:18,
		color:Colors.primary500
	},
	text:{
		color:Colors.primary500
	}
})