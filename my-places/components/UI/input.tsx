import { View, Text, TextInput, StyleSheet } from "react-native"
import { Colors } from "../../theme/colors"
type InputType ={
	label?:string,
	value: string,
	onChangeText: (value:string)=>void
}

const Input = ({label, value, onChangeText}:InputType)=>{
	return (
		<View>
			{label &&<Text style={Styles.label}>{label}</Text>}
			<TextInput 
				style={Styles.input}
				onChangeText={onChangeText} 
				value={value}
			/>
		</View>
	)
}

export default Input

const Styles = StyleSheet.create({
	label:{
		fontWeight:'bold',
		marginBottom:4,
		color: Colors.primary500
	},
	input:{
		marginVertical:8,
		paddingHorizontal: 4,
		paddingVertical:8,
		fontSize:16,
		borderBottomColor: Colors.primary700,
		borderBottomWidth:2,
		backgroundColor:Colors.primary100
	}
})