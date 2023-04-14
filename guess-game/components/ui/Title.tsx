import { StyleSheet, Text } from "react-native"
import { Colors } from "../../theme/colors"

const Title = ({children}: {children:string})=>{
	return (
		<Text style={styles.title}>{children}</Text>
	)
}

export default Title

const styles = StyleSheet.create({
	title:{
		fontSize:24,
		fontFamily:'open-sans-bold',
		color:Colors.white,
		textAlign:'center',
		borderWidth:2,
		borderColor:Colors.white,
		padding:12,
		width:300,
		maxWidth: '80%',
		alignSelf:'center'
	}
})