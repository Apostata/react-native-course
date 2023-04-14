import { ColorValue, Platform, Pressable, StyleSheet, Text, View } from "react-native"

const CategoryItem = ({title, color}:{title:string, color:ColorValue })=>{
	return (
		<View style={[Styles.gridItem, Platform.OS ==='android' && {backgroundColor:color}]}>
			<Pressable style={({pressed})=>[Styles.button, pressed && Styles.buttonPressed]} android_ripple={{color:'#ccc'}}>
				<View style={[Styles.innerContainer, Platform.OS ==='ios' && {backgroundColor:color}]}>
					<Text style={Styles.title}>{title}</Text>
				</View>
			</Pressable>
		</View>
	)
}

export default CategoryItem
const Styles = StyleSheet.create({
	gridItem:{
		flex:1,
		margin: 16,
		height: 150,
		borderRadius:8,
		backgroundColor: 'white',
		
		...Platform.select({
			ios:{
				shadowColor: 'black', //ios only
				shadowOffset: { width: 0, height:0,}, //ios only
				shadowRadius: 6, //ios only
				shadowOpacity: 1, ///ios only
			},
			android:{
				overflow:'hidden', // to riple effect
				elevation: 3, //android only
				
			}
		})
	},
	innerContainer:{
		flex:1,
		padding:16,
		alignItems:'center',
		justifyContent:'center',
		borderRadius:8,
	},
	title:{
		fontSize:18,
		fontWeight:'bold'
	},
	button:{
		flex:1
	},
	buttonPressed:{
		...Platform.select({
			ios:{
				opacity:0.5
			},
			
		})
	}
})