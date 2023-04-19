import { View, Text, Pressable, Image, StyleSheet, Platform } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { navigationRootStack } from "../types/navigation"
import MealDetails from "./MealDetails/meal-details"

const MealItem = ({id, title, imageUrl, duration, complexity, affordability}:{id:string, title:string, imageUrl:string, duration:number, complexity:string, affordability:string})=>{
	const navigation: navigationRootStack<'mealDetails'>= useNavigation()
	
	const handlePress = ()=>{
		navigation.navigate('mealDetails', {
			id
		})
	}

	return (
		<View style={Styles.container}>
			<Pressable style={({pressed})=>pressed?[Styles.button, Styles.buttonPressed]:Styles.button} android_ripple={{color: '#ccc'}}  onPress={handlePress}>
				<View style={Styles.innerContainer}>
					<View>
						<Image style={Styles.image} source={{uri:imageUrl}}/>
						<Text style={Styles.title}>{title}</Text>
					</View>
				
					<MealDetails duration={duration} complexity={complexity} affordability={affordability} />
				</View>
			</Pressable>
			
		</View>
	)
}

export default MealItem

const Styles =  StyleSheet.create({
	container:{
		flex: 1,
		margin:16,
		borderRadius:8,
		backgroundColor: 'white',
		...Platform.select({
			ios:{
				shadowColor: 'black', //ios only
				shadowOffset: { width: 0, height:2,}, //ios only
				shadowRadius: 6, //ios only
				shadowOpacity: 1, ///ios only
				overflow:'visible',
			},
			android:{
				elevation: 6, //android only
				overflow:'hidden',
				
			}
		}),
	},
	innerContainer:{
		...Platform.select({
			ios:{
			borderRadius:8,
			overflow:'hidden'
			},
			
		}),
	},
	image:{
		width:'100%',
		height:200
	},
	title:{
		margin:8,
		fontWeight:'bold',
		textAlign:'center',
		fontSize:18
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