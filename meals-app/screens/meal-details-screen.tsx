
import { ScrollView, Text, Image, StyleSheet, Button } from "react-native"
import { useNavigation, useRoute } from "@react-navigation/native"
import { navigationRootStack, routeRootStack } from "../types/navigation"
import { useLayoutEffect } from "react"
import { MEALS } from "../data/dummy-data"
import MealDetails from "../components/Meals/MealDetails/meal-details"
import SubTitle from "../components/Meals/MealDetails/subtitle"
import ListDetails from "../components/Meals/MealDetails/list-details"
import IconButton from "../components/ui/iconButton"
import { useContextFavorite } from "../store/context/favorites-context"


const MealDetailsScreen = ()=>{
	const navigation:  navigationRootStack<'mealDetails'>= useNavigation()
	const route : routeRootStack<'mealDetails'> = useRoute()
	const {id} = route.params
	const meal = MEALS.find((theMeal)=>theMeal.id === id)

	const {ids, addFavorite, removeFavorite} = useContextFavorite()
	const isMealFavorite = ids.includes(id)


	const toggleFavorite = ()=>{
		isMealFavorite? removeFavorite(id): addFavorite(id)
	}

	useLayoutEffect(()=>{
		navigation.setOptions({
			title: meal?.title,
			headerRight:()=><IconButton iconName={isMealFavorite?"star":'star-outline'} size={20} onPress={toggleFavorite} />
		})
	},[navigation, meal, toggleFavorite])

	return (
		<ScrollView style={{marginBottom:32}}>
			<Image source={{uri: meal?.imageUrl}} style={Styles.image}/>
			<Text style={Styles.title}>{meal?.title}</Text>
			<MealDetails duration={meal?.duration|| 0} complexity={meal?.complexity ||''} affordability={meal?.affordability || ''} styleText={Styles.detailsText}/>
			<SubTitle>Ingredients</SubTitle>
			<ListDetails list={ meal?.ingredients || []}/>
			<SubTitle>Steps</SubTitle>
			<ListDetails list={ meal?.steps || []}/>
		</ScrollView>
	)
}

export default MealDetailsScreen

const Styles = StyleSheet.create({
	image:{
		width:'100%',
		height: 300
	},
	title:{
		fontWeight: 'bold',
		fontSize:24,
		margin:8,
		textAlign:'center',
		color:'white'
	},
	detailsText:{
		color:'white'
	},
	
})