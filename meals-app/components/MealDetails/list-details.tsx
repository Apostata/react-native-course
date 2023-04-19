import {View, Text, StyleSheet} from 'react-native'
import { generateKey } from '../../utils/functions'
const ListDetails = ({list}: {list:string[]})=>{
	return (
	<View style={Styles.listContainer}>
		{list?.map((item)=>
		<View style={Styles.item} key={generateKey(item)}>
			<Text style={Styles.itemText} >{item}</Text>
		</View>
		)}
	</View>
	)
}

export default ListDetails

const Styles = StyleSheet.create({
	listContainer:{
 		alignItems:'center'
	},
	item:{
		borderRadius:6,
		paddingHorizontal:8,
		paddingVertical:4,
		marginVertical:4,
		marginHorizontal:12,
		backgroundColor: '#e2b497',
		width:'80%',
	},
	itemText:{
		color: '#3f2f25',
		textAlign:'center'
	}
})