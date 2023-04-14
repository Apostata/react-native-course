import { View, Text, StyleSheet, Platform} from "react-native"
import { Colors } from "../../theme/colors"

const GuessLogItem = ({round, guess}:{round:number, guess:number})=>{
	return (
		<View style={Styles.listItem}>
			<Text style={Styles.text}>#{round}</Text>
			<Text style={Styles.text}>Opponent's Guess: {guess}</Text>
		</View>
	)
}

export default GuessLogItem

const Styles =  StyleSheet.create({
	listItem:{
		borderColor: Colors.primary800,
		borderWidth: 1,
		borderRadius: 40,
		padding: 12,
		marginVertical:8,
		backgroundColor: Colors.accent500,
		flexDirection:'row',
		justifyContent:'space-between',
		flex:1,
		...Platform.select({
			ios:{
				shadowColor: 'black', //ios only
				shadowOffset: { width: 0, height:0,}, //ios only
				shadowRadius: 6, //ios only
				shadowOpacity: 1, ///ios only
			},
			android:{
				elevation: 3, //android only
				
			}
		})
	},
	text:{
		fontFamily:'open-sans'
	}
})