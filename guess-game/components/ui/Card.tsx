import { View, StyleSheet, Platform, Dimensions, StyleProp, ViewStyle } from "react-native"
import { Colors } from "../../theme/colors";

const Card = ({children, style}:{children:JSX.Element, style?:StyleProp<ViewStyle>})=>{
	return (
		<View style={[Styles.card, style]}>
			{children}
		</View>
	)
}

export default Card;

const deviceWidth = Dimensions.get('window').width


const Styles = StyleSheet.create({
	card:{
		marginTop:deviceWidth < 380 ? 18 : 36,
		marginHorizontal: 24,
		borderRadius: 10,
		backgroundColor: Colors.primary800,
		margin:6,
		padding:16,
		justifyContent:'center',
		alignItems:'center',

		...Platform.select({
			ios:{
				shadowColor: 'black', //ios only
				shadowOffset: { width: 0, height:2,}, //ios only
				shadowRadius: 6, //ios only
				shadowOpacity: 1, ///ios only
			},
			android:{
				elevation: 6, //android only
				
			}
		}),
	},
	// cardContent:{
	// 	margin:6,
	// 	padding:16,
	// 	backgroundColor: Colors.primary800,
	// 	borderRadius: 10,
	// 	justifyContent:'center',
	// 	alignItems:'center'
	// },
})