import { Platform } from "expo-modules-core"
import { Image, Pressable, View, Text, StyleSheet } from "react-native"
import { IPlace } from "../../models/place-model"
import { Colors } from "../../theme/colors"

const PlaceItem = (
	{place:{id, imageUrl, title, address, location}, onSelect}
	:{place: IPlace, onSelect:(id:string)=>void}
	)=>{
	return (
		<Pressable style={({pressed})=>[Styles.root, pressed && Styles.pressed]} onPress={()=>onSelect(id)}>
			<Image style={Styles.image} source={{uri:imageUrl}} />
			<View style={Styles.info}>
				<Text style={Styles.title}>{title}</Text>
				<Text style={Styles.address}>{address}</Text>
			</View>
		</Pressable>
	)
}

export default PlaceItem

const Styles = StyleSheet.create({
	root:{
		flexDirection:'row',
		alignItems:'flex-start',
		borderRadius:6,
		marginVertical:12,
		backgroundColor: Colors.primary500,
		...Platform.select({
			ios:{
				shadowColor: 'black', //ios only
				shadowOffset: { width: 1, height:1,}, //ios only
				shadowRadius: 2, //ios only
				shadowOpacity: 0.15, ///ios only
			},
			android:{
				elevation:2
			}
		})
	},
	pressed:{
		opacity:.5
	},
	info:{
		flex:4,
		paddingVertical:8,
		paddingHorizontal:12
	}, 
	image:{
		flex:3,
		borderBottomLeftRadius:4,
		borderTopLeftRadius:4,
		height:110,
	},
	title:{
		fontWeight:'bold',
		fontSize:18,
		color:Colors.gray700
	},
	address:{
		fontSize:14,
		color:Colors.gray700
	}
})