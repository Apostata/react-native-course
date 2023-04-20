import { View , Text, StyleSheet, StyleProp, ViewStyle, TextStyle} from "react-native"

const MealDetails = ({duration, complexity, affordability, style, styleText}:{ duration:number, complexity:string, affordability:string, style?: StyleProp<ViewStyle>, styleText?: StyleProp<TextStyle>})=>{
	return (
	<View style={[Styles.details, style]}>
		<Text style={[Styles.text, styleText]}>{duration} min</Text>
		<Text style={[Styles.text, styleText]}>{complexity.toUpperCase()}</Text>
		<Text style={[Styles.text, styleText]}>{affordability.toUpperCase()}</Text>
	</View>
	)
}

export default MealDetails

const Styles = StyleSheet.create({
	details:{
		flexDirection:'row',
		alignItems:'center',
		justifyContent: 'center',
		padding:8
	},
	text:{
		marginHorizontal:4,
		fontSize:12,
	},
})