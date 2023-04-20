import { View , Text, StyleSheet} from "react-native"

const SubTitle = ({children}:{children:string})=>{
	return (
		<View style={Styles.subTitleContainer}>
			<Text style={Styles.subTitle}>{children}</Text>
		</View>
	)
}

export default SubTitle

const Styles = StyleSheet.create({
	subTitle:{
		color:'#e2b497',
		fontSize:18,
		fontWeight:'bold',
		textAlign:'center',
	},
	subTitleContainer:{
		marginHorizontal:42,
		marginVertical:4,
		padding:6,
		borderBottomColor: 'white',
		borderBottomWidth:2
	}
})