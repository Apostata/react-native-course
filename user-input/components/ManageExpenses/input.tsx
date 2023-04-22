import { View, Text, TextInput, TextInputProps, StyleSheet, StyleProp, ViewStyle } from "react-native"
import { GlobalStyles } from "../../constants/styles"

const Input = ({label, inputConfig, style}:{label:string, inputConfig?:TextInputProps, style?:StyleProp<ViewStyle>})=>{
	return (
		<View style={[Styles.root, style]}>
			<Text style={Styles.label}>{label}</Text>
			<TextInput style={[Styles.input, inputConfig.multiline && Styles.inputMultiline]} {...inputConfig}/>
		</View>
	)
}

export default Input
const Styles = StyleSheet.create({
	root:{
		marginHorizontal:4,
		marginVertical:8,
	},
	label:{
		fontSize: 12,
		color: GlobalStyles.colors.primary100,
	},
	input:{
		backgroundColor: GlobalStyles.colors.primary100,
		padding:6,
		borderRadius:6,
		fontSize:18,
	},
	inputMultiline:{
		minHeight:100,
		textAlignVertical:'top'
	}
})